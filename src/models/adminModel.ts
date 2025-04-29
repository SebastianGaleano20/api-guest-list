import { prisma } from "../config/prisma";
import type { Admin } from "../types/index";
import { encrypt } from "../utils/bcrypt";

export const AdminModel = () => {
  // Modelo para crear Administrador.
  const createAdmin = async (data: Admin) => {
    // Encriptamos la contraseña
    const hash = await encrypt(data.password);
    data.password = hash;
    return prisma.admin.create({
      data: data,
    });
  };
  // Modelo para validar Administrador
  const findByMail = async (email: string): Promise<Admin | void> => {
    return prisma.admin.findUnique({ where: { email } });
  };
  return {
    createAdmin,
    findByMail,
  };
};
