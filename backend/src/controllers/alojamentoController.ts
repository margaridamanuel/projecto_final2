import { Request, Response } from "express";
import { AlojamentosService } from "../services/alojamentoService";

export class AlojamentosController {
  private service = new AlojamentosService();

  async listarDoProprietario(req: Request, res: Response) {
    try {
      const proprietarioId = Number(req.params.id);

      const alojamentos =
        await this.service.listarPorProprietario(proprietarioId);

      return res.json(alojamentos);
    } catch (erro) {
      console.error(erro);

      return res.status(500).json({
        mensagem: "Erro ao listar alojamentos do proprietário",
      });
    }
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

  async listar(req: Request, res: Response) {
    try {
      const alojamentos = await this.service.listar();

      return res.json(alojamentos);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        mensagem: "Erro ao listar alojamentos",
      });
    }
  }

  // NOVO MÉTODO
  async buscarPorId(req: Request, res: Response) {
    try {
      console.log("PARAMS RECEBIDOS:", req.params);

      const id = Number(req.params.id);

      console.log("ID CONVERTIDO:", id);

      const alojamento = await this.service.buscarPorId(id);

      if (!alojamento) {
        return res.status(404).json({
          mensagem: "Alojamento não encontrado",
        });
      }

      return res.json(alojamento);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        mensagem: "Erro ao buscar alojamento",
      });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const alojamento = await this.service.atualizar(id, req.body);

      return res.json(alojamento);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        mensagem: "Erro ao atualizar alojamento",
      });
    }
  }
}
