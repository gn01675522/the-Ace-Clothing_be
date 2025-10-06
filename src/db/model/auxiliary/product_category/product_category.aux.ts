import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PRODUCT_CATEGORY_CLASSES } from './product_category.aux.types';

@Schema({ timestamps: true, collection: 'product_category' })
export class ProductCategory {
  @Prop({
    type: String,
    unique: true,
    trim: true,
    index: true,
    enum: Object.values(PRODUCT_CATEGORY_CLASSES),
    required: true,
  })
  name: PRODUCT_CATEGORY_CLASSES;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    default: null,
    describe: '若為 null 則為主類別，反之為 parent id 底下的子類別',
    required: false,
  })
  parent: mongoose.Types.ObjectId | null;

  @Prop({ type: Boolean, default: false, required: false })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type ProductCategoryDocument = HydratedDocument<ProductCategory>;

export const ProductCategorySchema =
  SchemaFactory.createForClass(ProductCategory);
