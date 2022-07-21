import { Module } from '@nestjs/common';

import {ShopModule} from "../shop/shop.module";
import { HealthController } from './health.controller';

@Module({
  imports: [ShopModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
