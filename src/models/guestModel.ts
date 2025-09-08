import prisma from "../config/prisma.js";
import type { Guest, ConfirmedGuest } from "../types/index.js";

export const GuestModel = () => {
  // Model para crear invitado
  const createGuest = async (data: Guest) => {
    const { id, ...guestData } = data;

    return await prisma.guest.create({
      data: {
        ...guestData,
      },
    });
  };
  // Model para obtener todos los invitados
  const getAllGuest = async () => {
    try {
      const guests = await prisma.guest.findMany();
      if (!guests) return { message: "No hay invitados" };
      return guests;
    } catch (error) {
      throw new Error("Error al obtener invitados");
    } finally {
      await prisma.$disconnect();
    }
  };
  // Model para eliminar un invitado
  const deleteGuest = async (id: number) => {
    return await prisma.guest.delete({
      where: {
        id: id,
      },
    });
  };
  // Model para encontrar invitado por id
  const findById = async (id: number) => {
    return await prisma.guest.findUnique({
      where: {
        id: id,
      },
    });
  };
  // Model para actualizar datos del invitado
  const updateGuest = async (data: Guest) => {
    const { id, ...rest } = data;
    const guest = await prisma.guest.update({
      where: {
        token: data.token,
      },
      data: {
        ...rest,
      },
    });
    return guest;
  };
  // Modelo para encontrar Invitado por token
  const findByToken = async (token: string) => {
    return await prisma.guest.findFirst({
      where: {
        token,
      },
    });
  };
  return {
    findByToken,
    createGuest,
    getAllGuest,
    deleteGuest,
    findById,
    updateGuest,
  };
};
