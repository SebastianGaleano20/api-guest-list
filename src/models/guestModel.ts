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
  // Model para confirmar asistencia
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
  // Model para crear invitado
  const createGuest = async (data: Guest) => {
    return await prisma.guest.create({
      data,
    });
  };
  // Model para obtener todos los invitados
  const getAllGuest = async () => {
    return await prisma.guest.findMany();
  };
  // Model para eliminar un invitado
  const deleteGuest = async (id: number) => {
    return await prisma.guest.delete({
      where: {
        id: id
      }
    })
  }
  // Model para encontrar invitado por id
  const findById = async (id:number) => {
    return await prisma.guest.findUnique({
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
    deleteGuest,
    findById
  };
};
