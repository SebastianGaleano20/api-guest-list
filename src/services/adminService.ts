import { AdminModel } from "../models/adminModel";
import { verified } from "../utils/bcrypt";
import { generateToken } from "../utils/tokenManagement";
import type { Admin } from "../types/index";

const { findByMail, createAdmin } = AdminModel();

export const AdminService = () => {
  // Servicio para crear administrador
  const create = async (data: Admin) => {
    return await createAdmin(data);
  };
  // Servicio para logear administrador.
  const login = async (email: string, password: string) => {
    const admin = await findByMail(email);
    if (!admin) return false;
    // Verificamos contraseña hasheada
    const isValid = await verified(password, admin.password);
    if (!isValid) return false;
    // Generamos token
    const token = generateToken({ data: admin, expiresIn: "4h", isRefresh: false });
    const refreshToken = generateToken({
      data: admin,
      expiresIn: "7d",
      isRefresh: true,
    })
    return {
      token,
      refreshToken,
    };
  };

  return {
    create,
    login
  };
};
