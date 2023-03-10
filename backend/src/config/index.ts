import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  app: {
    host: process.env.HOST,
    port: process.env.PORT,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
