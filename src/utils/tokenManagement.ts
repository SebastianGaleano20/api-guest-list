import jwt from "jsonwebtoken";
import type { Admin } from "../types/index";

// Aseguramos que los datos de las claves sean de tipo string o que lance un error si no están disponibles.
export const generateToken = ({
  data,
  expiresIn = "1h",
  isRefresh = false,
}: {
  data: Admin;
  expiresIn?: string;
  isRefresh?: boolean;
}) => {
  const secretKey = isRefresh
    ? process.env.REFRESH_SECRET_KEY
    : process.env.SECRET_KEY;

  // Generamos el token
  const token = jwt.sign(data, secretKey, {
    expiresIn, // 
  });

  return token;
};
