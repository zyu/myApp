import { Injectable } from '@nestjs/common';
import { Random } from 'mockjs';
import { SkuSchema, SpecValueSchema, PackageSchema, SpecSchema, ProductSchema } from './model/ProductSchema.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ApiResponse } from '@elastic/elasticsearch';
 

@Injectable()
export class ProductService {
 


    constructor( 
        private readonly elasticsearchService: ElasticsearchService,
        @InjectModel(ProductSchema) private readonly model: ModelType<ProductSchema>, 
      ) { }

    async findbyes():Promise<ApiResponse<any, any>>{
        const a = await this.elasticsearchService.search({
            index:'library'
        })

        
        return a;
    }

    async createModel(){
        await this.elasticsearchService.indices.create({
            index: 'tweets',
            body: {
              mappings: {
                properties: {
                  id: { type: 'integer' },
                  text: { type: 'text' },
                  user: { type: 'keyword' },
                  time: { type: 'date' }
                }
              }
            }
          }, { ignore: [400] })

          const dataset = [{
            id: 1,
            text: 'If I fall, don\'t bring me back.',
            user: 'jon',
            date: new Date()
          }, {
            id: 2,
            text: 'Witer is coming',
            user: 'ned',
            date: new Date()
          }, {
            id: 3,
            text: 'A Lannister always pays his debts.',
            user: 'tyrion',
            date: new Date()
          }, {
            id: 4,
            text: 'I am the blood of the dragon.',
            user: 'daenerys',
            date: new Date()
          }, {
            id: 5, // change this value to a string to see the bulk response with errors
            text: 'A girl is Arya Stark of Winterfell. And I\'m going home.',
            user: 'arya',
            date: new Date()
          }]

          const body = dataset.map(doc => [{ index: { _index: 'tweets' } }, doc])

          const { body: bulkResponse } = await this.elasticsearchService.bulk({ refresh: true, body })

            console.log(body)

    }

    save() : ProductSchema {
    //Random.cname()

    const sku =  new SkuSchema()
    const specValue = new  SpecValueSchema() 
 

    let packages = []

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


    specValue.picture = 'http://lorempixel.com/400/200/nature/'
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

    console.log(productSchema)

    return productSchema
    
    }

}
