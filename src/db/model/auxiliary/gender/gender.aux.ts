import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { GENDER_CLASSES } from './gender.aux.types';

@Schema({ timestamps: true, collection: 'gender' })
export class Gender {
  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    enum: Object.values(GENDER_CLASSES),
  })
  name: string;

  @Prop({ type: Boolean, default: false, required: true })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type GenderDocument = HydratedDocument<Gender>;

export const GenderSchema = SchemaFactory.createForClass(Gender);
