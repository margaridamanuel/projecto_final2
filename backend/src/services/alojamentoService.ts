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

  async criarAlojamento(data: any, fotos: Express.Multer.File[] = []) {
    let proprietario = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!proprietario) {
      proprietario = await prisma.user.create({
        data: {
          nome: data.proprietario,
          email: data.email,
          password: data.password,
          role: "PROPRIETARIO",
          keycloakId: `local-${Date.now()}`,
        },
      });
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
