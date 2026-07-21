import { Request, Response } from "express";
import { createUser, findAllUser, findUserById } from "../services/UserService";
import AuthService from "../services/AuthService";
import { transformDataCreateUSer } from "../utils/adapters";

export class UtilizadorController {
  async criarUtilizador(req: Request, res: Response) {
    console.log("BODY RECEBIDO:", req.body);

    try {
      const data = req.body;

      const dadosKeycloak = transformDataCreateUSer({
        ...data,
        groups: data.grupo,
      });

      console.log("DADOS TRANSFORMADOS PARA KEYCLOAK:", dadosKeycloak);

      const userAuth = await AuthService.createUSer(dadosKeycloak);

      const { data: keycloakId } = userAuth;

      if (!keycloakId) throw new Error("Erro ao criar utilizador no Keycloak");

      const user = await createUser({
        ...data,
        keycloakId,
        role:
          data.grupo === "/admin"
            ? "ADMIN"
            : data.grupo === "/host"
              ? "PROPRIETARIO"
              : "CLIENTE",
      });
      return res.status(201).send({
        response: {
          statusCode: 201,
          message: "Utilizador criado com sucesso",
        },
        data: user,
      });
    } catch (error) {
      console.error("ERRO NO PRISMA:", error);
      return res.status(400).json({
        message: "Erro ao criar utilizador",
        error,
      });
    }
  }

  async obterUtilizador(req: Request, res: Response) {
    try {
      const result = await findAllUser();
      return res.status(200).json({
        message: "Utilizadores obtidos com sucesso",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao obter utilizador",
        error,
      });
    }
  }

  async obterUtilizadorPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const utilizador = await findUserById(id);

      if (!utilizador) {
        return res.status(404).json({
          mensagem: "Utilizador não encontrado",
        });
      }

      return res.status(200).json(utilizador);
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao obter utilizador",
        error,
      });
    }
  }
}
