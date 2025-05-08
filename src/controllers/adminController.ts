import { Response, Request, NextFunction } from "express";
import httpStatus from "../helpers/httpStatus";
import { AdminService } from "../services/adminService";

const {
    create,
    login,
    getAllGuestService,
    deleteGuestService,
    getGuestByIdService,
    createGuestService,
    updateGuestService
} = AdminService();
export const AdminController = () => {
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
    // Controlador para obtener todos los invitados
    const getAllGuest = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const guests = await getAllGuestService();
        if (!guests)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    }
    // Controlador para eliminar un invitado
    const deleteGuest = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { id } = req.params;
        const guest = await deleteGuestService(Number(id));
        if (!guest)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    }
    // Controlador para buscar invitado por id
    const getGuestById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { id } = req.params;
        const guest = await getGuestByIdService(Number(id));
        if (!guest)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    }
    // Controlador para crear un invitado
    const createGuest = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const guest = await createGuestService(req.body);
        if (!guest)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    }
    // Controlador para actualizar un invitado
    const updateGuest = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const guest = await updateGuestService(req.body);
        if (!guest)
            res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
        next();
    }
    return {
        createAdmin,
        loginAdmin,
        getAllGuest,
        deleteGuest,
        getGuestById,
        createGuest,
        updateGuest
    }
};