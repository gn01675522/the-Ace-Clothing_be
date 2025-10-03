import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession } from 'mongoose';

import { CustomerLevel } from 'src/db/model/auxiliary/customer_level/customer_level.aux';
import { Gender } from 'src/db/model/auxiliary/gender/gender.aux';
import { ProductCategory } from 'src/db/model/auxiliary/product_category/product_category.aux';
import { ProductOrigin } from 'src/db/model/auxiliary/product_origin/product_origin.aux';
import { SizeGroup } from 'src/db/model/auxiliary/size_group/size_group.aux';
import { SizeValue } from 'src/db/model/auxiliary/size_value/size_value.aux';

import type {
  OptionCreateCustomerLevelArgCriteria,
  OptionCreateGenderArgCriteria,
  OptionCreateProductCategoryArgCriteria,
  OptionCreateProductOriginArgCriteria,
  OptionCreateSizeGroupArgCriteria,
  OptionCreateSizeValueArgCriteria,
} from '../criterias/option.arg.criteria';

@Injectable()
export class OptionRepo {
  constructor(
    @InjectModel(CustomerLevel.name)
    private readonly customerLevelModel: Model<CustomerLevel>,

    @InjectModel(Gender.name)
    private readonly genderModel: Model<Gender>,

    @InjectModel(ProductCategory.name)
    private readonly productCategoryModel: Model<ProductCategory>,

    @InjectModel(ProductOrigin.name)
    private readonly productOriginModel: Model<ProductOrigin>,

    @InjectModel(SizeGroup.name)
    private readonly sizeGroupModel: Model<SizeGroup>,

    @InjectModel(SizeValue.name)
    private readonly sizeValueModel: Model<SizeValue>,
  ) {}

  async createCustomerLevel(
    criteria: OptionCreateCustomerLevelArgCriteria[],
    session?: ClientSession,
  ): Promise<CustomerLevel[]> {
    const results = await this.customerLevelModel.create(criteria, { session });

    return results;
  }
  async createGender(
    criteria: OptionCreateGenderArgCriteria[],
    session?: ClientSession,
  ): Promise<Gender[]> {
    const results = await this.genderModel.create(criteria, { session });

    return results;
  }
  async createProductCategory(
    criteria: OptionCreateProductCategoryArgCriteria[],
    session?: ClientSession,
  ): Promise<ProductCategory[]> {
    const results = await this.productCategoryModel.create(criteria, {
      session,
    });

    return results;
  }
  async createProductOrigin(
    criteria: OptionCreateProductOriginArgCriteria[],
    session?: ClientSession,
  ): Promise<ProductOrigin[]> {
    const results = await this.productOriginModel.create(criteria, { session });

    return results;
  }
  async createSizeGroup(
    criteria: OptionCreateSizeGroupArgCriteria[],
    session?: ClientSession,
  ): Promise<SizeGroup[]> {
    const results = await this.sizeGroupModel.create(criteria, { session });

    return results;
  }
  async createSizeValue(
    criteria: OptionCreateSizeValueArgCriteria[],
    session?: ClientSession,
  ): Promise<SizeValue[]> {
    const results = await this.sizeValueModel.create(criteria, { session });

    return results;
  }
}
