import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SIZE_GROUP_CLASSES } from './size_group.aux.types';

@Schema({ timestamps: true, collection: 'size_group' })
export class SizeGroup extends Document {
  @Prop({ required: true, unique: true, enum: SIZE_GROUP_CLASSES })
  name: string;

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const SizeGroupSchema = SchemaFactory.createForClass(SizeGroup);
