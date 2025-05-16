import { GuestModel } from "../models/guestModel";
import type { Guest, ConfirmedGuest } from "../types/index";

export const GuestService = () => {
  const {
    findByToken,
    confirmAttendance,
    getAllGuest,
    deleteGuest,
    findById,
    createGuest,
    updateGuest,
  } = GuestModel();
  // Servicio para validar invitado
  const validateGuest = async (name: string, token: string) => {
    //Validamos el token del invitado
    const guest = await findByToken(token);
    if (!guest || guest.name !== name) return null;
    // Si el token o nombre no coincide devolvemos null
    return guest;
  };
  // Servicio para confirmar asistencia
  const confirmGuest = async (
    token: string,
    confirmedGuests: ConfirmedGuest[]
  ) => {
    const guest = await findByToken(token);
    if (!guest || guest.status === "CONFIRMATED") {
      throw new Error("Invitado no encontrado o ya confirmado");
    }
    return confirmAttendance(token, confirmedGuests);
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
    confirmGuest,
    updateGuestService,
    createGuestService,
    getGuestByIdService,
    getAllGuestService,
    deleteGuestService,
  };
};
