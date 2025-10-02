import { Types } from 'mongoose';

export interface ProductReturnCriteria {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  gender: { _id: Types.ObjectId; name: string };
  category: { _id: Types.ObjectId; name: string };
  recycled: boolean;
  features?: string[];
  description?: string;
  img_urls?: string[];
  _id: Types.ObjectId;
  __v: number;
}
