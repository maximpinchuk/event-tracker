import { Request, Response, NextFunction } from "express";

export function validatorMiddleware(
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err) {
    res.status(422).json({
      message: "Validation error", // Здесь можно немного подзапариться и доставать из err текст ошибки
    });
  } else {
    next();
  }
}
