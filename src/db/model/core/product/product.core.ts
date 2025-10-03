import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '../../auxiliary/gender/gender.aux';
import { ProductCategory } from '../../auxiliary/product_category/product_category.aux';

@Schema({ timestamps: true, collection: 'product' })
export class Product extends Document {
  @Prop({ type: String, required: true, unique: true, trim: true, index: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Gender', required: true })
  gender: Gender;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
  })
  category: ProductCategory;

  @Prop({ default: [String] })
  features: string[];

  @Prop({ trim: true, default: '' })
  description: string;

  @Prop({ default: [String] })
  img_urls: string[];

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export type ProductDocument = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);
