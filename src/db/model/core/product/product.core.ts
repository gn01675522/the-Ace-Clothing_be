import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'product' })
export class Product {
  @Prop({ type: String, unique: true, trim: true, index: true, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Gender', required: true })
  gender: mongoose.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
  })
  category: mongoose.Types.ObjectId;

  @Prop({ type: [String], default: [], required: false })
  features: string[];

  @Prop({ type: String, trim: true, default: '', required: false })
  description: string;

  @Prop({ type: [String], default: [], required: false })
  img_urls: string[];

  @Prop({ type: Boolean, default: false, required: false })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type ProductDocument = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);
