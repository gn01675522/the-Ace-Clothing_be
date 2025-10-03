import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { CUSTOMER_LEVEL_CLASSES } from './customer_level.aux.types';

@Schema({ timestamps: true, collection: 'customer_level' })
export class CustomerLevel extends Document {
  @Prop({
    required: true,
    unique: true,
    trim: true,
    index: true,
    enum: CUSTOMER_LEVEL_CLASSES,
  })
  name: string;

  @Prop({
    unique: true,
    required: true,
    describe: '排序用',
  })
  order: number;

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const CustomerLevelSchema = SchemaFactory.createForClass(CustomerLevel);
