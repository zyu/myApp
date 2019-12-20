import { Injectable } from '@nestjs/common';
import { Random } from 'mockjs';
import { SkuSchema, SpecValueSchema, PackageSchema, SpecSchema, ProductSchema } from './model/ProductSchema.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
 

@Injectable()
export class ProductService {
 


    constructor(
        @InjectModel(ProductSchema) private readonly model: ModelType<ProductSchema>, 
      ) { }

    save() : ProductSchema {
    //Random.cname()

    const sku =  new SkuSchema()
    const specValue = new  SpecValueSchema() 
 

    let packages : PackageSchema[]

    const spec = new SpecSchema()

    const productSchema  = new ProductSchema()

    const  specs = []

    const specNames = ['颜色','容量','口味']

    spec.specName = '颜色'
    spec.specValue = '白色'

    specs.push(spec)

    packages.push({
        PackageName:'1x1',
        PackageNum:1
    })

    specValue.barCode = Random.integer(100000000,9999999999).toString()
    specValue.marketPrice = Random.float(5,30)
    specValue.price = Random.float(5,30)
    specValue.purchasePrice = Random.float(5,30)
    specValue.PackageNum = 1
    specValue.PackageName = '1x1'
    specValue.skuName = '默认规格'
    specValue.specNames = '1X1'
    specValue.stock = Random.integer(100,1000)
    specValue.vipPrice = Random.float(5,30)

    sku.Packages = packages
    sku.SpecValues = Array.of(specValue)
    
    productSchema.title = Random.name() 
    productSchema.Sku = sku
    productSchema.brand = Random.word()
    productSchema.newProduct = Random.boolean() 

    return productSchema
    
    }

}
