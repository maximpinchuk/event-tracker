import express, { NextFunction } from "express";
import { logger } from "../providers/logger";

export function loggerMiddleware(
  req: express.Request,
  _res: express.Response,
  next: NextFunction
) {
  logger.info(`${req.method} ${req.path} ${req.body}`);
  next();
}
