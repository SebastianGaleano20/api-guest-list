import { AdminModel } from "../models/adminModel";
import { verified } from "../utils/bcrypt";

const { findByMail } = AdminModel();

export const AdminService = () => {
  // Servicio para logear administrador.
  const login = async (email: string, password: string) => {
    const admin = await findByMail(email);
    if (!admin) return false;
    // Verificamos contraseña hasheada
    const isValid = await verified(password, admin.password);
    if (!isValid)
      return admin;
  };

  return {
    login,
  };
};
