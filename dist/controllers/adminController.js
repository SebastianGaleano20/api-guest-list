var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import httpStatus from "../helpers/httpStatus.js";
import { AdminService } from "../services/adminService.js";
export const AdminController = () => {
    const { create, login } = AdminService();
    // Controlador para crear admin
    const createAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        try {
            const admin = yield create(data);
            res
                .status(httpStatus.CREATED)
                .json({ message: "Admin created successfully", admin });
        }
        catch (error) {
            next(error);
        }
    });
    // Controlador para iniciar seción
    const loginAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const admin = yield login(email, password);
            if (!admin)
                res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
            res.status(httpStatus.OK).json(admin);
        }
        catch (error) {
            next(error);
        }
    });
    return {
        createAdmin,
        loginAdmin,
    };
};
