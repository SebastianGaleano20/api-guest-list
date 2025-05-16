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
    const { findByToken, confirmAttendance, getAllGuest, deleteGuest, findById, createGuest, updateGuest, } = GuestModel();
    // Servicio para validar invitado
    const validateGuest = (firstName, token) => __awaiter(void 0, void 0, void 0, function* () {
        //Validamos el token del invitado
        const guest = yield findByToken(token);
        if (!guest || guest.firstName !== firstName)
            return null;
        // Si el token o nombre no coincide devolvemos null
        return guest;
    });
    // Servicio para confirmar asistencia
    const confirmGuest = (token, confirmedGuests) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield findByToken(token);
        if (!guest || guest.status === "CONFIRMATED") {
            throw new Error("Invitado no encontrado o ya confirmado");
        }
        return confirmAttendance(token, confirmedGuests);
    });
    // Servicio para obtener invitados
    const getAllGuestService = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield getAllGuest();
    });
    // Servicio para eliminar un invitado
    const deleteGuestService = (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield deleteGuest(id);
    });
    // Servicio para obtener invitado por id
    const getGuestByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield findById(id);
    });
    // Servicio para crear invitado
    const createGuestService = (data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield createGuest(data);
    });
    // Servicio para actualizar datos del invitado
    const updateGuestService = (data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield updateGuest(data);
    });
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
