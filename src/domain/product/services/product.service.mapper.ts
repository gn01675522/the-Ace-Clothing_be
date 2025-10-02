import { Types } from 'mongoose';
import { parsePaginationNumberUtils } from 'src/shared/utils.shared';

import type { ProductDTO } from '../DTOs/product.res.dto';
import type { ProductReturnCriteria } from '../criterias/product.return.criteria';

import type { ProductGetQueryDTO } from '../DTOs/product.query.dto';
import type { ProductFindQueryArgCriteria } from '../criterias/product.arg.criteria';

export const mapToProductResDTO = (doc: ProductReturnCriteria): ProductDTO => ({
  name: doc.name,
  gender: { id: String(doc.gender._id), value: doc.gender.name },
  category: { id: String(doc.category._id), value: doc.category.name },
  features: doc.features,
  description: doc.description,
  img_urls: doc.img_urls,
  createdAt: doc.createdAt,
  updatedAt: doc.updatedAt,
  recycled: doc.recycled,
  _id: String(doc._id),
  __v: doc.__v,
});

export const mapToProductFindArgCriteria = (
  dto: ProductGetQueryDTO,
): ProductFindQueryArgCriteria => {
  const current_page = parsePaginationNumberUtils(dto?.current_page, 1, 1);
  const per_page = parsePaginationNumberUtils(dto?.per_page, 10, 1);
  const recycled = dto.recycled !== undefined ? dto.recycled === 'true' : false;

  return {
    ...(dto.name ? { name: dto.name } : {}),
    ...(dto.gender ? { gender: new Types.ObjectId(dto.gender) } : {}),
    ...(dto.category ? { category: new Types.ObjectId(dto.category) } : {}),
    skip: ((current_page ?? 1) - 1) * (per_page ?? 10),
    limit: per_page ?? 10,
    recycled,
  };
};
