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
  OptionCreateCustomerLevelResDTO,
  OptionCreateGenderResDTO,
  OptionCreateProductCategoryResDTO,
  OptionCreateProductOriginResDTO,
  OptionCreateSizeGroupResDTO,
  OptionCreateSizeValueResDTO,
} from '../DTOs/option.res.dto';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepo: OptionRepo) {}

  async findProductCategories() {
    const results = await this.optionRepo.findProductCategories();

    return results;
  }

  async findGenders() {
    const results = await this.optionRepo.findGenders();

    return results;
  }

  async createCustomLevel(
    dto: OptionCreateCustomerLevelReqDTO,
  ): Promise<OptionCreateCustomerLevelResDTO> {
    const results = await this.optionRepo.createCustomerLevel(dto);

    return results;
  }
  async createGender(
    dto: OptionCreateGenderReqDTO,
  ): Promise<OptionCreateGenderResDTO> {
    const results = await this.optionRepo.createGender(dto);

    return results;
  }
  async createProductCategory(
    dto: OptionCreateProductCategoryReqDTO,
  ): Promise<OptionCreateProductCategoryResDTO> {
    const results = await this.optionRepo.createProductCategory(dto);

    return results;
  }
  async createProductOrigin(
    dto: OptionCreateProductOriginReqDTO,
  ): Promise<OptionCreateProductOriginResDTO> {
    const results = await this.optionRepo.createProductOrigin(dto);

    return results;
  }
  async createSizeGroup(
    dto: OptionCreateSizeGroupReqDTO,
  ): Promise<OptionCreateSizeGroupResDTO> {
    const results = await this.optionRepo.createSizeGroup(dto);

    return results;
  }
  async createSizeValue(
    dto: OptionCreateSizeValueReqDTO,
  ): Promise<OptionCreateSizeValueResDTO> {
    const results = await this.optionRepo.createSizeValue(dto);

    return results;
  }
}
