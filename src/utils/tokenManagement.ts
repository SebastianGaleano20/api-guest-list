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

  // Verificar que secretKey no es undefined ni null
  if (!secretKey || typeof secretKey !== 'string') {
    throw new Error("Secret key is missing or not a valid string");
  }

  // Generamos el token
  const token = jwt.sign(data, secretKey, {
    expiresIn, // 
  });

  return token;
};

// Función para verificar el token
export const verifyToken = (token: string, isRefresh = false) => {
  const secretKey = isRefresh
    ? process.env.REFRESH_SECRET_KEY
    : process.env.SECRET_KEY;

  // Verificar que secretKey no es undefined ni null
  if (!secretKey || typeof secretKey !== 'string') {
    throw new Error("Secret key is missing or not a valid string");
  }

  try {
    // Verificamos el token con la clave secreta
    return jwt.verify(token, secretKey);
  } catch (error) {
    // Manejo de errores si el token es inválido o ha expirado
    throw new Error("Invalid or expired token");
  }
};
