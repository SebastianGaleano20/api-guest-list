import { prisma } from "../config/prisma";
import { Guest } from "../types";

export const GuestModel = () => {
  // Modelo para encontrar Invitado por token
  const findByToken = async (token: string) => {
    return prisma.guest.findUnique({
      where: {
        token,
      },
    });
  };
  const confirmAttendance = (token: string, data: Guest) => {
    return prisma.guest.update({
      where: {
        token,
      },
      data: {
        ...data,
        status: "CONFIRMED",
      },
    });
  };
  const createGuest = (data: Guest) => {
    return prisma.guest.create({
      data,
    });
  };
  const getAllGuest = () => {
    return prisma.guest.findMany();
  };
  return {
    findByToken,
    confirmAttendance,
    createGuest,
    getAllGuest,
  };
};
