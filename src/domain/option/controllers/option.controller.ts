import { Controller, Body, Post, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

import { OptionService } from '../services/option.service';

import {
  OptionCreateCustomerLevelReqDTO,
  OptionCreateGenderReqDTO,
  OptionCreateProductCategoryReqDTO,
  OptionCreateProductOriginReqDTO,
  OptionCreateSizeGroupReqDTO,
  OptionCreateSizeValueReqDTO,
} from '../DTOs/option.req.dto';

@ApiTags('option')
@Controller('option')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Get('/product-category')
  @ApiOperation({ summary: '取得全部產品類別' })
  async getProductCategories() {
    const data = await this.optionService.findProductCategories();

    const results = {
      success: true,
      data,
      message: '✅ success',
    };

    return results;
  }

  @Get('/gender')
  @ApiOperation({ summary: '取得全部適用性別' })
  async getGenders() {
    const data = await this.optionService.findGenders();

    const results = {
      success: true,
      data,
      message: '✅ success',
    };

    return results;
  }

  @Post('/customer_level')
  @ApiOperation({
    summary: '創建 customer level',
    description: '請提供相對應資訊',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 customer level',
  })
  async createCustomerLevel(@Body() body: OptionCreateCustomerLevelReqDTO) {
    const results = this.optionService.createCustomLevel(body);

    return results;
  }

  @Post('/gender')
  @ApiOperation({
    summary: '創建 gender',
    description: '請提供相對應資訊',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 gender',
  })
  async createGender(@Body() dto: OptionCreateGenderReqDTO) {
    const results = this.optionService.createGender(dto);

    return results;
  }

  @Post('/product-category')
  @ApiOperation({
    summary: '創建 product category',
    description: '請提供相對應資訊',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 product category',
  })
  async createProductCategory(@Body() dto: OptionCreateProductCategoryReqDTO) {
    const results = this.optionService.createProductCategory(dto);

    return results;
  }

  @Post('/product-origin')
  @ApiOperation({
    summary: '創建 product origin',
    description: '請提供相對應資訊',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 product origin',
  })
  async createProductOrigin(@Body() dto: OptionCreateProductOriginReqDTO) {
    const results = this.optionService.createProductOrigin(dto);

    return results;
  }

  @Post('/size-group')
  @ApiOperation({
    summary: '創建 size group',
    description: '請提供相對應資訊',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 size group',
  })
  async createSizeGroup(@Body() dto: OptionCreateSizeGroupReqDTO) {
    const results = this.optionService.createSizeGroup(dto);

    return results;
  }

  @Post('/size-value')
  @ApiOperation({
    summary: '創建 size value',
    description: '請提供相對應資訊',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 size value',
  })
  async createSizeValue(@Body() dto: OptionCreateSizeValueReqDTO) {
    const results = this.optionService.createSizeValue(dto);

    return results;
  }
}
