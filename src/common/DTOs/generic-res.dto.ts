import { ApiProperty } from '@nestjs/swagger';

export class GenericResDTO {
  @ApiProperty({ example: true, description: 'API 是否執行成功' })
  success: boolean;

  @ApiProperty({
    example: 'Request processed successfully',
    description: '訊息內容',
  })
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
