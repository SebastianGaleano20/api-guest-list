var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from "../config/prisma.js";
import { encrypt } from "../utils/bcrypt.js";
export const AdminModel = () => {
    // Modelo para crear Administrador.
    const createAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
        // Encriptamos la contraseña
        const passwordToHash = data.password;
        const hash = yield encrypt(passwordToHash);
        data.password = hash;
        return prisma.admin.create({
            data: data,
        });
    });
    // Modelo para validar Administrador
    const findByMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        const admin = yield prisma.admin.findFirst({ where: { email } });
        return admin;
    });
    return {
        createAdmin,
        findByMail,
    };
};
