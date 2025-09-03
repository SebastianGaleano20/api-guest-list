import { Router } from "express";
import { GuestController } from "../controllers/guestController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { guestValidate, tokenValidate } from "../schemas/guestSchema.js";

export const guestRoutes = () => {
  const guestRouter = Router();
  const { validate, confirm, getAllGuest } = GuestController();
  guestRouter.route("/").get(getAllGuest);
  guestRouter.route("/validate").post(schemaValidator(guestValidate), validate);
  guestRouter.route("/confirm").post(schemaValidator(tokenValidate), confirm);
  return guestRouter;
};
