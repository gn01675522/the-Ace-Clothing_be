import { Injectable } from '@nestjs/common';

import { SKURepo } from '../repositories/SKU.repo';

@Injectable()
export class SKUService {
  constructor(private readonly skuRepo: SKURepo) {}

  async create(dto: any[]) {
    const results = await this.skuRepo.create(dto);

    return results;
  }
}
