import jwt from "jsonwebtoken";
export const generateToken = ({ data, expiresIn = "1h", isRefresh = false, }) => {
    const secretKey = isRefresh
        ? process.env.REFRESH_SECRET_KEY
        : process.env.SECRET_KEY;
    if (!secretKey) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    return jwt.sign(data, secretKey, { expiresIn });
};
