import mongoose from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

import { GenericResDTO } from 'src/common/DTOs/generic-res.dto';

export class CouponModelDTO {
  @ApiProperty({ description: '優惠券 ID ( mondoDB )' })
  _id: string;

  @ApiProperty({ description: '優惠券名稱' })
  name: string;

  @ApiProperty({ description: '優惠碼' })
  code: string;

  @ApiProperty({ description: '優惠類別' })
  type: mongoose.Types.ObjectId;

  @ApiProperty({ description: '優惠適用範圍' })
  scope: mongoose.Types.ObjectId;

  @ApiProperty({ description: '優惠起始日' })
  start_date: Date;

  @ApiProperty({ description: '優惠結束日' })
  end_date: Date;

  @ApiProperty({ description: '優惠數值' })
  value: number;

  @ApiProperty({ description: '優惠對象' })
  target_ids: string[];

  @ApiProperty({ description: '最大使用次數 (全站)' })
  max_usage: number;

  @ApiProperty({ description: '單一客戶最大使用次數' })
  per_customer_limit: number;

  @ApiProperty({ description: '是否啟用' })
  is_enable: boolean;

  @ApiProperty({ description: '優惠券是否軟刪除' })
  recycled?: boolean;

  @ApiProperty({ description: '優惠券創建時間' })
  createdAt: Date;

  @ApiProperty({ description: '優惠券最新更新時間' })
  updatedAt: Date;

  @ApiProperty({ description: '資料庫版本號' })
  __v: number;
}

export class CouponCreateResDTO extends GenericResDTO {
  @ApiProperty({ type: () => CouponModelDTO })
  data: CouponModelDTO;
}
