import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { CUSTOMER_LEVEL_CLASSES } from './customer_level.aux.types';

@Schema({ timestamps: true, collection: 'customer_level' })
export class CustomerLevel {
  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    enum: Object.values(CUSTOMER_LEVEL_CLASSES),
  })
  name: string;

  @Prop({
    type: Number,
    unique: true,
    required: true,
    describe: '排序用',
  })
  order: number;

  @Prop({ type: Boolean, default: false, required: true })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type CustomerLevelDocument = HydratedDocument<CustomerLevel>;

export const CustomerLevelSchema = SchemaFactory.createForClass(CustomerLevel);
