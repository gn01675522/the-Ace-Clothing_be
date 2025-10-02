import { Types } from 'mongoose';

export interface ProductFindQueryArgCriteria {
  name?: string;
  category?: Types.ObjectId;
  gender?: Types.ObjectId;
  skip: number;
  limit: number;
  recycled: boolean;
}

export interface ProductCreateArgCriteria {
  name: string;
  gender: string;
  category: string;
  description: string;
  features: string[];
  img_urls: string[];
}

export interface ProductUpdateArgCriteria {
  id: string;
  data: {
    name?: string;
    category?: string;
    gender?: string;
    features?: string[];
    description?: string;
    img_urls?: string[];
    recycled?: boolean;
  };
}
