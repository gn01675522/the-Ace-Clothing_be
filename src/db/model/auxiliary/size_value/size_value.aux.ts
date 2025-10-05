import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'size_value' })
export class SizeValue {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SizeGroup',
    required: true,
  })
  group_id: mongoose.Types.ObjectId;

  @Prop({ type: String, unique: true, trim: true, index: true, required: true })
  value: string;

  @Prop({
    type: Number,
    unique: true,
    describe: '排序用',
    required: true,
  })
  order: number;

  @Prop({ type: Boolean, default: false, required: false })
  recycled: boolean;

  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type SizeValueDocument = HydratedDocument<SizeValue>;

export const SizeValueSchema = SchemaFactory.createForClass(SizeValue);
