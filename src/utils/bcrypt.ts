import { compare, hash } from "bcrypt";

export const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

export const verified = async (password: string, hash: string) => {
  return await compare(password, hash);
};
