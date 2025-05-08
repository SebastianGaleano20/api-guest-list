import { Router } from "express";
import { GuestController } from "../controllers/guestController";

export const guestRoutes = () => {
    const guestRouter = Router();
    const { validate, confirm } = GuestController();
    guestRouter.route("/validate").post(validate);
    guestRouter.route("/confirm").post(confirm);
    return guestRouter;
}