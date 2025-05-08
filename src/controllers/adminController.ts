import { Response, Request, NextFunction } from "express";
import httpStatus from "../helpers/httpStatus";
import { AdminService } from "../services/adminService";

export const AdminController = () => {
    const { create, login } = AdminService();
    // Controlador para crear admin
    const createAdmin = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const admin = await create(req.body);
        if (!admin)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    }
    // Controlador para iniciar seción
    const loginAdmin = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { email, password } = req.body;
        const admin = await login(email, password);
        if (!admin)
            res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        next();
    }
    return {
        createAdmin,
        loginAdmin
    }
};