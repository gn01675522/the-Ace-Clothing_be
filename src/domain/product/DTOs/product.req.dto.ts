import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class ProductCreateReqDTO {
  @ApiPropertyOptional({
    required: true,
    example: 'Cool Jacket',
    description: '產品名稱',
  })
  name: string;

  @ApiPropertyOptional({
    required: true,
    example: '65af2bc1234abcd5678ef901',
    description: '性別 id',
  })
  gender: mongoose.Types.ObjectId;

  @ApiPropertyOptional({
    required: true,
    example: '65af2bc1234abcd5678ef902',
    description: '分類 id',
  })
  category: mongoose.Types.ObjectId;

  @ApiPropertyOptional({
    required: false,
    example: ['waterproof', '金屬', '塑膠'],
  })
  features?: string[];

  @ApiPropertyOptional({ required: false, example: '一件很酷的外套' })
  description?: string;

  @ApiPropertyOptional({
    required: false,
    example: ['https://example.com/image1.jpg'],
  })
  img_urls?: string[];
}

export class ProductUpdateReqDTO {
  @ApiProperty({
    required: false,
    example: 'Cool Jacket',
    description: '產品名稱',
  })
  name?: string;

  @ApiProperty({
    required: false,
    example: '65af2bc1234abcd5678ef901',
    description: '性別 id',
  })
  gender?: string;

  @ApiProperty({
    required: false,
    example: '65af2bc1234abcd5678ef902',
    description: '分類 id',
  })
  category?: string;

  @ApiProperty({ required: false, example: ['waterproof', 'lightweight'] })
  features?: string[];

  @ApiProperty({ required: false, example: '一件很酷的外套' })
  description?: string;

  @ApiProperty({
    required: false,
    example: ['https://example.com/image1.jpg'],
  })
  img_urls?: string[];
}
