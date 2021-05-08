import { Logger } from '@nestjs/common';
import { Request, Response } from 'express';

export function ApiCallInfo(req: Request, res: Response, next: Function) {
  const logger = new Logger();
  logger.log(`[${req.method}] ${req.originalUrl} | ${JSON.stringify(req.body)}`);
  next();
}
