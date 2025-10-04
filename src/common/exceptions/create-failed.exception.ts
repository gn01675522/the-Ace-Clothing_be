import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateFailedException extends HttpException {
  constructor() {
    super('Create failed.', HttpStatus.BAD_REQUEST);
  }
}
