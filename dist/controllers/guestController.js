var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GuestService } from "../services/guestService.js";
import httpStatus from "../helpers/httpStatus.js";
export const GuestController = () => {
    const { getAllGuestService, deleteGuestService, getGuestByIdService, createGuestService, updateGuestService, validateGuest, confirmGuest, } = GuestService();
    // Controlador para validar invitado
    const validate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, token } = req.body;
        try {
            const guest = yield validateGuest(name, token);
            if (!guest)
                res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        }
        catch (error) {
            next(error);
        }
    });
    // Controlador para confirmar asistencia
    const confirm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { token } = req.body;
            const confirmedGuests = req.body.confirmedGuests;
            const guest = yield confirmGuest(token, confirmedGuests);
            res.status(httpStatus.OK).json({
                message: "Asistencia confirmada",
                guest,
            });
        }
        catch (error) {
            next(error);
        }
    });
    // Controlador para obtener todos los invitados
    const getAllGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const guests = yield getAllGuestService();
        if (!guests)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    });
    // Controlador para eliminar un invitado
    const deleteGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const guest = yield deleteGuestService(Number(id));
        if (!guest)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    });
    // Controlador para buscar invitado por id
    const getGuestById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const guest = yield getGuestByIdService(Number(id));
        if (!guest)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    });
    // Controlador para crear un invitado
    const createGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield createGuestService(req.body);
        if (!guest)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    });
    // Controlador para actualizar un invitado
    const updateGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const guest = yield updateGuestService(req.body);
            if (!guest) {
                res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
            }
            res.status(httpStatus.OK).json(guest);
        }
        catch (error) {
            next(error); // Propaga errores al middleware de manejo de errores
        }
    });
    return {
        validate,
        confirm,
        getAllGuest,
        deleteGuest,
        getGuestById,
        createGuest,
        updateGuest,
    };
};
