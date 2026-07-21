import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AlojamentosService {
  async buscarPorId(id: number) {
    return await prisma.alojamento.findUnique({
      where: {
        id: id,
      },

      include: {
        destino: true,
        imagens: true,
      },
    });
  }

  async listarPorProprietario(proprietarioId: number) {
    return await prisma.alojamento.findMany({
      where: {
        proprietarioId,
      },

      include: {
        destino: true,
        imagens: true,
        proprietario: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async criarAlojamento(data: any, fotos: Express.Multer.File[] = []) {
    const proprietario = await prisma.user.findUnique({
      where: {
        id: Number(data.proprietarioId),
      },
    });

    if (!proprietario) {
      throw new Error("Proprietário não encontrado");
    }

    const alojamento = await prisma.alojamento.create({
      data: {
        nome: data.nome,

        descricao: data.descricao,

        tipo: data.categoria.toUpperCase(),

        quartos: Number(data.quartos),

        preco: Number(data.preco),

        provincia: data.provincia,

        municipio: data.municipio,

        endereco: data.endereco,

        servicos: data.servicos,

        imagem: fotos.length > 0 ? fotos[0].filename : "sem-imagem.jpg",

        proprietarioId: proprietario.id,
      },
    });

    if (fotos.length > 0) {
      await prisma.imagem.createMany({
        data: fotos.map((foto) => ({
          url: foto.filename,

          alojamentoId: alojamento.id,
        })),
      });
    }

    return alojamento;
  }

  async listar() {
    return await prisma.alojamento.findMany({
      include: {
        destino: true,
        imagens: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }
  async atualizarStatus(id: number, status: string) {
    return await prisma.alojamento.update({
      where: {
        id,
      },

      data: {
        status: status as any,
      },
    });
  }
}
