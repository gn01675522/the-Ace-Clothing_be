import mongoose from 'mongoose';

export interface CouponCreateReturnCriteria {
  _id: mongoose.Types.ObjectId;
  name: string;
  code: string;
  type: mongoose.Types.ObjectId;
  scope: mongoose.Types.ObjectId;
  start_date: Date;
  end_date: Date;
  value: number;
  target_ids: mongoose.Types.ObjectId[];
  max_usage: number;
  per_customer_limit: number;
  is_enable: boolean;
  recycled: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
