import prisma from "../config/prisma.js";
import type { Admin } from "../types/index.js";
import { encrypt } from "../utils/bcrypt.js";

export const AdminModel = () => {
  // Modelo para crear Administrador.
  const createAdmin = async (data: Admin) => {
    // Encriptamos la contraseña
    const passwordToHash = data.password;
    const hash = await encrypt(passwordToHash);
    data.password = hash;
    return prisma.admin.create({
      data: data,
    });
  };
  // Modelo para validar Administrador
  const findByMail = async (email: string) => {
    const admin = await prisma.admin.findFirst({ where: { email } });
    return admin;
  };
  return {
    createAdmin,
    findByMail,
  };
};
