import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { PRODUCT_ORIGIN_CLASSES } from './product_origin.aux.types';

@Schema({ timestamps: true, collection: 'product_origin' })
export class ProductOrigin {
  @Prop({
    type: String,
    required: true,
    enum: Object.values(PRODUCT_ORIGIN_CLASSES),
    unique: true,
  })
  name: string;

  @Prop({ type: Boolean, default: false, required: true })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type ProductOriginDocument = HydratedDocument<ProductOrigin>;

export const ProductOriginSchema = SchemaFactory.createForClass(ProductOrigin);
