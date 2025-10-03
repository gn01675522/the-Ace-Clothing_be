import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PRODUCT_CATEGORY_CLASSES } from './product_category.aux.types';

@Schema({ timestamps: true, collection: 'product_category' })
export class ProductCategory extends Document {
  @Prop({
    required: true,
    unique: true,
    trim: true,
    index: true,
    enum: PRODUCT_CATEGORY_CLASSES,
  })
  name: string;

  @Prop({
    ref: 'ProductCategory',
    default: null,
    describe: '若為 null 則為主類別，反之為 parent id 底下的子類別',
  })
  parent: mongoose.Types.ObjectId;

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const ProductCategorySchema =
  SchemaFactory.createForClass(ProductCategory);
