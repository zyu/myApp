import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service'; 

import { TypegooseModule } from 'nestjs-typegoose';  
import { CatSchema } from './model/CatSchema.model';
import { ProductSchema } from './model/ProductSchema.model';
@Module({
  imports: [TypegooseModule.forFeature([
    CatSchema,
    ProductSchema
  ])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
