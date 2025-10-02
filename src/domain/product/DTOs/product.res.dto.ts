import { ApiProperty, OmitType } from '@nestjs/swagger';

import { GenericResDTO } from 'src/common/DTOs/generic-res.dto';
import { PaginationDTO } from 'src/common/DTOs/pagination.dto';

export class IdValueDTO {
  @ApiProperty()
  id: string;
  value: string;
}

export class ProductModelDTO {
  @ApiProperty({ description: '產品 ID ( mondoDB )' })
  _id: string;

  @ApiProperty({ description: '產品名稱' })
  name: string;

  @ApiProperty({ description: '產品適用性別' })
  gender: string;

  @ApiProperty({ description: '產品類別' })
  category: string;

  @ApiProperty({ description: '產品特性', required: false })
  features?: string[];

  @ApiProperty({ description: '產品描述', required: false })
  description?: string;

  @ApiProperty({ description: '產品圖片', required: false })
  img_urls?: string[];

  @ApiProperty({ description: '產品是否軟刪除' })
  recycled: boolean;

  @ApiProperty({ description: '產品創建時間' })
  createdAt: Date;

  @ApiProperty({ description: '產品最新更新時間' })
  updatedAt: Date;

  @ApiProperty({ description: '資料庫版本號' })
  __v: number;
}

export class ProductDTO extends OmitType(ProductModelDTO, [
  'category',
  'gender',
]) {
  @ApiProperty({ description: '產品類別', type: () => IdValueDTO })
  category: IdValueDTO;

  @ApiProperty({ description: '產品適用性別', type: () => IdValueDTO })
  gender: IdValueDTO;
}

export class ProductFindByIdResDTO extends GenericResDTO {
  @ApiProperty()
  data: ProductDTO;
}

export class ProductsGetResDTO extends GenericResDTO {
  @ApiProperty()
  data: ProductDTO[];

  @ApiProperty()
  pagination: PaginationDTO;

  @ApiProperty()
  total: number;
}

export class ProductUpdatedOrCreateResDTO extends GenericResDTO {
  @ApiProperty()
  data: ProductModelDTO;
}
