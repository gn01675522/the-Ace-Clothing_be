import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

import { OptionService } from '../services/option.service';

import {
  OptionCreateCustomerLevelDTO,
  OptionCreateGenderDTO,
  OptionCreateProductCategoryDTO,
  OptionCreateProductOriginDTO,
  OptionCreateSizeGroupDTO,
  OptionCreateSizeValueDTO,
} from '../DTOs/option.req.dto';

@ApiTags('option')
@Controller('option')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Post('/customer_level')
  @ApiOperation({
    summary: '創建 customer level',
    description: '請提供相對應資訊 (陣列形式，因為可以支援多筆)',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 customer level',
  })
  async createCustomerLevel(@Body() dto: OptionCreateCustomerLevelDTO[]) {
    const results = this.optionService.createCustomLevel(dto);

    return results;
  }

  @Post('/gender')
  @ApiOperation({
    summary: '創建 gender',
    description: '請提供相對應資訊 (陣列形式，因為可以支援多筆)',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 gender',
  })
  async createGender(@Body() dto: OptionCreateGenderDTO[]) {
    const results = this.optionService.createGender(dto);

    return results;
  }

  @Post('/product-category')
  @ApiOperation({
    summary: '創建 product category',
    description: '請提供相對應資訊 (陣列形式，因為可以支援多筆)',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 product category',
  })
  async createProductCategory(@Body() dto: OptionCreateProductCategoryDTO[]) {
    const results = this.optionService.createProductCategory(dto);

    return results;
  }

  @Post('/product-origin')
  @ApiOperation({
    summary: '創建 product origin',
    description: '請提供相對應資訊 (陣列形式，因為可以支援多筆)',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 product origin',
  })
  async createProductOrigin(@Body() dto: OptionCreateProductOriginDTO[]) {
    const results = this.optionService.createProductOrigin(dto);

    return results;
  }

  @Post('/size-group')
  @ApiOperation({
    summary: '創建 size group',
    description: '請提供相對應資訊 (陣列形式，因為可以支援多筆)',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 size group',
  })
  async createSizeGroup(@Body() dto: OptionCreateSizeGroupDTO[]) {
    const results = this.optionService.createSizeGroup(dto);

    return results;
  }

  @Post('/size-value')
  @ApiOperation({
    summary: '創建 size value',
    description: '請提供相對應資訊 (陣列形式，因為可以支援多筆)',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 size value',
  })
  async createSizeValue(@Body() dto: OptionCreateSizeValueDTO[]) {
    const results = this.optionService.createSizeValue(dto);

    return results;
  }
}
