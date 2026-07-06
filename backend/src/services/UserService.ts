import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/IUser";

const prisma = new PrismaClient();

export const createUser = async (data: IUser) => {
  const result = await prisma.user.create({
    data: {
      nome: data.nome,
      email: data.email,
      password: data.password,
      keycloakId: data.keycloakId,
    },
  });
  return result;
};
export const findAllUser = async () => {
  const result = await prisma.user.findMany();
  return result;
};
