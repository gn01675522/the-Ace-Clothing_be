import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'sku' })
export class SKU {
  @Prop({ type: String, unique: true, trim: true, index: true, required: true })
  sku_id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  product_id: mongoose.Types.ObjectId;

  @Prop({ type: Number, default: 0, required: false })
  current_price: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'SizeValue',
    required: false,
  })
  size: mongoose.Types.ObjectId | null;

  @Prop({ type: String, default: null, trim: true, required: false })
  variant: string | null;

  @Prop({ type: Boolean, default: false, required: false })
  is_active: boolean;

  @Prop({ type: Boolean, default: false, required: false })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type SKUDocument = HydratedDocument<SKU>;

export const SKUSchema = SchemaFactory.createForClass(SKU);
