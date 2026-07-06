import { Request, Response } from "express";
import { createUser, findAllUser } from "../services/UserService";
import AuthService from "../services/AuthService";
import { transformDataCreateUSer } from "../utils/adapters";

export class UtilizadorController {
  async criarUtilizador(req: Request, res: Response) {
    console.log("BODY RECEBIDO:", req.body);

    try {
      const data = req.body;

      const userAuth = await AuthService.createUSer(
        transformDataCreateUSer({
          ...data,
          groups: "geral", // Alterar para receber o que vem do front.
        }),
      );

      const { data: keycloakId } = userAuth;
      if (!keycloakId) throw new Error("Erro ao criar utilizador no Keycloak");

      const user = await createUser({ ...data, keycloakId });
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
}
