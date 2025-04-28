import { prisma } from "../config/prisma";
import type { Admin } from "../types/index";

export const AdminModel = () => {
  // Modelo para crear Administrador.
  const createAdmin = async (data: Admin) => {
    return prisma.admin.create({
      data: data,
    });
  };
  // Modelo para validar Administrador
  const validationAdmin = async (email: string, password: string) => {
    const admin = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
    if (!admin) {
      return false;
    }
    if (admin.password !== password) {
      return false;
    }
    return true;
  };
  return {
    createAdmin,
    validationAdmin,
  };
};
