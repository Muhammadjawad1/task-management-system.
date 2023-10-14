// error-handler.ts
import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); // Log the error for debugging

  const status = err instanceof CustomError ? err.statusCode : 500; // CustomError is a user-defined error class
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ error: message });
}

export class CustomError extends Error {
    statusCode: any;
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  