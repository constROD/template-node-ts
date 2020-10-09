import dotenv from "dotenv";
dotenv.config();

export const useConfig = {
  ZONE: process.env.ZONE,
  PORT: process.env.PORT,
};
