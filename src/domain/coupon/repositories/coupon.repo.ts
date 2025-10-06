import { Model, ClientSession } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Coupon, CouponDocument } from 'src/db/model/core/coupon/coupon.core';

import type {
  CouponFindArgCriteria,
  CouponCreateArgCriteria,
} from '../criterias/coupon.arg.criteria';
import type { CouponCreateReturnCriteria } from '../criterias/coupon.return.ariteria';

@Injectable()
export class CouponRepo {
  constructor(
    @InjectModel(Coupon.name)
    private readonly couponModel: Model<CouponDocument>,
  ) {}

  async find(criteria: CouponFindArgCriteria) {
    const { name, recycled, skip, limit, ...rest } = criteria;

    const results = await this.couponModel.aggregate([
      {
        $match: {
          ...rest,
          ...(name ? { name: { $regex: name, $options: 'i' } } : {}),
          recycled: recycled ?? { $ne: true },
        },
      },
      { $skip: skip },
      { $limit: limit },
    ]);

    return results;
  }

  async create(
    criteria: CouponCreateArgCriteria,
    session?: ClientSession,
  ): Promise<CouponCreateReturnCriteria> {
    const doc = new this.couponModel({ ...criteria });

    const result = await doc.save({ session });

    return result.toObject();
  }

  async count(criteria: CouponFindArgCriteria): Promise<number> {
    const { skip, limit, ...rest } = criteria;

    return this.couponModel.countDocuments(rest).exec();
  }
}
