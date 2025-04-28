import { prisma } from "../config/prisma";

export const GuestModel = () => {
  // Modelo para encontrar Invitado por token
  const findByToken = async (token: string) => {
    return prisma.guest.findUnique({
      where: {
        token,
      },
    });
  };
  return {
    findByToken,
  };
};
