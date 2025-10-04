import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../../config/db/db.module';

import { SeedService } from './seed.service';

import { Product, ProductSchema } from '../model/core/product/product.core';
import {
  ProductCategory,
  ProductCategorySchema,
} from '../model/auxiliary/product_category/product_category.aux';
import {
  ProductOrigin,
  ProductOriginSchema,
} from '../model/auxiliary/product_origin/product_origin.aux';
import {
  CustomerLevel,
  CustomerLevelSchema,
} from '../model/auxiliary/customer_level/customer_level.aux';
import { Gender, GenderSchema } from '../model/auxiliary/gender/gender.aux';
import {
  SizeGroup,
  SizeGroupSchema,
} from '../model/auxiliary/size_group/size_group.aux';
import {
  SizeValue,
  SizeValueSchema,
} from '../model/auxiliary/size_value/size_value.aux';
import { SKU, SKUSchema } from '../model/core/SKU/SKU.core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: CustomerLevel.name, schema: CustomerLevelSchema },
      { name: Gender.name, schema: GenderSchema },
      { name: ProductCategory.name, schema: ProductCategorySchema },
      { name: ProductOrigin.name, schema: ProductOriginSchema },
      { name: SizeGroup.name, schema: SizeGroupSchema },
      { name: SizeValue.name, schema: SizeValueSchema },
      { name: SKU.name, schema: SKUSchema },
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
