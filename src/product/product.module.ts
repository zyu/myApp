import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service'; 

import { TypegooseModule } from 'nestjs-typegoose';  
import { CatSchema } from './model/CatSchema.model';
import { ProductSchema } from './model/ProductSchema.model';
import { ElasticsearchService, ElasticsearchModule } from '@nestjs/elasticsearch';
@Module({
  imports: [TypegooseModule.forFeature([
    CatSchema,
    ProductSchema
  ]),
  ElasticsearchModule.register({
    node: 'http://192.168.0.201:32001' 
})],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
