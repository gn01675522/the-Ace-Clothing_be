import mongoose from 'mongoose';

export interface ProductFindQueryArgCriteria {
  name?: string;
  category?: mongoose.Types.ObjectId;
  gender?: mongoose.Types.ObjectId;
  skip: number;
  limit: number;
  recycled: boolean;
}

export interface ProductCreateArgCriteria {
  name: string;
  gender: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  description: string;
  features: string[];
  img_urls: string[];
}

export interface ProductUpdateArgCriteria {
  _id: mongoose.Types.ObjectId;
  data: {
    name?: string;
    category?: mongoose.Types.ObjectId;
    gender?: mongoose.Types.ObjectId;
    features?: string[];
    description?: string;
    img_urls?: string[];
  };
}
