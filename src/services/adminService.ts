import { AdminModel } from "../models/adminModel";
import { GuestModel } from "../models/guestModel";
import { verified } from "../utils/bcrypt";
import { generateToken } from "../utils/tokenManagement";

const { findByMail } = AdminModel();
const { getAllGuest, deleteGuest, findById, createGuest } = GuestModel();

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
  const getAllGuestService = async () => {
    return await getAllGuest();
  }
  const deleteGuestService = async (id: number) => {
    return await deleteGuest(id);
  }
  const getGuestByIdService = async (id: number) => {
    return await findById(id);
  }
  const createGuestService = async (data: any) => {
    return await createGuest(data);
  }
  return {
    login,
    getAllGuestService,
    deleteGuestService,
    getGuestByIdService,
    createGuestService
  };
};
