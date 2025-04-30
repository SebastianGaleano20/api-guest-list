import { Response, Request, NextFunction } from "express";
import { GuestService } from "../services/guestService";
import httpStatus from "../helpers/httpStatus";

const { validateGuest, confirmGuest } = GuestService();
export const GuestController = () => {
    const validate = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { name, token } = req.body;
        const guest = await validateGuest(name, token);
        if (!guest)
            res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        next();
    };
    const confirm = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { token } = req.params;
        const guest = await confirmGuest(token, req.body);
        if (!guest)
            res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        next();
    };

    return {
        validate,
        confirm
    }
};