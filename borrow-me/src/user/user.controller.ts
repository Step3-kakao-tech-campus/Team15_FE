import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Req,
  Patch,
  UseFilters,
  UseInterceptors,
  Logger,
} from "@nestjs/common";
import { UsersService } from "./user.service";
import { EmailDto, SignInDto, SignUpDto } from "./user.dto";
import { Request, Response } from "express";
import { CommonError } from "src/error/Common.error";
import { AllHttpExceptionFilter } from "src/response/allHttpException.filter";
import { ResponseInterceptor } from "src/response/response.interceptor";
import { AuthInterceptor } from "src/response/auth.interceptor";
import { ConfigService } from "@nestjs/config";

@Controller("api/user")
@UseFilters(AllHttpExceptionFilter)
@UseInterceptors(ResponseInterceptor)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService
  ) {}

  @Post("join")
  async create(@Body() signUpDto: SignUpDto) {
    const isSameEmail = await this.usersService.isSameEmail(signUpDto.email);
    if (!!isSameEmail) {
      throw new CommonError({
        status: 400,
        message: "회원가입에 실패했습니다.",
        reason: "join_duplicated_email",
      });
    }
    this.usersService.create(signUpDto);
    return null;
  }

  @Post("join/check")
  async checkEmail(@Body() emailDto: EmailDto) {
    const isSmaeEmail = await this.usersService.isSameEmail(emailDto.email);
    if (isSmaeEmail) {
      throw new CommonError({
        status: 400,
        message: "이미 가입된 이메일입니다.",
        reason: "join_duplicated_email",
      });
    }
    return null;
  }

  @Post("login")
  async login(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const accessToken = await this.usersService.login(signInDto);
    if (!accessToken) {
      throw new CommonError({
        status: 400,
        message: "로그인에 실패했습니다.",
        reason: "login_password_length",
      });
    }

    res["cookie"]("Authentication", accessToken, {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res["cookie"]("Authentication", accessToken, {
      domain: "capacitor://localhost",
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res["cookie"]("Authentication", accessToken, {
      domain: "http://localhost",
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return null;
  }

  @Post("logout")
  @UseInterceptors(AuthInterceptor)
  logout(@Res({ passthrough: true }) res: Response) {
    res["cookie"]("Authentication", "", {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res["cookie"]("Authentication", "", {
      domain: "capacitor://localhost",
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res["cookie"]("Authentication", "", {
      domain: "http://localhost",
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return null;
  }

  @Post("validate")
  @UseInterceptors(AuthInterceptor)
  async validate(@Req() req: Request) {
    const isValidated = await this.usersService.validateUser(
      req.cookies["Authentication"]
    );
    if (!isValidated) {
      throw new CommonError({
        status: 401,
        message: "유효하지 않은 토큰입니다.",
        reason: "login_unauthenticated_user",
      });
    }
    return null;
  }

  @Get()
  @UseInterceptors(AuthInterceptor)
  async getUser(@Req() req: Request) {
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    if (!user) {
      throw new CommonError({
        status: 401,
        message: "유효하지 않은 토큰입니다.",
        reason: "login_unauthenticated_user",
      });
    }
    return user;
  }

  @Patch()
  @UseInterceptors(AuthInterceptor)
  async updateUser(@Req() req: Request, @Body() signUpDto: SignUpDto) {
    const user = await this.usersService.updateUser(
      req.cookies["Authentication"],
      signUpDto
    );
    if (!user) {
      throw new CommonError({
        status: 401,
        message: "유효하지 않은 토큰입니다.",
        reason: "login_unauthenticated_user",
      });
    }
    return null;
  }
}
