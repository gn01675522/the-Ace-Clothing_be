import mongoose from 'mongoose';

export interface OptionCreateCustomerLevelArgCriteria {
  name: string;
  order: number;
}

export interface OptionCreateGenderArgCriteria {
  name: string;
}

export interface OptionCreateProductCategoryArgCriteria {
  name: string;
  parent: mongoose.Types.ObjectId | null;
}

export interface OptionCreateProductOriginArgCriteria {
  name: string;
}

export interface OptionCreateSizeGroupArgCriteria {
  name: string;
}

export interface OptionCreateSizeValueArgCriteria {
  group_id: mongoose.Types.ObjectId;
  value: string;
  order: number;
}
