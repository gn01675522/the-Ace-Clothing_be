import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'product' })
export class Product extends Document {
  @Prop({ required: true, unique: true, trim: true, index: true })
  name: string;

  @Prop({ ref: 'Gender', required: true })
  gender: mongoose.Types.ObjectId;

  @Prop({ ref: 'ProductCategory', required: true })
  category: mongoose.Types.ObjectId;

  @Prop({ default: [] })
  features: string[];

  @Prop({ trim: true, default: '' })
  description: string;

  @Prop({ default: [] })
  img_urls: string[];

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
