import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'product' })
export class Product {
  @Prop({ type: String, required: true, unique: true, trim: true, index: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Gender', required: true })
  gender: mongoose.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
  })
  category: mongoose.Types.ObjectId;

  @Prop({ default: [String] })
  features: string[];

  @Prop({ trim: true, default: '' })
  description: string;

  @Prop({ default: [String] })
  img_urls: string[];

  @Prop({ default: false, required: true })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type ProductDocument = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);
