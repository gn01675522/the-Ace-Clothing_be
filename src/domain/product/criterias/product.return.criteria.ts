import mongoose from 'mongoose';

export interface ProductBaseReturnCriteria {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  gender: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  recycled?: boolean;
  features?: string[];
  description?: string;
  img_urls?: string[];
  __v: number;
}

export type ProductReturnCriteria = Omit<
  ProductBaseReturnCriteria,
  'category' | 'gender'
> & {
  gender: { _id: mongoose.Types.ObjectId; name: string };
  category: { _id: mongoose.Types.ObjectId; name: string };
};
