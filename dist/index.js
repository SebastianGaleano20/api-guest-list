import { Router } from "express";
import { guestRoutes } from "./routes/guestRoute.js";
import { adminRoutes } from "./routes/adminRoute.js";
const routes = Router();
routes.use("/guest", guestRoutes());
routes.use("/admin", adminRoutes());
export default routes;
