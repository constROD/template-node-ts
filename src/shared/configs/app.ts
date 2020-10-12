import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
  ZONE: process.env.ZONE,
  PORT: process.env.PORT,
};
