import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class OptionCreateCustomerLevelResDTO {
  @ApiProperty()
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  recycled: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  __v: number;
}

export class OptionCreateGenderResDTO {
  @ApiProperty()
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  recycled: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  __v: number;
}

export class OptionCreateProductCategoryResDTO {
  @ApiProperty()
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  parent: mongoose.Types.ObjectId | null;

  @ApiProperty()
  recycled: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  __v: number;
}

export class OptionCreateProductOriginResDTO {
  @ApiProperty()
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  recycled: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  __v: number;
}

export class OptionCreateSizeGroupResDTO {
  @ApiProperty()
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  recycled: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  __v: number;
}

export class OptionCreateSizeValueResDTO {
  @ApiProperty()
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  group_id: mongoose.Types.ObjectId;

  @ApiProperty()
  value: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  recycled: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  __v: number;
}
