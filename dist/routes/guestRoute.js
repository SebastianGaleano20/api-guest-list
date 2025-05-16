import { Router } from "express";
import { GuestController } from "../controllers/guestController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { guestValidate, tokenValidate } from "../schemas/guestSchema.js";
export const guestRoutes = () => {
    const guestRouter = Router();
    const { validate, confirm } = GuestController();
    guestRouter.route("/validate").post(schemaValidator(guestValidate), validate);
    guestRouter.route("/confirm").post(schemaValidator(tokenValidate), confirm);
    return guestRouter;
};
