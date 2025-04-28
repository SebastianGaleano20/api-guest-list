import { prisma } from "../config/prisma";
import type { Admin } from "../types/index";

export const AdminModel = () => {
  const createAdmin = async (data: Admin) => {
    return prisma.admin.create({
      data: data,
    });
  };
  return {
    createAdmin,
  };
};
