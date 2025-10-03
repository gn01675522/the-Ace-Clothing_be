import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { PRODUCT_ORIGIN_CLASSES } from './product_origin.aux.types';

@Schema({ timestamps: true, collection: 'product_origin' })
export class ProductOrigin extends Document {
  @Prop({ required: true, enum: PRODUCT_ORIGIN_CLASSES, unique: true })
  name: string;

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const ProductOriginSchema = SchemaFactory.createForClass(ProductOrigin);
