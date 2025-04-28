import { AdminModel } from "../models/adminModel";

const { validationAdmin } = AdminModel();

export const AdminService = () => {
  // Servicio para validar administrador.
  const validateAdmin = async (email: string, password: string) => {
    const admin = await validationAdmin(email, password);
    if (!admin) return null;
    return admin;
  };
  return {
    validateAdmin,
  };
};
