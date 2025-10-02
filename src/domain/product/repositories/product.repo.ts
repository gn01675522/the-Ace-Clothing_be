import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from '../../../db/model/core/product/product.core';

import type {
  ProductFindQueryArgCriteria,
  ProductCreateArgCriteria,
  ProductUpdateArgCriteria,
} from '../criterias/product.arg.criteria';
import type { ProductReturnCriteria } from '../criterias/product.return.criteria';

@Injectable()
export class ProductRepo {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async find(
    criteria: ProductFindQueryArgCriteria,
  ): Promise<ProductReturnCriteria[]> {
    const { name, skip, limit, recycled, ...rest } = criteria;

    const results = await this.productModel.aggregate([
      {
        $match: {
          ...rest,
          ...(name ? { name: { $regex: name, $options: 'i' } } : {}),
          recycled: recycled ?? { $ne: true },
        },
      },
      {
        $lookup: {
          from: 'product_category',
          localField: 'category',
          foreignField: '_id',
          as: 'categoryInfo',
        },
      },
      { $unwind: '$categoryInfo' },
      {
        $lookup: {
          from: 'gender',
          localField: 'gender',
          foreignField: '_id',
          as: 'genderInfo',
        },
      },
      { $unwind: '$genderInfo' },
      { $skip: skip },
      { $limit: limit },
      {
        $project: {
          name: 1,
          gender: '$genderInfo',
          category: '$categoryInfo',
          features: 1,
          description: 1,
          img_urls: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ]);

    return results;
  }

  async count(criteria: any): Promise<number> {
    const { skip, limit, ...rest } = criteria;
    return this.productModel.countDocuments(rest).exec();
  }
}
