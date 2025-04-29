import { prisma } from "../config/prisma";
import type { Guest } from "../types/index";

export const GuestModel = () => {
  // Modelo para encontrar Invitado por token
  const findByToken = async (token: string) => {
    return await prisma.guest.findUnique({
      where: {
        token,
      },
    });
  };
  const confirmAttendance = async(token: string, data: Guest) => {
    return await prisma.guest.update({
      where: {
        token,
      },
      data: {
        ...data,
        status: "CONFIRMED",
      },
    });
  };
  const createGuest = async(data: Guest) => {
    return await prisma.guest.create({
      data,
    });
  };
  const getAll = async() => {
    return await prisma.guest.findMany();
  };
 
  return {
    findByToken,
    confirmAttendance,
    createGuest,
    getAll,
  };
};
