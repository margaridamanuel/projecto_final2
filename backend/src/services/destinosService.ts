import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DestinosService {
  async listarDestinos() {
    try {
      const destinos = await prisma.destino.findMany();

      console.log(destinos);

      return destinos;
    } catch (error: any) {
      console.log("ERRO NO SERVICE:", error.message);

      throw error;
    }
  }
}
