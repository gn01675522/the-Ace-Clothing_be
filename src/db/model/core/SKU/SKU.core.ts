import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Product } from '../product/product.core';
import { SizeValue } from '../../auxiliary/size_value/size_value.aux';

@Schema({ timestamps: true, collection: 'sku' })
export class SKU extends Document {
  @Prop({ required: true, unique: true, trim: true, index: true })
  sku_id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  })
  product_id: Product;

  @Prop({ default: 0 })
  current_price: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'SizeValue',
  })
  size: SizeValue;

  @Prop({ default: null, trim: true })
  variant?: string;

  @Prop({ required: true })
  is_active: boolean;

  @Prop({ default: false })
  recycled: boolean;
}

export type SKUDocument = HydratedDocument<SKU>;

export const SKUSchema = SchemaFactory.createForClass(SKU);
