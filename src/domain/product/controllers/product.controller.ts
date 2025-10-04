import {
  Controller,
  Query,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { ApiTags, ApiResponse, ApiOperation, ApiParam } from '@nestjs/swagger';

import { ProductService } from '../services/product.service';
import { ProductGetQueryDTO } from '../DTOs/product.query.dto';
import {
  ProductsGetResDTO,
  ProductFindByIdResDTO,
} from '../DTOs/product.res.dto';
import {
  ProductCreateReqDTO,
  ProductUpdateReqDTO,
} from '../DTOs/product.req.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({
    summary: '取得產品清單',
    description: '可以透過 query 過濾產品',
  })
  @ApiResponse({
    status: 200,
    description: '成功取得產品清單',
    type: ProductsGetResDTO,
  })
  async get(@Query() query: ProductGetQueryDTO) {
    const results = this.productService.findProducts(query);

    return results;
  }

  @Put('/:id')
  @ApiOperation({ summary: '更新產品' })
  @ApiParam({
    name: 'id',
    description: '產品的 mongoDB ID',
    type: String,
    example: '66f7d2f3e6c1234abcd12345',
  })
  @ApiResponse({
    status: 200,
    description: '更新成功',
  })
  async update(@Param('id') id: string, @Body() dto: ProductUpdateReqDTO) {
    const result = await this.productService.updateProduct(id, dto);

    return result;
  }

  @Post()
  @ApiOperation({
    summary: '創建產品',
    description: '請輸入必要屬性',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建產品',
  })
  async create(@Body() dto: ProductCreateReqDTO) {
    const result = await this.productService.create(dto);

    return result;
  }

  @Delete('/hard-delete/:id')
  @ApiOperation({ summary: '硬刪除產品 (完全刪除)' })
  @ApiParam({
    name: 'id',
    description: '產品的 mongoDB ID',
    type: String,
    example: '66f7d2f3e6c1234abcd12345',
  })
  @ApiResponse({
    status: 203,
    description: '成功刪除產品',
  })
  async delete(@Param('id') id: string) {
    const result = await this.productService.hardDelete(id);

    return result;
  }
}
