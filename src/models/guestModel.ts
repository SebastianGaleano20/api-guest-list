import prisma from "../config/prisma";
import type { Guest, ConfirmedGuest } from "../types/index";

export const GuestModel = () => {
  // Modelo para encontrar Invitado por token
  const findByToken = async (token: string) => {
    return await prisma.guest.findFirst({
      where: {
        token,
      },
    });
  };
  // Model para confirmar asistencia
  const confirmAttendance = async (
    token: string,
    confirmedGuests: ConfirmedGuest[]
  ) => {
    return await prisma.guest.update({
      where: { token: token },
      data: {
        confirmedGuests,
        status: "CONFIRMATED",
      },
    });
  };
  // Model para crear invitado
  const createGuest = async (data: Guest) => {
    const { id, ...guestData } = data;
    const guest = await prisma.guest.create({
      data: guestData,
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
    if (id) {
      const guest = await prisma.guest.update({
        where: {
          token: data.token,
        },
        data: {
          ...rest,
        },
      });
    }

    return {
      findByToken,
      confirmAttendance,
      createGuest,
      getAllGuest,
      deleteGuest,
      findById,
      updateGuest,
    };
  };
};
