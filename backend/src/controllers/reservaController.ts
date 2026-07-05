import { Request, Response } from "express";
import { ReservaService } from "../services/reservaService";

export class ReservaController {
  private service = new ReservaService();

  async criar(req: Request, res: Response) {
    try {
      const reserva = await this.service.criarReserva(req.body);
      return res.status(201).json(reserva);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao criar reserva" });
    }
  }
}
