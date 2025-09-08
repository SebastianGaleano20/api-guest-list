import prisma from "../config/prisma.js";
import type { Guest } from "../types/index.js";

export const GuestModel = () => {
  // Model para crear invitado
  const createGuest = async (data: Guest) => {
    try {
      const guest = await prisma.guest.create({
        data: data,
      });
      return guest;
    } catch (error: any) {
      throw new Error(`Error al crear invitado ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  };
  // Model para obtener todos los invitados
  const getAllGuest = async () => {
    try {
      const guests = await prisma.guest.findMany();
      return guests;
    } catch (error) {
      throw new Error("Error al obtener invitados");
    } finally {
      await prisma.$disconnect();
    }
  };
  // Model para eliminar un invitado
  const deleteGuest = async (id: number) => {
    try {
      const guest = await prisma.guest.delete({
        where: {
          id: id,
        },
      });
      return guest;
    } catch (error) {
      throw new Error("Error al eliminar invitado");
    } finally {
      await prisma.$disconnect();
    }
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
    const { ...rest } = data;
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
