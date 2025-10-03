import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SKUService } from '../services/SKU.service';

@ApiTags('sku')
@Controller('sku')
export class SKUController {
  constructor(private readonly skuService: SKUService) {}

  @Get()
  async get() {}

  @Post('/create')
  async create(dto: any[]) {
    const results = await this.skuService.create(dto);

    return results;
  }
}
