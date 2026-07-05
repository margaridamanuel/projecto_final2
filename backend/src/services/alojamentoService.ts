import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AlojamentosService {
  async listarAlojamentos() {
    return await prisma.alojamento.findMany({
      include: {
        destino: true,
        proprietario: true,
      },
    });
  }
}
