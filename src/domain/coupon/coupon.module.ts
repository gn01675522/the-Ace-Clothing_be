import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Coupon, CouponSchema } from 'src/db/model/core/coupon/coupon.core';

import { CouponController } from './controllers/coupon.controller';
import { CouponService } from './services/coupon.service';
import { CouponRepo } from './repositories/coupon.repo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coupon.name, schema: CouponSchema }]),
  ],
  controllers: [CouponController],
  providers: [CouponRepo, CouponService],
  exports: [CouponService],
})
export class CouponModule {}
