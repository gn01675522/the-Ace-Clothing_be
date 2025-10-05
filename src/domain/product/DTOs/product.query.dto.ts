import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProductGetQueryDTO {
  @ApiPropertyOptional({
    type: String,
    required: false,
    description: '產品名稱',
  })
  name?: string;

  @ApiPropertyOptional({type: String, required: false, description: '產品類別 ID' })
  category?: string;

  @ApiPropertyOptional({type: String, required: false, description: '適用性別 ID' })
  gender?: string;

  @ApiPropertyOptional({
    type: Boolean,
    required: false,
    description: '是否已軟刪除 (true / false)',
  })
  recycled?: string;

  @ApiPropertyOptional({ required: false, description: '第幾頁 (預設 1)' })
  current_page?: string;

  @ApiPropertyOptional({ required: false, description: '一頁幾筆 (預設 10)' })
  per_page?: string;
}
