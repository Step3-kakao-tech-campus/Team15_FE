export interface SignUpDto {
  universityName: string;
  nickname: string;
  email: string;
  password: string;
  idCardImagePath: string;
}

export interface EmailDto {
  email: string;
}

export interface SignInDto {
  email: string;
  password: string;
}
