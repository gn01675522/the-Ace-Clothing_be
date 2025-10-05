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
import {
  OptionCreateCustomerLevelResDTO,
  OptionCreateGenderResDTO,
  OptionGetGendersResDTO,
  OptionGetProductCategoriesResDTO,
  OptionCreateProductCategoryResDTO,
  OptionCreateProductOriginResDTO,
  OptionCreateSizeGroupResDTO,
  OptionCreateSizeValueResDTO,
} from '../DTOs/option.res.dto';

@ApiTags('option')
@Controller('option')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Get('/product-category')
  @ApiOperation({ summary: '取得全部產品類別' })
  @ApiResponse({
    status: 200,
    description: '成功取得 product categories',
    type: OptionGetProductCategoriesResDTO,
  })
  async getProductCategories(): Promise<OptionGetProductCategoriesResDTO> {
    const result = await this.optionService.findProductCategories();

    return result;
  }

  @Get('/gender')
  @ApiOperation({ summary: '取得全部適用性別' })
  @ApiResponse({
    status: 200,
    description: '成功取得 product categories',
    type: OptionGetGendersResDTO,
  })
  async getGenders(): Promise<OptionGetGendersResDTO> {
    const result = await this.optionService.findGenders();

    return result;
  }

  @Post('/customer_level')
  @ApiOperation({
    summary: '創建 customer level',
    description: '請提供相對應資訊',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建 customer level',
    type: OptionCreateCustomerLevelResDTO,
  })
  async createCustomerLevel(
    @Body() body: OptionCreateCustomerLevelReqDTO,
  ): Promise<OptionCreateCustomerLevelResDTO> {
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
    type: OptionCreateGenderResDTO,
  })
  async createGender(
    @Body() dto: OptionCreateGenderReqDTO,
  ): Promise<OptionCreateGenderResDTO> {
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
    type: OptionCreateProductCategoryResDTO,
  })
  async createProductCategory(
    @Body() dto: OptionCreateProductCategoryReqDTO,
  ): Promise<OptionCreateProductCategoryResDTO> {
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
    type: OptionCreateProductOriginResDTO,
  })
  async createProductOrigin(
    @Body() dto: OptionCreateProductOriginReqDTO,
  ): Promise<OptionCreateProductOriginResDTO> {
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
    type: OptionCreateSizeGroupResDTO,
  })
  async createSizeGroup(
    @Body() dto: OptionCreateSizeGroupReqDTO,
  ): Promise<OptionCreateSizeGroupResDTO> {
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
    type: OptionCreateSizeValueResDTO,
  })
  async createSizeValue(
    @Body() dto: OptionCreateSizeValueReqDTO,
  ): Promise<OptionCreateSizeValueResDTO> {
    const results = this.optionService.createSizeValue(dto);

    return results;
  }
}
