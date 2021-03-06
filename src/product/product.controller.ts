import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose'; 
import { ModelType } from '@typegoose/typegoose/lib/types';
import { IsNotEmpty } from 'class-validator';
import { ProductSchema } from './model/ProductSchema.model';
import { ProductService } from './product.service';

class CreateCatDto {

  name: string
  @IsNotEmpty({ message: '请填写标题' })
  title: string

  content: string
}

@Controller('product')
export class ProductController {

  constructor(
    @InjectModel(ProductSchema) private readonly model: ModelType<ProductSchema>,
    private readonly productService: ProductService
  ) { }

    @Get('/list')
   async list()  { 
      return await this.model.find();
    }
    @Get('/create')
    async create()  {  

      for(var i = 0; i< 100 ; i++){
        const p = this.productService.save();
        this.model.create(p)
      }
      
    }

    @Get('/es')
    async search(){
      return await this.productService.findbyes();
    }
    @Get('/ct')
    async ct(){
      return await this.productService.createModel();
    }
}
