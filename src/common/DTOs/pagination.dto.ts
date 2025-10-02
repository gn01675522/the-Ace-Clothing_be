import { ApiProperty } from '@nestjs/swagger';

export class PaginationDTO {
  @ApiProperty({ description: '目前所在頁數' })
  current_page: number;

  @ApiProperty({ description: '一頁幾筆' })
  per_page: number;

  @ApiProperty({ description: '總頁數' })
  total_pages: number;
}
