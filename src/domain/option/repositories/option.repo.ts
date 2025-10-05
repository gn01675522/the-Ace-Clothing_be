import { Model, ClientSession } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import {
  CustomerLevel,
  CustomerLevelDocument,
} from 'src/db/model/auxiliary/customer_level/customer_level.aux';
import {
  Gender,
  GenderDocument,
} from 'src/db/model/auxiliary/gender/gender.aux';
import {
  ProductCategory,
  ProductCategoryDocument,
} from 'src/db/model/auxiliary/product_category/product_category.aux';
import {
  ProductOrigin,
  ProductOriginDocument,
} from 'src/db/model/auxiliary/product_origin/product_origin.aux';
import {
  SizeGroup,
  SizeGroupDocument,
} from 'src/db/model/auxiliary/size_group/size_group.aux';
import {
  SizeValue,
  SizeValueDocument,
} from 'src/db/model/auxiliary/size_value/size_value.aux';

import type {
  OptionCreateCustomerLevelArgCriteria,
  OptionCreateGenderArgCriteria,
  OptionCreateProductCategoryArgCriteria,
  OptionCreateProductOriginArgCriteria,
  OptionCreateSizeGroupArgCriteria,
  OptionCreateSizeValueArgCriteria,
} from '../criterias/option.arg.criteria';
import type {
  OptionCustomerLevelReturnCriteria,
  OptionGenderReturnCriteria,
  OptionProductCategoryReturnCriteria,
  OptionProductOriginReturnCriteria,
  OptionSizeGroupReturnCriteria,
  OptionSizeValueReturnCriteria,
} from '../criterias/option.return.criteria';

@Injectable()
export class OptionRepo {
  constructor(
    @InjectModel(CustomerLevel.name)
    private readonly customerLevelModel: Model<CustomerLevelDocument>,

    @InjectModel(Gender.name)
    private readonly genderModel: Model<GenderDocument>,

    @InjectModel(ProductCategory.name)
    private readonly productCategoryModel: Model<ProductCategoryDocument>,

    @InjectModel(ProductOrigin.name)
    private readonly productOriginModel: Model<ProductOriginDocument>,

    @InjectModel(SizeGroup.name)
    private readonly sizeGroupModel: Model<SizeGroupDocument>,

    @InjectModel(SizeValue.name)
    private readonly sizeValueModel: Model<SizeValueDocument>,
  ) {}

  async findProductCategories(): Promise<
    OptionProductCategoryReturnCriteria[]
  > {
    const results = await this.productCategoryModel
      .find({ recycled: { $ne: true } })
      .lean();

    return results;
  }
  async findGenders(): Promise<OptionGenderReturnCriteria[]> {
    const results = await this.genderModel
      .find({ recycled: { $ne: true } })
      .lean();

    return results;
  }
  async createCustomerLevel(
    criteria: OptionCreateCustomerLevelArgCriteria,
    session?: ClientSession,
  ): Promise<OptionCustomerLevelReturnCriteria> {
    const existingData = await this.customerLevelModel.findOne({
      name: criteria.name,
    });

    if (existingData) {
      console.warn(`⚠️ Customer Level "${criteria.name}" already exists`);
      return existingData;
    }

    const data = new this.customerLevelModel({ ...criteria });

    const result = await data.save({ session });

    return result.toObject();
  }
  async createGender(
    criteria: OptionCreateGenderArgCriteria,
    session?: ClientSession,
  ): Promise<OptionGenderReturnCriteria> {
    const existingData = await this.genderModel.findOne({
      name: criteria.name,
    });

    if (existingData) {
      console.warn(`⚠️ Gender "${criteria.name}" already exists`);
      return existingData;
    }

    const data = new this.genderModel({ ...criteria });

    const result = await data.save({ session });

    return result.toObject();
  }
  async createProductCategory(
    criteria: OptionCreateProductCategoryArgCriteria,
    session?: ClientSession,
  ): Promise<OptionProductCategoryReturnCriteria> {
    const existingData = await this.productCategoryModel.findOne({
      name: criteria.name,
    });

    if (existingData) {
      console.warn(`⚠️ Product category "${criteria.name}" already exists`);
      return existingData;
    }

    const data = new this.productCategoryModel({ ...criteria });

    const result = await data.save({ session });

    return result.toObject();
  }
  async createProductOrigin(
    criteria: OptionCreateProductOriginArgCriteria,
    session?: ClientSession,
  ): Promise<OptionProductOriginReturnCriteria> {
    const existingData = await this.productOriginModel.findOne({
      name: criteria.name,
    });

    if (existingData) {
      console.warn(`⚠️ Product origin "${criteria.name}" already exists`);
      return existingData;
    }

    const data = new this.productOriginModel({ ...criteria });

    const result = await data.save({ session });

    return result.toObject();
  }
  async createSizeGroup(
    criteria: OptionCreateSizeGroupArgCriteria,
    session?: ClientSession,
  ): Promise<OptionSizeGroupReturnCriteria> {
    const existingData = await this.sizeGroupModel.findOne({
      name: criteria.name,
    });

    if (existingData) {
      console.warn(`⚠️ Size group "${criteria.name}" already exists`);
      return existingData;
    }

    const data = new this.sizeGroupModel({ ...criteria });

    const result = await data.save({ session });

    return result.toObject();
  }
  async createSizeValue(
    criteria: OptionCreateSizeValueArgCriteria,
    session?: ClientSession,
  ): Promise<OptionSizeValueReturnCriteria> {
    const existingData = await this.sizeValueModel.findOne({
      name: criteria.value,
    });

    if (existingData) {
      console.warn(`⚠️ Size value "${criteria.value}" already exists`);
      return existingData;
    }

    const data = new this.sizeValueModel({ ...criteria });

    const result = await data.save({ session });

    return result.toObject();
  }
}
