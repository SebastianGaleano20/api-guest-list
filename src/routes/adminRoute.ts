import { Router } from "express";
import { AdminController } from "../controllers/adminController";

export const adminRoutes = () => {
    const adminRouter = Router();
    const { loginAdmin, getAllGuest, deleteGuest, getGuestById, createGuest, updateGuest } = AdminController();
    adminRouter.route("/login").post(loginAdmin);
    adminRouter.route("/guests")
        .post(createGuest)
        .get(getAllGuest)
    adminRouter.route("/guests/:id")
        .delete(deleteGuest)
        .get(getGuestById)
        .patch(updateGuest);
    return adminRouter;
}