import { Request, Response } from "express";

export class DestinoController {
  async listarDestinos(req: Request, res: Response) {
    try {
      res.send("Ok");
    } catch (error) {}
  }
}
