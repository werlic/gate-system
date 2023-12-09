import { HttpStatus } from "@nestjs/common";

interface IResponse {
  statusCode?: number;
  message?: string;
  data?: any;
}


export class OkResponse {
  statusCode = HttpStatus.OK;
  message = "OK";
  data: any;
  constructor(options: IResponse) {
    this.statusCode = options.statusCode ?? HttpStatus.OK;
    this.message = options.message ?? "OK";
    this.data = options.data ?? null;
  }
}

export class CreatedResponse {
  statusCode = HttpStatus.OK;
  message = "Created";
  data: any;
  constructor(options: IResponse) {
    this.statusCode = options.statusCode ?? HttpStatus.CREATED;
    this.message = options.message ?? "Created";
    this.data = options.data ?? null;
  }
}