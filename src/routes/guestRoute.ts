import { Router } from "express";
import { GuestController } from "../controllers/guestController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import {
  guestValidate,
  guestSchema,
  updateGuestSchema,
} from "../schemas/guestSchema.js";

export const guestRoutes = () => {
  const guestRouter = Router();
  const {
    validate,
    getAllGuest,
    createGuest,
    deleteGuest,
    updateGuest,
    getGuestById,
  } = GuestController();
  guestRouter.route("/").get(getAllGuest);
  guestRouter.route("/validate").post(schemaValidator(guestValidate), validate);
  guestRouter.route("/create").post(schemaValidator(guestSchema), createGuest);
  guestRouter
    .route("/:id")
    .delete(deleteGuest)
    .patch(schemaValidator(updateGuestSchema), updateGuest)
    .get(getGuestById);
  return guestRouter;
};
