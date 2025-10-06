import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { SALE_TYPE_CLASSES } from './sale_type.aux.types';

@Schema({ timestamps: true, collection: 'sale_type' })
export class SaleType {
  @Prop({
    type: String,
    enum: Object.values(SALE_TYPE_CLASSES),
    unique: true,
    required: true,
  })
  name: SALE_TYPE_CLASSES;

  @Prop({ type: Boolean, default: false, required: false })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type SaleTypeDocument = HydratedDocument<SaleType>;

export const SaleTypeSchema = SchemaFactory.createForClass(SaleType);
