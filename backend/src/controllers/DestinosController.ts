import { Request, Response } from "express";

export class DestinoController {
  async listarDestinos(_req: Request, res: Response) {
    try {
      res.send("Ok");
    } catch (error) {}
  }
}
