import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { COUPON_TYPE_CLASSES, COUPON_SCOPE_CLASSES } from './coupon.core.types';

@Schema({ timestamps: true, collection: 'coupon' })
export class Coupon {
  @Prop({ type: String, unique: true, trim: true, index: true, required: true })
  name: string;

  @Prop({ type: String, unique: true, trim: true, index: true, required: true })
  code: string;

  @Prop({
    type: String,
    trim: true,
    enum: Object.values(COUPON_TYPE_CLASSES),
    describe: '用來判斷優惠碼是以趴數來折扣，還是固定金額',
    required: true,
  })
  type: string;

  @Prop({
    type: Number,
    default: 0,
    required: false,
  })
  value: number;

  @Prop({
    type: String,
    enum: Object.values(COUPON_SCOPE_CLASSES),
    describe: '用來標注是全站優惠、類別優惠還是單一產品、SKU 優惠',
    required: true,
  })
  scope: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    describe:
      '若 scope 非全站優惠，則此會用來指向 product_category 或是單一產品、SKU 的 id',
    required: false,
  })
  target_ids: [mongoose.Types.ObjectId];

  @Prop({
    type: Date,
    required: true,
  })
  start_date: Date;

  @Prop({ type: Date, required: true })
  end_date: Date;

  @Prop({
    type: Number,
    default: 0,
    describe: '主要用來做限量優惠用 (全站)',
    required: false,
  })
  max_usage: number;

  @Prop({ type: Number, default: 0, required: false })
  per_user_limit: number;

  @Prop({ type: Boolean, default: false, required: false })
  is_enable: boolean;

  @Prop({ type: Boolean, default: false, required: false })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type CouponDocument = HydratedDocument<Coupon>;

export const CouponSchema = SchemaFactory.createForClass(Coupon);
