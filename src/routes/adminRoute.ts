import { Router } from "express";
import { AdminController } from "../controllers/adminController.js";
import { GuestController } from "../controllers/guestController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { adminSchema, validateAdmin } from "../schemas/adminSchema.js";
import { guestSchema } from "../schemas/guestSchema.js";

export const adminRoutes = () => {
  const adminRouter = Router();
  const { createAdmin, loginAdmin } = AdminController();
  const { getAllGuest, deleteGuest, getGuestById, createGuest, updateGuest } =
    GuestController();

  adminRouter.route("/create").post(schemaValidator(adminSchema), createAdmin);
  adminRouter.route("/login").post(schemaValidator(validateAdmin), loginAdmin);
  adminRouter
    .route("/guests")
    .post(schemaValidator(guestSchema), createGuest)
    .get(getAllGuest);
  adminRouter
    .route("/guests/:id")
    .delete(deleteGuest)
    .get(getGuestById)
    .patch(schemaValidator(guestSchema), updateGuest);
  return adminRouter;
};
