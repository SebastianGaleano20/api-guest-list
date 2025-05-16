import jwt from "jsonwebtoken";
export const generateToken = ({ data, expiresIn = "1h", isRefresh = false, }) => {
    // Aseguramos que `secretKey` sea de tipo `jwt.Secret` (es decir, string o Buffer)
    const secretKey = isRefresh
        ? process.env.REFRESH_SECRET_KEY
        : process.env.SECRET_KEY;
    // Verificamos que el secretKey esté definido
    if (!secretKey) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    // El payload debe ser un objeto, y estamos asegurándonos de que lo sea.
    const payload = Object.assign({}, data);
    // Firmamos el token con el payload y el secretKey
    return jwt.sign(payload, secretKey);
};
