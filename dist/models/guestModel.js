var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from "../config/prisma.js";
export const GuestModel = () => {
    // Model para crear invitado
    const createGuest = (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const guest = yield prisma.guest.create({
                data: data,
            });
            return guest;
        }
        catch (error) {
            throw new Error(`Error al crear invitado ${error.message}`);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
    // // Model para obtener todos los invitados
    // const getAllGuest = async () => {
    //   try {
    //     const guests = await prisma.guest.findMany();
    //     return guests;
    //   } catch (error: any) {
    //     throw new Error(`Error al crear invitado ${error.message}`);
    //   } finally {
    //     await prisma.$disconnect();
    //   }
    // };
    // // Model para eliminar un invitado
    // const deleteGuest = async (id: number) => {
    //   try {
    //     const guest = await prisma.guest.delete({
    //       where: {
    //         id: id,
    //       },
    //     });
    //     return guest;
    //   } catch (error: any) {
    //     throw new Error(`Error al crear invitado ${error.message}`);
    //   } finally {
    //     await prisma.$disconnect();
    //   }
    // };
    // // Model para encontrar invitado por id
    // const findById = async (id: number) => {
    //   try {
    //     const guest = await prisma.guest.findUnique({
    //       where: {
    //         id: id,
    //       },
    //     });
    //     return guest;
    //   } catch (error: any) {
    //     throw new Error(`Error al crear invitado ${error.message}`);
    //   } finally {
    //     await prisma.$disconnect();
    //   }
    // };
    // // Model para actualizar datos del invitado
    // const updateGuest = async (id: number, data: Guest) => {
    //   try {
    //     const guest = await prisma.guest.update({
    //       where: {
    //         id: id,
    //       },
    //       data: data,
    //       omit: {
    //         token: true,
    //       },
    //     });
    //     return guest;
    //   } catch (error: any) {
    //     throw new Error(`Error al crear invitado ${error.message}`);
    //   } finally {
    //     await prisma.$disconnect();
    //   }
    // };
    // // Modelo para encontrar Invitado por token
    // const findByToken = async (token: string) => {
    //   try {
    //     const guest = await prisma.guest.findUnique({
    //       where: {
    //         token,
    //       },
    //     });
    //     return guest;
    //   } catch (error: any) {
    //     throw new Error(`Error al crear invitado ${error.message}`);
    //   }
    // };
    return {
        createGuest,
        // findByToken,
        // getAllGuest,
        // deleteGuest,
        // findById,
        // updateGuest,
    };
};
