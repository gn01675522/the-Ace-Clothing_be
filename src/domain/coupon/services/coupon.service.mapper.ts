import mongoose from 'mongoose';

import { CouponModelDTO, CouponCreateResDTO } from '../DTOs/coupon.res.dto';
import { CouponCreateReqDTO } from '../DTOs/coupon.req.dto';
import {
  CouponCreateArgCriteria,
  CouponFindArgCriteria,
} from '../criterias/coupon.arg.criteria';
import { CouponCreateReturnCriteria } from '../criterias/coupon.return.ariteria';
import { CouponGetQueryDTO } from '../DTOs/coupon.query.dto';

import { parsePaginationNumberUtils } from 'src/shared/utils.shared';

export const mapToCouponCreateResDTO = (
  criteria: CouponCreateReturnCriteria,
): CouponModelDTO => ({
  ...criteria,
  _id: String(criteria._id),
  target_ids: criteria.target_ids.map((id) => String(id)),
});

export const mapToCouponCreateArgCriteria = (
  dto: CouponCreateReqDTO,
): CouponCreateArgCriteria => {
  const target_ids = dto.target_ids
    ? dto.target_ids.map((id) => new mongoose.Types.ObjectId(id))
    : [];

  return {
    ...dto,
    target_ids,
    scope: new mongoose.Types.ObjectId(dto.scope),
    type: new mongoose.Types.ObjectId(dto.type),
    ...(dto.value && { value: dto.value }),
    ...(dto.max_usage && { max_usage: dto.max_usage }),
    ...(dto.per_customer_limit && {
      per_customer_limit: dto.per_customer_limit,
    }),
    ...(dto.is_enable && { is_enable: dto.is_enable }),
  };
};

export const mapToCouponFindArgCriteria = (
  dto: CouponGetQueryDTO,
): {
  criteria: CouponFindArgCriteria;
  pagination: { current_page: number; per_page: number };
} => {
  const current_page = parsePaginationNumberUtils(dto?.current_page, 1, 1);
  const per_page = parsePaginationNumberUtils(dto?.per_page, 10, 1);
  const is_enable =
    dto.is_enable !== undefined ? dto.is_enable === 'true' : false;
  const recycled = dto.recycled !== undefined ? dto.recycled === 'true' : false;

  return {
    criteria: {
      ...(dto.name ? { name: dto.name } : {}),
      ...(dto.code ? { code: dto.code } : {}),
      ...(dto.scope ? { scope: new mongoose.Types.ObjectId(dto.scope) } : {}),
      ...(dto.type ? { type: new mongoose.Types.ObjectId(dto.type) } : {}),
      ...(dto.start_date ? { start_date: dto.start_date } : {}),
      ...(dto.end_date ? { end_date: dto.end_date } : {}),
      ...(dto.target_ids
        ? {
            target_ids: dto.target_ids.map(
              (id) => new mongoose.Types.ObjectId(id),
            ),
          }
        : {}),
      is_enable,
      skip: ((current_page ?? 1) - 1) * (per_page ?? 10),
      limit: per_page ?? 10,
      recycled,
    },
    pagination: { current_page, per_page },
  };
};
