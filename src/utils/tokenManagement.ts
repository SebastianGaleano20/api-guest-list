import jwt from "jsonwebtoken";
import type { Admin } from "../types/index";

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

  // Verificar que secretKey no es undefined
  if (!secretKey) {
    throw new Error("Secret key is missing");
  }

  const token = jwt.sign(data, secretKey, {
    expiresIn,
  });

  return token;
};

export const verifyToken = (token: string, isRefresh = false) => {
  const secretKey = isRefresh
    ? process.env.REFRESH_SECRET_KEY
    : process.env.SECRET_KEY;

  // Verificar que secretKey no es undefined
  if (!secretKey) {
    throw new Error("Secret key is missing");
  }

  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    // Manejo de errores para un token inválido
    throw new Error("Invalid or expired token");
  }
};
