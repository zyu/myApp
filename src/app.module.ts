import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { TypegooseModule } from "nestjs-typegoose";

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://@192.168.0.33:27017/shop", {
      useNewUrlParser: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
