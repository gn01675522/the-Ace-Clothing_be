import mongoose from 'mongoose';
import { parsePaginationNumberUtils } from 'src/shared/utils.shared';

import type { ProductDTO } from '../DTOs/product.res.dto';
import type { ProductGetQueryDTO } from '../DTOs/product.query.dto';
import type {
  ProductCreateReqDTO,
  ProductUpdateReqDTO,
} from '../DTOs/product.req.dto';

import type { ProductReturnCriteria } from '../criterias/product.return.criteria';
import type {
  ProductFindQueryArgCriteria,
  ProductCreateArgCriteria,
  ProductUpdateArgCriteria,
} from '../criterias/product.arg.criteria';

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
    ...(dto.gender ? { gender: new mongoose.Types.ObjectId(dto.gender) } : {}),
    ...(dto.category
      ? { category: new mongoose.Types.ObjectId(dto.category) }
      : {}),
    skip: ((current_page ?? 1) - 1) * (per_page ?? 10),
    limit: per_page ?? 10,
    recycled,
  };
};

export const mapToProductCreateCriteria = (
  dto: ProductCreateReqDTO,
): ProductCreateArgCriteria => ({
  name: dto.name,
  gender: new mongoose.Types.ObjectId(dto.gender),
  category: new mongoose.Types.ObjectId(dto.category),
  description: dto.description ? dto.description : '',
  features: dto.features ? dto.features : [],
  img_urls: dto.img_urls ? dto.img_urls : [],
});

export const mapToProductUpdateCriteria = (
  id: string,
  dto: ProductUpdateReqDTO,
): ProductUpdateArgCriteria => ({
  _id: new mongoose.Types.ObjectId(id),
  data: {
    ...(dto.name ? { name: dto.name } : {}),
    ...(dto.gender ? { gender: new mongoose.Types.ObjectId(dto.gender) } : {}),
    ...(dto.category
      ? { category: new mongoose.Types.ObjectId(dto.category) }
      : {}),
    ...(dto.features ? { features: dto.features } : {}),
    ...(dto.description ? { description: dto.description } : {}),
    ...(dto.img_urls ? { img_urls: dto.img_urls } : {}),
  },
});
