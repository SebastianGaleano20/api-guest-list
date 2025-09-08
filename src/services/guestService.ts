import { GuestModel } from "../models/guestModel.js";
import type { Guest, ConfirmedGuest } from "../types/index.js";

export const GuestService = () => {
  const {
    findByToken,
    getAllGuest,
    deleteGuest,
    findById,
    createGuest,
    updateGuest,
  } = GuestModel();
  // Servicio para validar invitado
  const validateGuest = async (firstName: string, token: string) => {
    //Validamos el token del invitado
    const guest = await findByToken(token);
    if (!guest || guest.firstName !== firstName) return null;
    // Si el token o nombre no coincide devolvemos null
    return guest;
  };

  // Servicio para obtener invitados
  const getAllGuestService = async () => {
    return await getAllGuest();
  };
  // Servicio para eliminar un invitado
  const deleteGuestService = async (id: number) => {
    return await deleteGuest(id);
  };
  // Servicio para obtener invitado por id
  const getGuestByIdService = async (id: number) => {
    return await findById(id);
  };
  // Servicio para crear invitado
  const createGuestService = async (data: Guest) => {
    return await createGuest(data);
  };
  // Servicio para actualizar datos del invitado
  const updateGuestService = async (data: Guest) => {
    return await updateGuest(data);
  };
  return {
    validateGuest,
    updateGuestService,
    createGuestService,
    getGuestByIdService,
    getAllGuestService,
    deleteGuestService,
  };
};
