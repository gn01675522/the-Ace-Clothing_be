import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SKU, SKUSchema } from 'src/db/model/core/SKU/SKU.core';

import { SKURepo } from './repositories/SKU.repo';
import { SKUService } from './services/SKU.service';
import { SKUController } from './controllers/SKU.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: SKU.name, schema: SKUSchema }])],
  controllers: [SKUController],
  providers: [SKURepo, SKUService],
  exports: [SKUService],
})
export class SKUModule {}
