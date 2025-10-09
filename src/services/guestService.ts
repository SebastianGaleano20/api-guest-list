import { GuestModel } from "../models/guestModel.js";
import type { Guest, GuestLoginResult } from "../types/index.js";
import { cleanObject } from "../utils/cleanObject.js";
import { generateToken } from "../utils/tokenManagement.js";

export const GuestService = () => {
  const { createGuest } = GuestModel();
  // Servicio para crear invitado
  const createGuestService = async (data: Guest) => {
    return await createGuest(data);
  };
  // // Servicio para validar invitado
  // const validateGuest = async (
  //   firstName: string,
  //   token: string
  // ): Promise<GuestLoginResult | null> => {
  //   //Validamos el token del invitado
  //   const guest = await findByToken(token);
  //   if (!guest || guest.firstName !== firstName) return null;
  //   const accessToken = generateToken({
  //     data: { guestId: guest.id, firstName: guest.firstName },
  //     expiresIn: "15m",
  //   });

  //   const refreshToken = generateToken({
  //     data: { guestId: guest.id },
  //     expiresIn: "7d",
  //     isRefresh: true,
  //   });
  //   // Si el token o nombre no coincide devolvemos null
  //   return {
  //     guest,
  //     accessToken,
  //     refreshToken,
  //   };
  // };
  // // Servicio para obtener invitados
  // const getAllGuestService = async () => {
  //   return await getAllGuest();
  // };
  // // Servicio para eliminar un invitado
  // const deleteGuestService = async (id: number) => {
  //   return await deleteGuest(id);
  // };
  // // Servicio para obtener invitado por id
  // const getGuestByIdService = async (id: number) => {
  //   return await findById(id);
  // };

  // // Servicio para actualizar datos del invitado
  // const updateGuestService = async (id: number, data: Guest) => {
  //   const cleanedData = cleanObject(data);
  //   const dataUpdate = await updateGuest(id, cleanedData);
  //   return dataUpdate;
  // };
  return {
    createGuestService,
    // validateGuest,
    // updateGuestService,
    // getGuestByIdService,
    // getAllGuestService,
    // deleteGuestService,
  };
};
