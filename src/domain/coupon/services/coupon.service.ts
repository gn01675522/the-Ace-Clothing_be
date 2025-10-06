import { Injectable } from '@nestjs/common';

import { CouponRepo } from '../repositories/coupon.repo';

import {
  mapToCouponCreateResDTO,
  mapToCouponCreateArgCriteria,
} from './coupon.service.mapper';
import { mapToCouponFindArgCriteria } from './coupon.service.mapper';

import type { CouponGetQueryDTO } from '../DTOs/coupon.query.dto';
import type { CouponCreateResDTO } from '../DTOs/coupon.res.dto';
import type { CouponCreateReqDTO } from '../DTOs/coupon.req.dto';

@Injectable()
export class CouponService {
  constructor(private readonly couponRepo: CouponRepo) {}

  async findAllCoupon(dto: CouponGetQueryDTO) {
    const { criteria, pagination } = mapToCouponFindArgCriteria(dto);

    const [docs, total] = await Promise.all([
      this.couponRepo.find(criteria),
      this.couponRepo.count(criteria),
    ]);

    return {
      success: true,
      data: docs,
      message: '',
      pagination: {
        current_page: pagination.current_page,
        per_page: pagination.per_page,
        total_pages: Math.ceil(total / pagination.per_page),
      },
    };
  }

  async createCoupon(dto: CouponCreateReqDTO): Promise<CouponCreateResDTO> {
    const criteria = mapToCouponCreateArgCriteria(dto);

    const doc = await this.couponRepo.create(criteria);

    const result = mapToCouponCreateResDTO(doc);

    return { success: true, data: result, message: '' };
  }
}
