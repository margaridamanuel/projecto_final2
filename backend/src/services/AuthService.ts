import jwt from "jsonwebtoken";
import { UserinfoResponse } from "openid-client";
import { grantType, kcAdminClient, kcClient } from "../../config/keycloak";
import { UserLoginInterface } from "../interfaces/KeycloakInterface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class AuthService {
  static async login({ username, password }: UserLoginInterface) {
    try {
      const kcC = await kcClient();
      const tokenSet = await kcC.grant({
        grant_type: grantType,
        username,
        password,
      });

      const userInfo: UserinfoResponse = await kcC.userinfo(tokenSet);
      const decodedToken: any = jwt.decode(String(tokenSet.access_token));
      const { groups, resource_access } = decodedToken;

      const keycloakId = userInfo.sub!;
      const email = userInfo.email!;
      const nome = userInfo.name || userInfo.preferred_username || "Utilizador";

      let utilizador = await prisma.user.findUnique({
        where: {
          keycloakId,
        },
      });

      if (!utilizador) {
        utilizador = await prisma.user.create({
          data: {
            nome,
            email,
            password: "",
            keycloakId,
            role: groups?.includes("/admin")
              ? "ADMIN"
              : groups?.includes("/host")
                ? "PROPRIETARIO"
                : "CLIENTE",
          },
        });
      }

      return {
        status: true,
        data: {
          id: utilizador.id,
          accessToken: tokenSet.access_token,
          refreshToken: tokenSet.refresh_token,
          userInfo,
          groups,
        },
      };
    } catch (e: any) {
      return {
        status: false,
        message:
          e?.response?.data?.error_description ||
          e?.message ||
          "Erro ao autenticar",
      };
    }
  }

  static async createUSer(data: any) {
    const kcAdmin = await kcAdminClient();

    const { groups, ...userData } = data;

    console.log("GRUPO A PROCURAR:", groups);

    const result = await kcAdmin.users.create(userData);

    console.log("UTILIZADOR KEYCLOAK CRIADO:", result);

    if (!result?.id) {
      throw new Error("Erro ao criar utilizador no Keycloak");
    }

    const grupos = await kcAdmin.groups.find();

    console.log("GRUPOS KEYCLOAK:", grupos);

    const grupo = grupos.find(
      (g) => g.path === groups || g.name === groups.replace("/", ""),
    );

    console.log("GRUPO ENCONTRADO:", grupo);

    if (!grupo || !grupo.id) {
      throw new Error(`Grupo '${groups}' não encontrado`);
    }

    await kcAdmin.users.addToGroup({
      id: result.id,
      groupId: grupo.id,
    });

    console.log("UTILIZADOR ADICIONADO AO GRUPO");

    return {
      status: true,
      data: result.id,
    };
  }
}
