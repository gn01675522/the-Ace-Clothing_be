import mongoose from 'mongoose';

export interface ProductBaseReturnCriteria {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  gender: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  recycled: boolean;
  features?: string[];
  description?: string;
  img_urls?: string[];
  __v: number;
}

export interface ProductReturnCriteria {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  gender: { _id: mongoose.Types.ObjectId; name: string };
  category: { _id: mongoose.Types.ObjectId; name: string };
  recycled: boolean;
  features?: string[];
  description?: string;
  img_urls?: string[];
  _id: mongoose.Types.ObjectId;
  __v: number;
}
