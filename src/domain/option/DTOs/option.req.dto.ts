import { ApiProperty } from '@nestjs/swagger';

export class OptionCreateCustomerLevelDTO {
  @ApiProperty({ example: 'Diamond', description: '等級稱呼' })
  name: string;

  @ApiProperty({ example: 1, description: '排序' })
  order: number;
}

export class OptionCreateGenderDTO {
  @ApiProperty({ example: 'Male', description: '性別' })
  name: string;
}

export class OptionCreateProductCategoryDTO {
  @ApiProperty({ example: 'Pants', description: '產品類別名稱' })
  name: string;

  @ApiProperty({
    example: '68d65108fa60d2cee25e93ef',
    description: '父類別 ID (mongoDB)',
  })
  parent: string | null;
}

export class OptionCreateProductOriginDTO {
  @ApiProperty({ example: 'US', description: '國家名稱 (請使用簡稱)' })
  name: string;
}

export class OptionCreateSizeGroupDTO {
  @ApiProperty({ example: 'EU', description: '尺碼類別 (JP、EU、US...)' })
  name: string;
}

export class OptionCreateSizeValueDTO {
  @ApiProperty({
    example: '68d65108fa60d2cee25e93ef',
    description: '尺碼群組 ID (mongoDB)',
  })
  group_id: string;

  @ApiProperty({ example: 'XL', description: '尺碼標號' })
  value: string;

  @ApiProperty({ example: 1, description: '排序' })
  order: number;
}
