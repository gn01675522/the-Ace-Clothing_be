import mongoose from 'mongoose';

export interface OptionCustomerLevelReturnCriteria {
  _id: mongoose.Types.ObjectId;
  name: string;
  order: number;
  recycled: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface OptionGenderReturnCriteria {
  _id: mongoose.Types.ObjectId;
  name: string;
  recycled: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface OptionProductCategoryReturnCriteria {
  _id: mongoose.Types.ObjectId;
  name: string;
  parent: mongoose.Types.ObjectId | null;
  recycled: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface OptionProductOriginReturnCriteria {
  _id: mongoose.Types.ObjectId;
  name: string;
  recycled: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface OptionSizeGroupReturnCriteria {
  _id: mongoose.Types.ObjectId;
  name: string;
  recycled: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface OptionSizeValueReturnCriteria {
  _id: mongoose.Types.ObjectId;
  group_id: mongoose.Types.ObjectId;
  value: string;
  order: number;
  recycled: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
