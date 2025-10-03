import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './config/db/db.module';
import { ProductModule } from './domain/product/product.module';
import { OptionModule } from './domain/option/option.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ProductModule,
    OptionModule,
  ],
})
export class AppModule {}
