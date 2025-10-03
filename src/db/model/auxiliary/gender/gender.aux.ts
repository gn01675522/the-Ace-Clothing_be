import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { GENDER_CLASSES } from './gender.aux.types';

@Schema({ timestamps: true, collection: 'gender' })
export class Gender extends Document {
  @Prop({
    required: true,
    unique: true,
    trim: true,
    index: true,
    enum: GENDER_CLASSES,
  })
  name: string;

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const GenderSchema = SchemaFactory.createForClass(Gender);
