import { ApiPropertyOptional } from '@nestjs/swagger';

export class CouponGetQueryDTO {
  @ApiPropertyOptional({
    type: String,
    required: false,
    description: '優惠券名稱',
  })
  name?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    description: '折扣碼',
  })
  code?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    description: '優惠券適用範圍',
  })
  scope?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    description: '優惠券類型 (% 數折扣 / 固定金額折扣)',
  })
  type?: string;

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: '優惠券起始日期',
  })
  start_date?: Date;

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: '優惠券結束日期',
  })
  end_date?: Date;

  @ApiPropertyOptional({
    type: [String],
    required: false,
    description: '優惠券作用對象',
  })
  target_ids?: string[];

  @ApiPropertyOptional({
    type: String,
    required: false,
    description: '是否啟用 (true / false)',
  })
  is_enable?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    description: '是否已軟刪除 (true / false)',
  })
  recycled?: string;

  @ApiPropertyOptional({ required: false, description: '第幾頁 (預設 1)' })
  current_page?: string;

  @ApiPropertyOptional({ required: false, description: '一頁幾筆 (預設 10)' })
  per_page?: string;
}
