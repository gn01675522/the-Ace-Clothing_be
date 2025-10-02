import { ApiProperty } from '@nestjs/swagger';

export class GenericResDTO {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;
}

export class GenericErrorResDTO {
  @ApiProperty()
  success: boolean;

  @ApiProperty({
    example: { message: 'Error happened', code: 'VALIDATION_ERROR' },
  })
  error: {
    message: string;
    code?: string;
  };
}
