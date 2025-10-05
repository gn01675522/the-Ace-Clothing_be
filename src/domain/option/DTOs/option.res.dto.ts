import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { GenericResDTO } from '../../../common/DTOs/generic-res.dto';

export class CustomerLevelDTO {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  order: number;

  @ApiProperty({ type: Boolean })
  recycled: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: Number })
  __v: number;
}

export class GenderDTO {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Boolean })
  recycled: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: Number })
  __v: number;
}

export class ProductCategoryDTO {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiPropertyOptional({ type: String, nullable: true })
  parent: string | null;

  @ApiProperty({ type: Boolean })
  recycled?: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: Number })
  __v: number;
}

export class ProductOriginDTO {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Boolean })
  recycled: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: Number })
  __v: number;
}

export class SizeGroupDTO {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Boolean })
  recycled: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: Number })
  __v: number;
}

export class SizeValueDTO {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  group_id: string;

  @ApiProperty({ type: String })
  value: string;

  @ApiProperty({ type: Number })
  order: number;

  @ApiProperty({ type: Boolean })
  recycled: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: Number })
  __v: number;
}

export class OptionCreateCustomerLevelResDTO extends GenericResDTO {
  @ApiProperty({ type: () => CustomerLevelDTO })
  data: CustomerLevelDTO;
}

export class OptionCreateGenderResDTO extends GenericResDTO {
  @ApiProperty({ type: () => GenderDTO })
  data: GenderDTO;
}

export class OptionGetGendersResDTO extends GenericResDTO {
  @ApiProperty({ type: () => [GenderDTO] })
  data: GenderDTO[];
}

export class OptionGetProductCategoriesResDTO extends GenericResDTO {
  @ApiProperty({ type: () => [ProductCategoryDTO] })
  data: ProductCategoryDTO[];
}

export class OptionCreateProductCategoryResDTO extends GenericResDTO {
  @ApiProperty({ type: () => ProductCategoryDTO })
  data: ProductCategoryDTO;
}

export class OptionCreateProductOriginResDTO extends GenericResDTO {
  @ApiProperty({ type: () => ProductOriginDTO })
  data: ProductOriginDTO;
}

export class OptionCreateSizeGroupResDTO extends GenericResDTO {
  @ApiProperty({ type: () => SizeGroupDTO })
  data: SizeGroupDTO;
}

export class OptionCreateSizeValueResDTO extends GenericResDTO {
  @ApiProperty({ type: () => SizeValueDTO })
  data: SizeValueDTO;
}
