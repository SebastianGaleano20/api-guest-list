import { Router } from "express";
import { guestRoutes } from "./routes/guestRoute";
import { adminRoutes } from "./routes/adminRoute";

const routes = Router();

routes.use("/guest", guestRoutes());
routes.use("/admin", adminRoutes());

export default routes;
