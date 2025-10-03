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

  async createCustomerLevel(
    criteria: OptionCreateCustomerLevelArgCriteria[],
    session?: ClientSession,
  ): Promise<OptionCustomerLevelReturnCriteria[]> {
    const results = (
      await this.customerLevelModel.create(criteria, { session })
    ).map((item) => item.toObject());

    return results;
  }
  async createGender(
    criteria: OptionCreateGenderArgCriteria[],
    session?: ClientSession,
  ): Promise<OptionGenderReturnCriteria[]> {
    const results = (await this.genderModel.create(criteria, { session })).map(
      (item) => item.toObject(),
    );

    return results;
  }
  async createProductCategory(
    criteria: OptionCreateProductCategoryArgCriteria[],
    session?: ClientSession,
  ): Promise<OptionProductCategoryReturnCriteria[]> {
    const results = (
      await this.productCategoryModel.create(criteria, { session })
    ).map((item) => item.toObject());

    return results;
  }
  async createProductOrigin(
    criteria: OptionCreateProductOriginArgCriteria[],
    session?: ClientSession,
  ): Promise<OptionProductOriginReturnCriteria[]> {
    const results = (
      await this.productOriginModel.create(criteria, { session })
    ).map((item) => item.toObject());

    return results;
  }
  async createSizeGroup(
    criteria: OptionCreateSizeGroupArgCriteria[],
    session?: ClientSession,
  ): Promise<OptionSizeGroupReturnCriteria[]> {
    const results = (
      await this.sizeGroupModel.create(criteria, { session })
    ).map((item) => item.toObject());

    return results;
  }
  async createSizeValue(
    criteria: OptionCreateSizeValueArgCriteria[],
    session?: ClientSession,
  ): Promise<OptionSizeValueReturnCriteria[]> {
    const results = (
      await this.sizeValueModel.create(criteria, { session })
    ).map((item) => item.toObject());

    return results;
  }
}
