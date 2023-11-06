import {
  CallHandler,
  ExecutionContext,
  Logger,
  NestInterceptor,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.cookies["Authentication"];

    if (!token) {
      throw new UnauthorizedException("No token provided");
    }
    return handler.handle();
  }
}
