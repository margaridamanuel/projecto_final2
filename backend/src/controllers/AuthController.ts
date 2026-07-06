import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({
          response: {
            statusCode: 400,
            message: "Username e password são obrigatórios",
          },
          data: {},
        });
      }

      const result = await AuthService.login({ username, password });

      if (!result || !result.status) {
        return res.status(401).json({
          response: {
            statusCode: 401,
            message: result?.message || "Credenciais inválidas",
          },
          data: {},
        });
      }

      return res.status(200).json({
        response: {
          statusCode: 200,
          message: "Login com sucesso",
        },
        data: result.data,
      });
    } catch (err: any) {
      return res.status(500).json({
        response: {
          statusCode: 500,
          message: err.message,
        },
        data: {},
      });
    }
  }
}
