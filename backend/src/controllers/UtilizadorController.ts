import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UtilizadorController {
  async criarUtilizador(req: Request, res: Response) {
    console.log("BODY RECEBIDO:", req.body);

    try {
      const { nome, email, password } = req.body;

      const user = await prisma.user.create({
        data: {
          nome,
          email,
          password,
          keycloakId: "temp-" + Date.now(), // temporário para não quebrar
        },
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error("ERRO NO PRISMA:", error);
      return res.status(500).json({
        message: "Erro ao criar utilizador",
        error,
      });
    }
  }
}
