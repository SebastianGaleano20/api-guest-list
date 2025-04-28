import { prisma } from "../config/prisma";
import type { Admin } from "../types/index";

export const AdminModel = () => {
  const createAdmin = async (data: Admin) => {
    return prisma.admin.create({
      data: data,
    });
  };
  const validateAdmin = async (data: Admin) => {
    const admin = await prisma.admin.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!admin) {
      return false;
    }
    if (admin.password !== data.password) {
      return false;
    }
    return true;
  };
  return {
    createAdmin,
    validateAdmin,
  };
};
