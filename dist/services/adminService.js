var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AdminModel } from "../models/adminModel";
import { verified } from "../utils/bcrypt";
import { generateToken } from "../utils/tokenManagement";
const { findByMail, createAdmin } = AdminModel();
export const AdminService = () => {
    // Servicio para crear administrador
    const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield createAdmin(data);
    });
    // Servicio para logear administrador.
    const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const admin = yield findByMail(email);
        if (!admin)
            return false;
        const isValid = yield verified(password, admin.password);
        if (!isValid)
            return false;
        const payload = {
            id: admin.id,
            name: admin.name,
            email: admin.email,
            image: admin.image,
        };
        const token = generateToken({
            data: payload,
            expiresIn: "4h",
        });
        const refreshToken = generateToken({
            data: payload,
            expiresIn: "7d",
            isRefresh: true,
        });
        return {
            token,
            refreshToken,
        };
    });
    return {
        create,
        login,
    };
};
