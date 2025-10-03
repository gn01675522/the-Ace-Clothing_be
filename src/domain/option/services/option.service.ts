import { Injectable } from '@nestjs/common';
import { OptionRepo } from '../repositories/option.repo';

import {
  OptionCreateCustomerLevelDTO,
  OptionCreateGenderDTO,
  OptionCreateProductCategoryDTO,
  OptionCreateProductOriginDTO,
  OptionCreateSizeGroupDTO,
  OptionCreateSizeValueDTO,
} from '../DTOs/option.req.dto';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepo: OptionRepo) {}

  async createCustomLevel(dto: OptionCreateCustomerLevelDTO[]) {
    const results = await this.optionRepo.createCustomerLevel(dto);

    return results;
  }
  async createGender(dto: OptionCreateGenderDTO[]) {
    const results = await this.optionRepo.createGender(dto);

    return results;
  }
  async createProductCategory(dto: OptionCreateProductCategoryDTO[]) {
    const results = await this.optionRepo.createProductCategory(dto);

    return results;
  }
  async createProductOrigin(dto: OptionCreateProductOriginDTO[]) {
    const results = await this.optionRepo.createProductOrigin(dto);

    return results;
  }
  async createSizeGroup(dto: OptionCreateSizeGroupDTO[]) {
    const results = await this.optionRepo.createSizeGroup(dto);

    return results;
  }
  async createSizeValue(dto: OptionCreateSizeValueDTO[]) {
    const results = await this.optionRepo.createSizeValue(dto);

    return results;
  }
}
