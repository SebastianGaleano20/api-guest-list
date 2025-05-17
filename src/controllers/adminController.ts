import { Response, Request, NextFunction } from "express";
import httpStatus from "../helpers/httpStatus.js";
import { AdminService } from "../services/adminService.js";

export const AdminController = () => {
  const { create, login } = AdminService();
  // Controlador para crear admin
  const createAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const data = req.body;
    try {
      const admin = await create(data);
      res
        .status(httpStatus.CREATED)
        .json({ message: "Admin created successfully", admin });
    } catch (error) {
      next(error);
    }
  };
  // Controlador para iniciar seción
  const loginAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body;
      const admin = await login(email, password);
      if (!admin)
        res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
      res.status(httpStatus.OK).json(admin);
    } catch (error) {
      next(error);
    }
  };
  return {
    createAdmin,
    loginAdmin,
  };
};
