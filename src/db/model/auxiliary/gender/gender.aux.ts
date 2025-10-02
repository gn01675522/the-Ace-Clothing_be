import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'gender' })
export class Gender extends Document {
  @Prop({ required: true, unique: true, trim: true, index: true })
  name: string;

  @Prop({ default: false, required: true })
  recycled: boolean;
}

export const GenderSchema = SchemaFactory.createForClass(Gender);
