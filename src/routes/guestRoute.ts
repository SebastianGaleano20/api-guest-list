import { Router } from "express";
import { GuestController } from "../controllers/guestController";
import { schemaValidator } from "../middlewares/schemaValidator";
import { guestValidate } from "../schemas/guestSchema";

export const guestRoutes = () => {
    const guestRouter = Router();
    const { validate, confirm } = GuestController();
    guestRouter.route("/validate").post(schemaValidator(guestValidate),validate);
    guestRouter.route("/confirm").post(confirm);
    return guestRouter;
}