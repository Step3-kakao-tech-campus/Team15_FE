import { Controller, Get, Post, Body, Res, Logger, Req } from "@nestjs/common";
import { UsersService } from "./user.service";
import { EmailDto, SignInDto, SignUpDto } from "./user.dto";
import {
  ErrorResponseDto,
  SuccessResponseDto,
} from "src/response/response.dtos";
import { Request, Response } from "express";

@Controller("/api/user")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post("join")
  async create(@Body() signUpDto: SignUpDto) {
    const isSameEmail = await this.usersService.isSameEmail(signUpDto.email);
    if (isSameEmail) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "회원가입에 실패했습니다.",
          reson: "join_duplicated_email",
        },
      });
    }
    const isSuccess = await this.usersService.create(signUpDto);
    if (!isSuccess) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "회원가입에 실패했습니다.",
          response: "join_duplicated_email",
        },
      });
    }
    return new SuccessResponseDto({ response: null });
  }

  @Post("join/check")
  async checkEmail(@Body() emailDto: EmailDto) {
    const isSmaeEmail = await this.usersService.isSameEmail(emailDto.email);
    if (isSmaeEmail) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "이미 가입된 이메일입니다.",
          reson: "join_duplicated_email",
        },
      });
    }
    return new SuccessResponseDto({ response: null });
  }

  @Post("login")
  async login(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const accessToken = await this.usersService.login(signInDto);
    if (!accessToken) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "로그인에 실패했습니다.",
          reason: "login_password_length",
        },
      });
    }

    res["cookie"]("Authentication", accessToken, {
      domain: "localhost",
      path: "/",
      httpOnly: true,
    });

    return new SuccessResponseDto({ response: null });
  }

  @Post("/logout")
  logout(@Res({ passthrough: true }) res: Response) {
    res.cookie("Authentication", "", {
      domain: "localhost",
      path: "/",
      httpOnly: true,
    });
    return new SuccessResponseDto({ response: null });
  }

  @Post("/validate")
  async validate(@Req() req: Request) {
    const isValidated = await this.usersService.validateUser(
      req.cookies["Authentication"]
    );
    if (!isValidated) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "유효하지 않은 토큰입니다.",
          reason: "login_unauthenticated_user",
        },
      });
    }
    return new SuccessResponseDto({ response: null });
  }

  @Get("/")
  async getUser(@Req() req: Request) {
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    if (!user) {
      return new ErrorResponseDto({
        error: {
          status: 400,
          message: "유효하지 않은 토큰입니다.",
          reason: "login_unauthenticated_user",
        },
      });
    }
    return new SuccessResponseDto({ response: user });
  }
}
