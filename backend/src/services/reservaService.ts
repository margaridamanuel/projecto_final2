import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ReservaService {
  async criarReserva(data: {
    checkIn: string;
    checkOut: string;
    total: number;
    alojamentoId: number;
    nome: string;
    email: string;
    telefone: string;
  }) {
    // Procurar utilizador pelo email
    let user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // Se não existir, criar automaticamente
    if (!user) {
      user = await prisma.user.create({
        data: {
          nome: data.nome,
          email: data.email,
          password: "123456", // palavra-passe temporária
          keycloakId: `local-${Date.now()}`,
          role: "CLIENTE",
        },
      });
    }

    // Criar reserva
    return await prisma.reserva.create({
      data: {
        checkIn: new Date(data.checkIn),
        checkOut: new Date(data.checkOut),
        total: data.total,
        alojamentoId: data.alojamentoId,
        userId: user.id,
      },
    });
  }
  async listarReservas() {
    return await prisma.reserva.findMany({
      include: {
        user: true,
        alojamento: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async atualizarStatus(id: number, status: string) {
    return await prisma.reserva.update({
      where: {
        id,
      },
      data: {
        status: status as any,
      },
    });
  }

  async listarReservasDoProprietario(proprietarioId: number) {
    return await prisma.reserva.findMany({
      where: {
        alojamento: {
          proprietarioId,
        },
      },

      include: {
        user: true,
        alojamento: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async dashboard(proprietarioId: number) {
    const [alojamentos, reservasPendentes, reservasConfirmadas, receita] =
      await Promise.all([
        prisma.alojamento.count({
          where: {
            proprietarioId,
          },
        }),

        prisma.reserva.count({
          where: {
            alojamento: {
              proprietarioId,
            },
            status: "PENDENTE",
          },
        }),

        prisma.reserva.count({
          where: {
            alojamento: {
              proprietarioId,
            },
            status: "CONFIRMADA",
          },
        }),

        prisma.reserva.aggregate({
          where: {
            alojamento: {
              proprietarioId,
            },
            status: "CONFIRMADA",
          },

          _sum: {
            total: true,
          },
        }),
      ]);

    return {
      alojamentos,
      reservasPendentes,
      reservasConfirmadas,
      receita: Number(receita._sum.total || 0),
    };
  }
}
