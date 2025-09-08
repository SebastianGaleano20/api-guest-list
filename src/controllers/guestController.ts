import { Response, Request, NextFunction } from "express";
import { GuestService } from "../services/guestService.js";
import httpStatus from "../helpers/httpStatus.js";

export const GuestController = () => {
  const {
    getAllGuestService,
    deleteGuestService,
    getGuestByIdService,
    createGuestService,
    updateGuestService,
    validateGuest,
  } = GuestService();
  // Controlador para validar invitado
  const validate = async (req: Request, res: Response, next: NextFunction) => {
    const { name, token } = req.body;
    try {
      const guest = await validateGuest(name, token);
      if (!guest)
        res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
      res
        .status(httpStatus.OK)
        .json({ message: "Guest validated successfully", guest });
    } catch (error) {
      next(error);
    }
  };

  // Controlador para obtener todos los invitados
  const getAllGuest = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const guests = await getAllGuestService();
      if (!guests)
        res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
      res
        .status(httpStatus.OK)
        .json({ message: "All guests retrieved successfully", guests });
    } catch (error) {
      next(error);
    }
  };
  // Controlador para eliminar un invitado
  const deleteGuest = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    if (!id)
      res.status(httpStatus.BAD_REQUEST).json({ message: "Bad request" });
    const idNumber = Number(id);
    try {
      const guest = await deleteGuestService(idNumber);
      res
        .status(httpStatus.OK)
        .json({ message: "Guest deleted successfully", guest });
    } catch (error) {
      next(error);
    }
  };
  // Controlador para buscar invitado por id
  const getGuestById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const idNumber = Number(id);
    try {
      const guest = await getGuestByIdService(idNumber);
      res
        .status(httpStatus.OK)
        .json({ message: "Guest retrieved successfully", guest });
    } catch (error) {
      next(error);
    }
  };
  // Controlador para crear un invitado
  const createGuest = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const data = req.body;
    try {
      const guest = await createGuestService(data);
      res
        .status(httpStatus.CREATED)
        .json({ message: "Guest created successfully", guest });
    } catch (error) {
      next(error);
    }
  };
  // Controlador para actualizar un invitado
  const updateGuest = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const idNumber = Number(id);
    const data = req.body;
    try {
      const guest = await updateGuestService(idNumber, data);
      if (!guest) {
        res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
      }
      res
        .status(httpStatus.OK)
        .json({ message: "Guest updated successfully", guest });
    } catch (error) {
      next(error);
    }
  };
  return {
    validate,
    getAllGuest,
    deleteGuest,
    getGuestById,
    createGuest,
    updateGuest,
  };
};
