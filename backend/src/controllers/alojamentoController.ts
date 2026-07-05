import { Request, Response } from "express";
import { AlojamentosService } from "../services/alojamentoService";

export class AlojamentosController {
  private service = new AlojamentosService();

  async listar(req: Request, res: Response) {
    const alojamentos = await this.service.listarAlojamentos();
    return res.json(alojamentos);
  }
}
