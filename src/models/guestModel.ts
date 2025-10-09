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
  return {
    createGuest,
  };
};
