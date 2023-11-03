class ResponseDto {
  success: boolean;
  response: null | object;
  error: null | object;

  constructor({ success, response, error }) {
    this.success = success;
    this.response = response;
    this.error = error;
  }
}

export class SuccessResponseDto extends ResponseDto {
  constructor({ response }) {
    super({ success: true, response, error: null });
  }
}

export class ErrorResponseDto extends ResponseDto {
  constructor({ error }) {
    super({ success: false, response: null, error });
  }
}
