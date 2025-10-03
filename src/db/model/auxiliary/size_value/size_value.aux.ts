import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'size_value' })
export class SizeValue extends Document {
  @Prop({ required: true, ref: 'SizeGroup' })
  group_id: Types.ObjectId;

  @Prop({ required: true, unique: true, trim: true, index: true })
  value: string;

  @Prop({
    unique: true,
    required: true,
    describe: '排序用',
  })
  order: number;

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const SizeValueSchema = SchemaFactory.createForClass(SizeValue);
