import { Types } from "mongoose";

export enum PRODUCT_CATEGORY_CLASSES {
  top = "top",
  bottom = "bottom",
  hat = "hat",
  accessory = "accessory",
  shoe = "shoe",
  belt = "belt",
  bracelet = "bracelet",
  necklace = "necklace",
  covering = "covering",
  ring = "ring",
}

export interface IProductCategory {
  name: string;
  parent: string | null;
  createdAt: Date;
  updatedAt: Date;
  recycled: boolean;
  _id: Types.ObjectId;
  __v: number;
}
