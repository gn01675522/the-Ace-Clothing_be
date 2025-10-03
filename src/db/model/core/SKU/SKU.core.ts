import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'sku' })
export class SKU extends Document {
  @Prop({ required: true, unique: true, trim: true, index: true })
  sku_id: string;

  @Prop({ required: true, ref: 'Product' })
  product_id: mongoose.Types.ObjectId;

  @Prop({ default: 0 })
  current_price: number;

  @Prop({ default: null, ref: 'SizeValue' })
  size: mongoose.Types.ObjectId;

  @Prop({ default: null, trim: true })
  variant?: string;

  @Prop({ required: true })
  is_active: boolean;

  @Prop({ default: false })
  recycled: boolean;
}

export const SKUSchema = SchemaFactory.createForClass(SKU);
