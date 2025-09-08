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
    } catch (error: any) {
      throw new Error(`Error al crear invitado ${error.message}`);
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
    } catch (error: any) {
      throw new Error(`Error al crear invitado ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  };
  // Model para encontrar invitado por id
  const findById = async (id: number) => {
    try {
      const guest = await prisma.guest.findUnique({
        where: {
          id: id,
        },
      });
      return guest;
    } catch (error: any) {
      throw new Error(`Error al crear invitado ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  };

  // Model para actualizar datos del invitado
  const updateGuest = async (id: number, data: Guest) => {
    try {
      const guest = await prisma.guest.update({
        where: {
          id: id,
        },
        data: data,
        omit: {
          token: true,
        },
      });
      return guest;
    } catch (error: any) {
      throw new Error(`Error al crear invitado ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  };
  // Modelo para encontrar Invitado por token
  const findByToken = async (token: string) => {
    try {
      const guest = await prisma.guest.findUnique({
        where: {
          token,
        },
      });
      return guest;
    } catch (error: any) {
      throw new Error(`Error al crear invitado ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
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
