import { Router } from "express";
import { GuestController } from "../controllers/guestController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { guestSchema, } from "../schemas/guestSchema.js";
export const guestRoutes = () => {
    const guestRouter = Router();
    const { createGuest } = GuestController();
    guestRouter.route("/create").post(schemaValidator(guestSchema), createGuest);
    return guestRouter;
};
