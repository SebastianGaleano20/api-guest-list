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
  const confirmAttendance = async (token: string, data: Guest) => {
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
  const createGuest = async (data: Guest) => {
    return await prisma.guest.create({
      data,
    });
  };
  const getAllGuest = async () => {
    return await prisma.guest.findMany();
  };

  const deleteGuest = async (id: number) => {
    return await prisma.guest.delete({
      where: {
        id: id
      }
    })
  }

  return {
    findByToken,
    confirmAttendance,
    createGuest,
    getAllGuest,
    deleteGuest
  };
};
