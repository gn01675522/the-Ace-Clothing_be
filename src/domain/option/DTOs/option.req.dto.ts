import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class OptionCreateCustomerLevelReqDTO {
  @ApiProperty({ example: 'Diamond', description: '等級稱呼' })
  name: string;

  @ApiProperty({ example: 1, description: '排序' })
  order: number;
}

export class OptionCreateGenderReqDTO {
  @ApiProperty({ example: 'Male', description: '性別' })
  name: string;
}

export class OptionCreateProductCategoryReqDTO {
  @ApiProperty({ example: 'Pants', description: '產品類別名稱' })
  name: string;

  @ApiProperty({
    example: '68d65108fa60d2cee25e93ef',
    description: '父類別 ID (mongoDB)',
  })
  parent: mongoose.Types.ObjectId | null;
}

export class OptionCreateProductOriginReqDTO {
  @ApiProperty({ example: 'US', description: '國家名稱 (請使用簡稱)' })
  name: string;
}

export class OptionCreateSizeGroupReqDTO {
  @ApiProperty({ example: 'EU', description: '尺碼類別 (JP、EU、US...)' })
  name: string;
}

export class OptionCreateSizeValueReqDTO {
  @ApiProperty({
    example: '68d65108fa60d2cee25e93ef',
    description: '尺碼群組 ID (mongoDB)',
  })
  group_id: mongoose.Types.ObjectId;

  @ApiProperty({ example: 'XL', description: '尺碼標號' })
  value: string;

  @ApiProperty({ example: 1, description: '排序' })
  order: number;
}
