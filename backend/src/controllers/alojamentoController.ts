import { Request, Response } from "express";
import { AlojamentosService } from "../services/alojamentoService";

export class AlojamentosController {
  private service = new AlojamentosService();

  async listar(req: Request, res: Response) {
    const alojamentos = await this.service.listarAlojamentos();

    return res.json(alojamentos);
  }

  async criar(req: Request, res: Response) {
    try {
      const alojamento = await this.service.criarAlojamento(
        req.body,
        req.files as Express.Multer.File[],
      );

      return res.status(201).json({
        mensagem: "Alojamento criado com sucesso",
        alojamento,
      });
    } catch (erro) {
      console.error(erro);

      return res.status(500).json({
        mensagem: "Erro ao criar alojamento",
      });
    }
  }

  async atualizarStatus(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const { status } = req.body;

      const alojamento = await this.service.atualizarStatus(id, status);

      return res.json({
        mensagem: "Estado atualizado com sucesso",
        alojamento,
      });
    } catch (erro) {
      console.error(erro);

      return res.status(500).json({
        mensagem: "Erro ao atualizar estado",
      });
    }
  }
}
