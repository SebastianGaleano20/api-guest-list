import { AdminModel } from "../models/adminModel";
import { GuestModel } from "../models/guestModel";
import { verified } from "../utils/bcrypt";
import { generateToken } from "../utils/tokenManagement";
import type { Guest } from "../types/index";

const { findByMail } = AdminModel();
const { getAllGuest, deleteGuest, findById, createGuest, updateGuest } = GuestModel();

export const AdminService = () => {
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
  // Servicio para obtener invitados
  const getAllGuestService = async () => {
    return await getAllGuest();
  }
  // Servicio para eliminar un invitado
  const deleteGuestService = async (id: number) => {
    return await deleteGuest(id);
  }
  // Servicio para obtener invitado por id
  const getGuestByIdService = async (id: number) => {
    return await findById(id);
  }
  // Servicio para crear invitado
  const createGuestService = async (data: Guest) => {
    return await createGuest(data);
  }
  // Servicio para actualizar datos del invitado
  const updateGuestService = async (data: Guest) => {
    return await updateGuest(data);
  }
  return {
    login,
    getAllGuestService,
    deleteGuestService,
    getGuestByIdService,
    createGuestService,
    updateGuestService
  };
};
