import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'size_value' })
export class SizeValue {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'SizeGroup',
  })
  group_id: mongoose.Types.ObjectId;

  @Prop({ type: String, required: true, unique: true, trim: true, index: true })
  value: string;

  @Prop({
    type: Number,
    unique: true,
    required: true,
    describe: '排序用',
  })
  order: number;

  @Prop({ type: Boolean, default: false, required: true })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type SizeValueDocument = HydratedDocument<SizeValue>;

export const SizeValueSchema = SchemaFactory.createForClass(SizeValue);
