import { Request, Response } from "express";
import { DestinosService } from "../services/destinosService";

export class DestinoController {
  private destinosService = new DestinosService();

  async listarDestinos(req: Request, res: Response) {
    try {
      const destinos = await this.destinosService.listarDestinos();

      return res.status(200).json({
        message: "Destinos obtidos com sucesso",
        data: destinos,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Erro ao listar destinos",
      });
    }
  }
}
