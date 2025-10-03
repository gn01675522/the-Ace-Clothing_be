export interface OptionCreateCustomerLevelArgCriteria {
  name: string;
  order: number;
}

export interface OptionCreateGenderArgCriteria {
  name: string;
}

export interface OptionCreateProductCategoryArgCriteria {
  name: string;
  parent: string | null;
}

export interface OptionCreateProductOriginArgCriteria {
  name: string;
}

export interface OptionCreateSizeGroupArgCriteria {
  name: string;
}

export interface OptionCreateSizeValueArgCriteria {
  group_id: string;
  value: string;
  order: number;
}
