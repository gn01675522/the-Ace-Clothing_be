import { Controller, Body, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CouponService } from '../services/coupon.service';

import { CouponCreateReqDTO } from '../DTOs/coupon.req.dto';
import { CouponCreateResDTO } from '../DTOs/coupon.res.dto';
import { CouponGetQueryDTO } from '../DTOs/coupon.query.dto';

@ApiTags('coupon')
@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Get()
  @ApiOperation({ summary: '搜尋全部優惠券' })
  @ApiResponse({
    status: 200,
    description: '成功搜尋優惠券',
  })
  async get(@Query() query: CouponGetQueryDTO) {
    const result = await this.couponService.findAllCoupon(query);

    return result;
  }

  @Post()
  @ApiOperation({
    summary: '創建優惠券',
    description: '請輸入必要屬性',
  })
  @ApiResponse({
    status: 200,
    description: '成功創建優惠券',
    type: CouponCreateResDTO,
  })
  async create(@Body() dto: CouponCreateReqDTO): Promise<CouponCreateResDTO> {
    const result = await this.couponService.createCoupon(dto);

    return result;
  }
}
