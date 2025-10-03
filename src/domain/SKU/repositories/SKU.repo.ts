import { Model, ClientSession } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { SKU } from '../../../db/model/core/SKU/SKU.core';

@Injectable()
export class SKURepo {
  constructor(
    @InjectModel(SKU.name)
    private readonly skuModel: Model<SKU>,
  ) {}

  async create(criteria: any[], session?: ClientSession) {
    const results = await this.skuModel.create(criteria, { session });

    return results;
  }
}
