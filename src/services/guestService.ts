import { GuestModel } from "../models/guestModel";
import type { Guest } from "../types/index";

const { findByToken, confirmAttendance } = GuestModel(); //Extraemos los models
export const GuestService = () => {
  const validateGuest = async (name: string, token: string) => {
    //Validamos el token del invitado
    const guest = await findByToken(token);
    if (!guest || guest.name !== name) return null;
    // Si el token o nombre no coincide devolvemos null
    return guest;
  };
  const confirmGuest = async (token: string, data: Guest) => {
    const guest = await findByToken(token);
    if (!guest || guest.status === "CONFIRMED")
      throw new Error("Invitado no encontrado o ya confirmado");
    return confirmAttendance(token, data);
  };
  return {
    validateGuest,
    confirmGuest,
  };
};
