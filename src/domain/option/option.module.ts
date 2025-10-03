import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  CustomerLevel,
  CustomerLevelSchema,
} from 'src/db/model/auxiliary/customer_level/customer_level.aux';
import { Gender, GenderSchema } from 'src/db/model/auxiliary/gender/gender.aux';
import {
  ProductCategory,
  ProductCategorySchema,
} from 'src/db/model/auxiliary/product_category/product_category.aux';
import {
  ProductOrigin,
  ProductOriginSchema,
} from 'src/db/model/auxiliary/product_origin/product_origin.aux';
import {
  SizeGroup,
  SizeGroupSchema,
} from 'src/db/model/auxiliary/size_group/size_group.aux';
import {
  SizeValue,
  SizeValueSchema,
} from 'src/db/model/auxiliary/size_value/size_value.aux';

import { OptionRepo } from './repositories/option.repo';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerLevel.name, schema: CustomerLevelSchema },
      { name: Gender.name, schema: GenderSchema },
      { name: ProductCategory.name, schema: ProductCategorySchema },
      { name: ProductOrigin.name, schema: ProductOriginSchema },
      { name: SizeGroup.name, schema: SizeGroupSchema },
      { name: SizeValue.name, schema: SizeValueSchema },
    ]),
  ],
  controllers: [OptionController],
  providers: [OptionRepo, OptionService],
  exports: [OptionService],
})
export class OptionModule {}
