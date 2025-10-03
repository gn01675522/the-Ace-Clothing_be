import { Controller, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { Query } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiQuery,
  ApiPropertyOptional,
} from '@nestjs/swagger';

import { ProductService } from '../services/product.service';
import { Product } from '../../../db/model/core/product/product.core';
import {
  ProductsGetResDTO,
  ProductFindByIdResDTO,
} from '../DTOs/product.res.dto';
import { ProductGetQueryDTO } from '../DTOs/product.query.dto';

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

  async create(dto: any[]) {
    const results = await this.productService.create(dto);
  }
}
