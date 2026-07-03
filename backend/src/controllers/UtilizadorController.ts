import { Request, Response } from "express";

export class UtilizadorController {
  async criarUtilizador(req: Request, res: Response) {
    try {
      res.send("Ok");
    } catch (error) {}
  }
}
