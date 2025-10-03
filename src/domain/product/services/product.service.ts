import { Injectable } from '@nestjs/common';

import { Product } from '../../../db/model/core/product/product.core';
import { ProductRepo } from '../repositories/product.repo';

import { ProductsGetResDTO } from '../DTOs/product.res.dto';
import {
  mapToProductResDTO,
  mapToProductFindArgCriteria,
} from './product.service.mapper';
import { parsePaginationNumberUtils } from 'src/shared/utils.shared';

import type { ProductGetQueryDTO } from '../DTOs/product.query.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepo) {}

  async findProducts(dto: ProductGetQueryDTO): Promise<any> {
    const current_page = parsePaginationNumberUtils(dto?.current_page, 1, 1);
    const per_page = parsePaginationNumberUtils(dto?.per_page, 10, 1);

    const criteria = mapToProductFindArgCriteria(dto);

    const [products, total] = await Promise.all([
      this.productRepo.find(criteria),
      this.productRepo.count(criteria),
    ]);

    const mapProducts = products.map((product) => mapToProductResDTO(product));

    const results = {
      data: mapProducts,
      pagination: {
        current_page,
        per_page,
        total_pages: Math.ceil(total / per_page),
      },
      total,
    };

    return results;
  }

  async create(dto: any[]): Promise<any> {
    const results = await this.productRepo.create(dto);

    return results;
  }
}
