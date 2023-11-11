import { Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { Response } from "express";

@Catch()
export class AllHttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: any, host: import("@nestjs/common").ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();

    Logger.error(exception);

    if (exception.status === 500 || exception.status === undefined) {
      response["cookie"]("Authentication", "", {
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      response["cookie"]("Authentication", "", {
        domain: "capacitor://localhost",
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      response["cookie"]("Authentication", "", {
        domain: "http://localhost",
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
    }

    response.status(exception.status ?? 500).json({
      status: exception.status,
      reason: exception.reason,
      message: exception.message,
    });
  }
}
