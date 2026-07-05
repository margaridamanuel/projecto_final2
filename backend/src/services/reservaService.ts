import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ReservaService {
  async criarReserva(data: {
    checkIn: string;
    checkOut: string;
    total: number;
    userId: number;
    alojamentoId: number;
  }) {
    return await prisma.reserva.create({
      data: {
        checkIn: new Date(data.checkIn),
        checkOut: new Date(data.checkOut),
        total: data.total,
        userId: data.userId,
        alojamentoId: data.alojamentoId,
      },
    });
  }
}
