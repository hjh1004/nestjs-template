import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const logger = new Logger(AllExceptionsFilter.name);
    logger.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const msg =
      exception instanceof HttpException
        ? // tslint:disable-next-line: no-string-literal
        exception.getResponse()['message']
          ? // tslint:disable-next-line: no-string-literal
          exception.getResponse()['message']
          : exception.getResponse()
        : exception instanceof Error
          ? exception.message
          : null;
    const errorMsg =
      exception instanceof HttpException
        ? // tslint:disable-next-line: no-string-literal
        exception.getResponse()['error']
        : null;

    const result: any = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    };
    if (errorMsg) {
      result.errorMsg = errorMsg;
    }
    if (msg && errorMsg !== msg) {
      result.message = msg;
    }
    response.status(status).json(result);
  }
}
