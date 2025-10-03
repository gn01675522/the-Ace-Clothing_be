import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SIZE_GROUP_CLASSES } from './size_group.aux.types';

@Schema({ timestamps: true, collection: 'size_group' })
export class SizeGroup {
  @Prop({
    type: String,
    required: true,
    unique: true,
    enum: Object.values(SIZE_GROUP_CLASSES),
  })
  name: string;

  @Prop({ type: Boolean, default: false, required: true })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type SizeGroupDocument = HydratedDocument<SizeGroup>;

export const SizeGroupSchema = SchemaFactory.createForClass(SizeGroup);
