import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';

import { ProductRepo } from '../repositories/product.repo';

import { GenericResDTO } from 'src/common/DTOs/generic-res.dto';
import type { ProductGetQueryDTO } from '../DTOs/product.query.dto';
import {
  ProductCreateReqDTO,
  ProductUpdateReqDTO,
} from '../DTOs/product.req.dto';
import {
  ProductDTO,
  ProductFindByIdResDTO,
  ProductsGetListResDTO,
  ProductUpdatedOrCreateResDTO,
} from '../DTOs/product.res.dto';

import {
  mapToProductModelResDTO,
  mapToProductResDTO,
  mapToProductFindArgCriteria,
  mapToProductCreateCriteria,
  mapToProductUpdateCriteria,
} from './product.service.mapper';
import { parsePaginationNumberUtils } from 'src/shared/utils.shared';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepo) {}

  async findProducts(dto: ProductGetQueryDTO): Promise<ProductsGetListResDTO> {
    const current_page = parsePaginationNumberUtils(dto?.current_page, 1, 1);
    const per_page = parsePaginationNumberUtils(dto?.per_page, 10, 1);

    const criteria = mapToProductFindArgCriteria(dto);

    const [products, total] = await Promise.all([
      this.productRepo.find(criteria),
      this.productRepo.count(criteria),
    ]);

    const mapProducts = products.map((product) => mapToProductResDTO(product));

    return {
      success: true,
      data: mapProducts,
      pagination: {
        current_page,
        per_page,
        total_pages: Math.ceil(total / per_page),
      },
      total,
      message:
        mapProducts.length > 0
          ? '✅ Find product successfully.'
          : '⚠️ No products found.',
    };
  }
  async findProductById(id: string): Promise<ProductFindByIdResDTO> {
    const objectId = new mongoose.Types.ObjectId(id);

    const docs = await this.productRepo.findById(objectId);

    const result = docs ? mapToProductResDTO(docs) : null;

    return {
      success: true,
      data: result,
      message: result
        ? '✅ Find product successfully.'
        : '⚠️ No products found.',
    };
  }
  async updateProduct(
    id: string,
    dto: ProductUpdateReqDTO,
  ): Promise<ProductUpdatedOrCreateResDTO> {
    const criteria = mapToProductUpdateCriteria(id, dto);

    const doc = await this.productRepo.findOneAndUpdate(criteria);

    const result = doc ? mapToProductModelResDTO(doc) : null;

    return {
      success: result ? true : false,
      data: result,
      message: result
        ? '✅ Product updated successfully.'
        : '❌ Product updated failed.',
    };
  }
  async create(
    dto: ProductCreateReqDTO,
  ): Promise<ProductUpdatedOrCreateResDTO> {
    const criteria = mapToProductCreateCriteria(dto);

    const doc = await this.productRepo.create(criteria);

    const result = mapToProductModelResDTO(doc);

    return {
      success: true,
      data: result,
      message: '✅ Product created successfully.',
    };
  }
  async hardDelete(id: string): Promise<GenericResDTO> {
    const objectId = new mongoose.Types.ObjectId(id);

    const result = await this.productRepo.hardDelete(objectId);

    return {
      success: result ? true : false,
      message: result
        ? '✅ Product deleted successfully.'
        : '❌ Product deleted failed.',
    };
  }
}
