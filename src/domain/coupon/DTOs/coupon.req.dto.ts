import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CouponCreateReqDTO {
  @ApiProperty({ description: '優惠券名稱' })
  name: string;

  @ApiProperty({ description: '優惠碼' })
  code: string;

  @ApiProperty({ description: '優惠類別' })
  type: string;

  @ApiProperty({ description: '優惠適用範圍' })
  scope: string;

  @ApiProperty({ description: '優惠起始日' })
  start_date: Date;

  @ApiProperty({ description: '優惠結束日' })
  end_date: Date;

  @ApiPropertyOptional({ description: '優惠數值', required: false })
  value?: number;

  @ApiPropertyOptional({ description: '優惠對象', required: false })
  target_ids?: string[];

  @ApiProperty({ description: '最大使用次數 (全站)', required: false })
  max_usage?: number;

  @ApiProperty({ description: '單一客戶最大使用次數', required: false })
  per_customer_limit?: number;

  @ApiProperty({ description: '是否啟用', required: false })
  is_enable?: boolean;
}
