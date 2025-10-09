var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GuestModel } from "../models/guestModel.js";
export const GuestService = () => {
    const { createGuest,
    // findByToken,
    // getAllGuest,
    // deleteGuest,
    // findById,
    // updateGuest,
     } = GuestModel();
    // Servicio para crear invitado
    const createGuestService = (data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield createGuest(data);
    });
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
