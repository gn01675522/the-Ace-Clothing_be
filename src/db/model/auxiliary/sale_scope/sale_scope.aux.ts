import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { SALE_SCOPE_CLASSES } from './sale_scope.aux.types';

@Schema({ timestamps: true, collection: 'sale_scope' })
export class SaleScope {
  @Prop({
    type: String,
    enum: Object.values(SALE_SCOPE_CLASSES),
    unique: true,
    required: true,
  })
  name: SALE_SCOPE_CLASSES;

  @Prop({ type: Boolean, default: false, required: false })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type SaleScopeDocument = HydratedDocument<SaleScope>;

export const SaleScopeSchema = SchemaFactory.createForClass(SaleScope);
