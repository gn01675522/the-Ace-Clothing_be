import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../../config/db/db.module';

import { ProductModule } from '../../domain/product/product.module';
import { SKUModule } from '../../domain/SKU/SKU.module';
import { OptionModule } from '../../domain/option/option.module';
import { SeedService } from './seed.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ProductModule,
    SKUModule,
    OptionModule,
  ],
  providers: [SeedService],
})
export class SeedModule {}
