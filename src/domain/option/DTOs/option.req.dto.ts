import mongoose from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OptionCreateCustomerLevelReqDTO {
  @ApiProperty({ type: String, example: 'Diamond', description: '等級稱呼' })
  name: string;

  @ApiProperty({ type: Number, example: 1, description: '排序' })
  order: number;
}

export class OptionCreateGenderReqDTO {
  @ApiProperty({ type: String, example: 'Male', description: '性別' })
  name: string;
}

export class OptionCreateProductCategoryReqDTO {
  @ApiProperty({ type: String, example: 'Pants', description: '產品類別名稱' })
  name: string;

  @ApiPropertyOptional({
    type: String,
    example: '68d65108fa60d2cee25e93ef',
    description: '父類別 ID (mongoDB)',
    nullable: true,
  })
  parent: string | null;
}

export class OptionCreateProductOriginReqDTO {
  @ApiProperty({
    type: String,
    example: 'US',
    description: '國家名稱 (請使用簡稱)',
  })
  name: string;
}

export class OptionCreateSizeGroupReqDTO {
  @ApiProperty({
    type: String,
    example: 'EU',
    description: '尺碼類別 (JP、EU、US...)',
  })
  name: string;
}

export class OptionCreateSizeValueReqDTO {
  @ApiProperty({
    type: String,
    example: '68d65108fa60d2cee25e93ef',
    description: '尺碼群組 ID (mongoDB)',
  })
  group_id: string;

  @ApiProperty({ type: String, example: 'XL', description: '尺碼標號' })
  value: string;

  @ApiProperty({ type: Number, example: 1, description: '排序' })
  order: number;
}
