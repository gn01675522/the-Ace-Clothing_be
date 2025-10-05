import { Injectable } from '@nestjs/common';
import { OptionRepo } from '../repositories/option.repo';

import {
  OptionCreateCustomerLevelReqDTO,
  OptionCreateGenderReqDTO,
  OptionCreateProductCategoryReqDTO,
  OptionCreateProductOriginReqDTO,
  OptionCreateSizeGroupReqDTO,
  OptionCreateSizeValueReqDTO,
} from '../DTOs/option.req.dto';
import {
  OptionGetGendersResDTO,
  OptionGetProductCategoriesResDTO,
  OptionCreateCustomerLevelResDTO,
  OptionCreateGenderResDTO,
  OptionCreateProductCategoryResDTO,
  OptionCreateProductOriginResDTO,
  OptionCreateSizeGroupResDTO,
  OptionCreateSizeValueResDTO,
} from '../DTOs/option.res.dto';
import mongoose from 'mongoose';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepo: OptionRepo) {}

  async findProductCategories(): Promise<OptionGetProductCategoriesResDTO> {
    const docs = await this.optionRepo.findProductCategories();

    const results = docs.map((doc) => ({
      ...doc,
      _id: String(doc._id),
      parent: doc.parent ? String(doc.parent) : null,
    }));

    return {
      success: true,
      data: results,
      message: results
        ? '✅ Find product categories successfully.'
        : '⚠️ No product categories found.',
    };
  }

  async findGenders(): Promise<OptionGetGendersResDTO> {
    const docs = await this.optionRepo.findGenders();

    const results = docs.map((doc) => ({ ...doc, _id: String(doc._id) }));

    return {
      success: true,
      data: results,
      message: results
        ? '✅ Find genders successfully.'
        : '⚠️ No genders found.',
    };
  }

  async createCustomLevel(
    dto: OptionCreateCustomerLevelReqDTO,
  ): Promise<OptionCreateCustomerLevelResDTO> {
    const doc = await this.optionRepo.createCustomerLevel(dto);

    const result = { ...doc, _id: String(doc._id) };

    return {
      success: true,
      data: result,
      message: '✅ Customer level created successfully.',
    };
  }
  async createGender(
    dto: OptionCreateGenderReqDTO,
  ): Promise<OptionCreateGenderResDTO> {
    const doc = await this.optionRepo.createGender(dto);

    const result = { ...doc, _id: String(doc._id) };

    return {
      success: true,
      data: result,
      message: '✅ Gender created successfully.',
    };
  }
  async createProductCategory(
    dto: OptionCreateProductCategoryReqDTO,
  ): Promise<OptionCreateProductCategoryResDTO> {
    const criteria = {
      ...dto,
      parent: dto.parent ? new mongoose.Types.ObjectId(dto.parent) : null,
    };

    const doc = await this.optionRepo.createProductCategory(criteria);

    const result = {
      ...doc,
      _id: String(doc._id),
      parent: doc.parent ? String(doc.parent) : null,
    };

    return {
      success: true,
      data: result,
      message: '✅ Product category created successfully.',
    };
  }
  async createProductOrigin(
    dto: OptionCreateProductOriginReqDTO,
  ): Promise<OptionCreateProductOriginResDTO> {
    const doc = await this.optionRepo.createProductOrigin(dto);

    const result = { ...doc, _id: String(doc._id) };

    return {
      success: true,
      data: result,
      message: '✅ Product origin created successfully.',
    };
  }
  async createSizeGroup(
    dto: OptionCreateSizeGroupReqDTO,
  ): Promise<OptionCreateSizeGroupResDTO> {
    const doc = await this.optionRepo.createSizeGroup(dto);

    const result = { ...doc, _id: String(doc._id) };

    return {
      success: true,
      data: result,
      message: '✅ Size group created successfully.',
    };
  }
  async createSizeValue(
    dto: OptionCreateSizeValueReqDTO,
  ): Promise<OptionCreateSizeValueResDTO> {
    const criteria = {
      ...dto,
      group_id: new mongoose.Types.ObjectId(dto.group_id),
    };

    const doc = await this.optionRepo.createSizeValue(criteria);

    const result = {
      ...doc,
      _id: String(doc._id),
      group_id: String(doc.group_id),
    };

    return {
      success: true,
      data: result,
      message: '✅ Size value created successfully.',
    };
  }
}
