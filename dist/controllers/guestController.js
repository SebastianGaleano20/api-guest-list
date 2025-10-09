var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GuestService } from "../services/guestService.js";
import httpStatus from "../helpers/httpStatus.js";
export const GuestController = () => {
    const { createGuestService,
    // getAllGuestService,
    // deleteGuestService,
    // getGuestByIdService,
    // updateGuestService,
    // validateGuest,
     } = GuestService();
    // Controlador para crear un invitado
    const createGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        try {
            const guest = yield createGuestService(data);
            res
                .status(httpStatus.CREATED)
                .json({ message: "Guest created successfully", guest });
        }
        catch (error) {
            next(error);
        }
    });
    // // Controlador para validar invitado
    // const validate = async (req: Request, res: Response, next: NextFunction) => {
    //   const { firstName, token } = req.body;
    //   try {
    //     const result = await validateGuest(firstName, token);
    //     if (!result) {
    //       res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
    //       return;
    //     }
    //     const { guest, accessToken, refreshToken } = result;
    //     res.status(httpStatus.OK).json({
    //       message: "Guest logged in successfully",
    //       guest,
    //       accessToken,
    //       refreshToken,
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // };
    // // Controlador para obtener todos los invitados
    // const getAllGuest = async (
    //   _req: Request,
    //   res: Response,
    //   next: NextFunction
    // ) => {
    //   try {
    //     const guests = await getAllGuestService();
    //     if (!guests)
    //       res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
    //     res
    //       .status(httpStatus.OK)
    //       .json({ message: "All guests retrieved successfully", guests });
    //   } catch (error) {
    //     next(error);
    //   }
    // };
    // // Controlador para eliminar un invitado
    // const deleteGuest = async (
    //   req: Request,
    //   res: Response,
    //   next: NextFunction
    // ) => {
    //   const { id } = req.params;
    //   if (!id)
    //     res.status(httpStatus.BAD_REQUEST).json({ message: "Bad request" });
    //   const idNumber = Number(id);
    //   try {
    //     const guest = await deleteGuestService(idNumber);
    //     res
    //       .status(httpStatus.OK)
    //       .json({ message: "Guest deleted successfully", guest });
    //   } catch (error) {
    //     next(error);
    //   }
    // };
    // // Controlador para buscar invitado por id
    // const getGuestById = async (
    //   req: Request,
    //   res: Response,
    //   next: NextFunction
    // ) => {
    //   const { id } = req.params;
    //   const idNumber = Number(id);
    //   try {
    //     const guest = await getGuestByIdService(idNumber);
    //     res
    //       .status(httpStatus.OK)
    //       .json({ message: "Guest retrieved successfully", guest });
    //   } catch (error) {
    //     next(error);
    //   }
    // };
    // // Controlador para actualizar un invitado
    // const updateGuest = async (
    //   req: Request,
    //   res: Response,
    //   next: NextFunction
    // ) => {
    //   const { id } = req.params;
    //   const idNumber = Number(id);
    //   const data = req.body;
    //   try {
    //     const guest = await updateGuestService(idNumber, data);
    //     if (!guest) {
    //       res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
    //     }
    //     res
    //       .status(httpStatus.OK)
    //       .json({ message: "Guest updated successfully", guest });
    //   } catch (error) {
    //     next(error);
    //   }
    // };
    return {
        createGuest,
        // validate,
        // getAllGuest,
        // deleteGuest,
        // getGuestById,
        // updateGuest,
    };
};
