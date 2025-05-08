import { Router } from "express";
import { AdminController } from "../controllers/adminController";
import { schemaValidator } from "../middlewares/schemaValidator";
import { adminSchema, validateAdmin } from "../schemas/adminSchema";
import { guestSchema } from "../schemas/guestSchema";

export const adminRoutes = () => {
    const adminRouter = Router();
    const { createAdmin, loginAdmin, getAllGuest, deleteGuest, getGuestById, createGuest, updateGuest } = AdminController();
    adminRouter.route("/create").post(schemaValidator(adminSchema), createAdmin);
    adminRouter.route("/login").post(schemaValidator(validateAdmin), loginAdmin);
    adminRouter.route("/guests")
        .post(schemaValidator(guestSchema), createGuest)
        .get(getAllGuest)
    adminRouter.route("/guests/:id")
        .delete(deleteGuest)
        .get(getGuestById)
        .patch(schemaValidator(guestSchema), updateGuest);
    return adminRouter;
}