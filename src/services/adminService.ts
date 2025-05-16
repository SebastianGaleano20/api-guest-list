import { AdminModel } from "../models/adminModel";
import { verified } from "../utils/bcrypt";
import { generateToken } from "../utils/tokenManagement";
import type { Admin, AdminTokenPayload } from "../types/index";

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

    const isValid = await verified(password, admin.password);
    if (!isValid) return false;

    const payload: AdminTokenPayload = {
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
  };

  return {
    create,
    login,
  };
};
