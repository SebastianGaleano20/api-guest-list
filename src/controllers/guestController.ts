import { Response, Request, NextFunction } from "express";
import { GuestService } from "../services/guestService";
import httpStatus from "../helpers/httpStatus";

export const GuestController = () => {
    const {
        getAllGuestService,
        deleteGuestService,
        getGuestByIdService,
        createGuestService,
        updateGuestService,
        validateGuest,
        confirmGuest } = GuestService();
    // Controlador para validar invitado
    const validate = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { name, token } = req.body;
        const guest = await validateGuest(name, token);
        if (!guest)
            res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        next();
    };
    // Controlador para confirmar asistencia
    const confirm = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { token } = req.params;
          const confirmedGuests = req.body.confirmedGuests;
      
          const guest = await confirmGuest(token, confirmedGuests);
      
          return res.status(httpStatus.OK).json({
            message: "Asistencia confirmada",
            guest,
          });
        } catch (error) {
          next(error);
        }
      };
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
        validate,
        confirm,
        getAllGuest,
        deleteGuest,
        getGuestById,
        createGuest,
        updateGuest
    }
};