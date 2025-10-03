import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class ProductCreateDTO {
  @ApiProperty({ example: 'Cool Jacket', description: '產品名稱' })
  name: string;

  @ApiProperty({ example: '65af2bc1234abcd5678ef901', description: '性別 id' })
  gender: mongoose.Types.ObjectId;

  @ApiProperty({ example: '65af2bc1234abcd5678ef902', description: '分類 id' })
  category: mongoose.Types.ObjectId;

  @ApiProperty({ example: ['waterproof', 'lightweight'], required: false })
  features?: string[];

  @ApiProperty({ example: '一件很酷的外套', required: false })
  description?: string;

  @ApiProperty({
    example: ['https://example.com/image1.jpg'],
    required: false,
  })
  img_urls?: string[];
}

export class ProductUpdateDTO {
  @ApiProperty({ example: 'Cool Jacket', description: '產品名稱' })
  name?: string;

  @ApiProperty({ example: '65af2bc1234abcd5678ef901', description: '性別 id' })
  gender?: mongoose.Types.ObjectId;

  @ApiProperty({ example: '65af2bc1234abcd5678ef902', description: '分類 id' })
  category?: mongoose.Types.ObjectId;

  @ApiProperty({ example: ['waterproof', 'lightweight'], required: false })
  features?: string[];

  @ApiProperty({ example: '一件很酷的外套', required: false })
  description?: string;

  @ApiProperty({
    example: ['https://example.com/image1.jpg'],
    required: false,
  })
  img_urls?: string[];
}
