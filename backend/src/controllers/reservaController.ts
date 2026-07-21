import { Request, Response } from "express";
import { ReservaService } from "../services/reservaService";

export class ReservaController {
  private service = new ReservaService();

  async criar(req: Request, res: Response) {
    try {
      console.log(req.body);

      const reserva = await this.service.criarReserva(req.body);

      return res.status(201).json(reserva);
    } catch (err) {
      console.error(err);

      return res.status(500).json(err);
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const reservas = await this.service.listarReservas();

      return res.json(reservas);
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        mensagem: "Erro ao listar reservas",
      });
    }
  }

  async atualizarStatus(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;

      const reserva = await this.service.atualizarStatus(id, status);

      return res.json({
        mensagem: "Estado atualizado com sucesso",
        reserva,
      });
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        mensagem: "Erro ao atualizar estado",
      });
    }
  }
  async listarDoProprietario(req: Request, res: Response) {
    try {
      const proprietarioId = Number(req.params.id);

      const reservas =
        await this.service.listarReservasDoProprietario(proprietarioId);

      return res.json(reservas);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        mensagem: "Erro ao listar reservas do proprietário",
      });
    }
  }
}
