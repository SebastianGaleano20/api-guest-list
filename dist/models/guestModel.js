var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import prisma from "../config/prisma";
export const GuestModel = () => {
    // Modelo para encontrar Invitado por token
    const findByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.guest.findFirst({
            where: {
                token,
            },
        });
    });
    // Model para confirmar asistencia
    const confirmAttendance = (token, confirmedGuests) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.guest.update({
            where: { token: token },
            data: {
                confirmedGuests,
                status: "CONFIRMATED",
            },
        });
    });
    // Model para crear invitado
    const createGuest = (data) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { id } = data, guestData = __rest(data, ["id"]);
        return yield prisma.guest.create({
            data: Object.assign(Object.assign({}, guestData), { confirmedGuests: (_a = guestData.confirmedGuests) !== null && _a !== void 0 ? _a : [] }),
        });
    });
    // Model para obtener todos los invitados
    const getAllGuest = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.guest.findMany();
    });
    // Model para eliminar un invitado
    const deleteGuest = (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.guest.delete({
            where: {
                id: id,
            },
        });
    });
    // Model para encontrar invitado por id
    const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.guest.findUnique({
            where: {
                id: id,
            },
        });
    });
    // Model para actualizar datos del invitado
    const updateGuest = (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = data, rest = __rest(data, ["id"]);
        const guest = yield prisma.guest.update({
            where: {
                token: data.token,
            },
            data: Object.assign({}, rest),
        });
        return guest;
    });
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
