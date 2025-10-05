import mongoose, { ClientSession, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import {
  Product,
  ProductDocument,
} from '../../../db/model/core/product/product.core';

import type {
  ProductFindQueryArgCriteria,
  ProductCreateArgCriteria,
  ProductUpdateArgCriteria,
} from '../criterias/product.arg.criteria';
import type {
  ProductBaseReturnCriteria,
  ProductReturnCriteria,
} from '../criterias/product.return.criteria';

@Injectable()
export class ProductRepo {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
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
  async findById(
    id: mongoose.Types.ObjectId,
  ): Promise<ProductReturnCriteria | null> {
    const result = await this.productModel
      .findOne({
        _id: id,
        recycled: { $ne: true },
      })
      .populate<{ category: { _id: mongoose.Types.ObjectId; name: string } }>(
        'category',
        '_id name',
      )
      .populate<{ gender: { _id: mongoose.Types.ObjectId; name: string } }>(
        'gender',
        '_id name',
      )
      .lean();

    return result;
  }
  async findOneAndUpdate(
    criteria: ProductUpdateArgCriteria,
    session?: ClientSession,
  ): Promise<ProductBaseReturnCriteria | null> {
    const result = await this.productModel
      .findOneAndUpdate(
        { _id: criteria._id, recycled: { $ne: true } },
        { ...criteria.data },
        { new: true, runValidators: true, session },
      )
      .lean();

    return result;
  }
  async create(
    criteria: ProductCreateArgCriteria,
    session?: ClientSession,
  ): Promise<ProductBaseReturnCriteria> {
    const existingData = await this.productModel
      .findOne({
        name: criteria.name,
      })
      .exec();

    if (existingData) {
      console.warn(`⚠️ Product "${criteria.name}" already exists`);
      return existingData;
    }

    const data = new this.productModel({ ...criteria });

    const result = await data.save({ session });

    return result.toObject();
  }
  async hardDelete(
    id: mongoose.Types.ObjectId,
    session?: ClientSession,
  ): Promise<ProductBaseReturnCriteria | null> {
    const result = await this.productModel
      .findByIdAndDelete(id, { session })
      .lean();

    return result;
  }
  async count(criteria: ProductFindQueryArgCriteria): Promise<number> {
    const { skip, limit, ...rest } = criteria;

    return this.productModel.countDocuments(rest).exec();
  }
}
