import mongoose from 'mongoose';

export interface CouponFindArgCriteria {
  name?: string;
  code?: string;
  type?: mongoose.Types.ObjectId;
  scope?: mongoose.Types.ObjectId;
  start_date?: Date;
  end_date?: Date;
  target_ids?: mongoose.Types.ObjectId[];
  is_enable?: boolean;
  recycled?: boolean;
  skip: number;
  limit: number;
}

export interface CouponCreateArgCriteria {
  name: string;
  code: string;
  type: mongoose.Types.ObjectId;
  scope: mongoose.Types.ObjectId;
  start_date: Date;
  end_date: Date;
  value?: number;
  target_ids?: mongoose.Types.ObjectId[];
  max_usage?: number;
  per_user_limit?: number;
  is_enable?: boolean;
}
