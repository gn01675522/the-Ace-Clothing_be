import type { Types } from "mongoose";

export enum COUPON_TYPE_CLASSES {
  PERCENTAGE = "PERCENTAGE",
  FIXED = "FIXED",
}

export enum COUPON_SCOPE_CLASSES {
  GLOBAL = "GLOBAL",
  CATEGORY = "CATEGORY",
  PRODUCT = "PRODUCT",
}

// export interface ICoupon {
//   name: string;
//   code: string;
//   type: COUPON_TYPE_CLASSES;
//   value: number;
//   scope: COUPON_SCOPE_CLASSES;
//   target_ids: Types.ObjectId[];
//   start_date: Date;
//   end_date: Date;
//   max_usage: number | null;
//   per_user_limit: number;
//   is_enable: boolean;
//   recycled: boolean;
//   createdAt: Date;
//   updatedAt: Date;
//   _id: Types.ObjectId;
//   __v: number;
// }
