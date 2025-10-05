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

import { GenericResDTO } from 'src/common/DTOs/generic-res.dto';
import { ProductGetQueryDTO } from '../DTOs/product.query.dto';
import {
  ProductsGetListResDTO,
  ProductFindByIdResDTO,
  ProductUpdatedOrCreateResDTO,
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
    type: ProductsGetListResDTO,
  })
  async get(
    @Query() query: ProductGetQueryDTO,
  ): Promise<ProductsGetListResDTO> {
    const results = await this.productService.findProducts(query);

    return results;
  }

  @Get('/:id')
  @ApiOperation({
    summary: '取得產品清單',
    description: '可以透過 query 過濾產品',
  })
  @ApiResponse({
    status: 200,
    description: '成功取得產品清單',
    type: ProductsGetListResDTO,
  })
  async getById(@Param('id') id: string): Promise<ProductFindByIdResDTO> {
    const results = await this.productService.findProductById(id);

    return results;
  }

  @Put('/:id')
  @ApiOperation({ summary: '更新產品' })
  @ApiParam({
    name: 'id',
    description: '產品的 mongoDB ID',
    example: '66f7d2f3e6c1234abcd12345',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: '更新成功',
    type: ProductUpdatedOrCreateResDTO,
  })
  async updateProduct(
    @Param('id') id: string,
    @Body() dto: ProductUpdateReqDTO,
  ): Promise<ProductUpdatedOrCreateResDTO> {
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
    type: ProductUpdatedOrCreateResDTO,
  })
  async create(
    @Body() dto: ProductCreateReqDTO,
  ): Promise<ProductUpdatedOrCreateResDTO> {
    const result = await this.productService.create(dto);

    return result;
  }

  @Delete('/hard-delete/:id')
  @ApiOperation({ summary: '硬刪除產品 (完全刪除)' })
  @ApiParam({
    name: 'id',
    description: '產品的 mongoDB ID',
    example: '66f7d2f3e6c1234abcd12345',
    type: String,
  })
  @ApiResponse({
    status: 203,
    description: '成功刪除產品',
    type: GenericResDTO,
  })
  async delete(@Param('id') id: string): Promise<GenericResDTO> {
    const result = await this.productService.hardDelete(id);

    return result;
  }
}
