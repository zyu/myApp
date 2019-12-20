
 
import { prop, Ref, arrayProp  } from "@typegoose/typegoose";
import { IsString } from "class-validator"; 

export class SpecSchema{
    @prop()
    specName : String // '规格名称'  
    @prop()
    specValue : String // '属性值(白色 黑色 黄色等)'  
    @prop()
    picture : String // '展示图片' 
    @prop()
    sortNo  : Number //'排序'  
}

export class PackageSchema{
    @prop()
    PackageName : String // '包装名称'  
 
    @prop()
    PackageNum  : Number //'包装规格'  
}


export class SpecValueSchema{
    
    @prop()
    skuCode : String// '商家编码（sku）'
    
    @prop()
    barCode : String// '国际条形码'
    @prop()
    skuName: String // sku名称

    @prop()
    specNames: String // 属性名称逗号隔开
    
    
    @prop()
    PackageName : String // '包装名称'  
 
    @prop()
    PackageNum  : Number //'包装规格'  

    
    
    @prop()
    stock  : Number// '库存'
    
    @prop()
    saleNum  : Number// '销售量'
    
    @prop()
    sortNo  : Number// '排序'
    
    @prop()
    buyScore  : Number// '购买积分(送给用户)'
    
    @prop()
    marketPrice : Number// '市场价(分)'
    
    @prop()
    vipPrice : Number// 'VIP价格(分)' 
    
    @prop()
    price  : Number// '销售价（单位：分）'
    
    @prop()
    purchasePrice  : Number// '商品采购成本价（单位：分）'
    
    @prop()
    defaultSelect  : Number// '是否默认(1：是  0：否)'
    
    @prop()
    active  : Number// '是否启用(1：启用  0：不启用)'
}
export class SkuSchema{
    @arrayProp({ itemsRef: SpecSchema })
    Specs?: Ref<SpecSchema>[]

    @arrayProp({ itemsRef: SpecValueSchema })
    SpecValues?:Ref<SpecValueSchema>[]

    @arrayProp({itemsRef:PackageSchema})
    Packages:Ref<PackageSchema>[]

}

export class ProductSchema {
    
    @prop()
    title: String // '商品名称' 
    
    @prop()
    content : String // '商品内容' 
    
    @prop()
    brand : String //'品牌Id' 
    
    @prop()
    stockNum: Number // '库存 数据缓存 统计规格库存' 
    
    @prop()
    orgId : String // '店铺Id 写死模板的orgId ABL 用于其他店铺复制' 
    
    @prop()
    state : Number //  '0:待审核  1:已上架  2:已下架  3:违规封停  4:删除' 
    
    @prop()
    expressTemplateId : String // '物流模板Id' 
    
    @prop()
    goodsTemplateId : String // '商品库模板Id' 
    
    @prop()
    shipping : Number //  '是否包邮(1:是 0:否)' 
    
    @prop()
    salesNum : Number //  '销量' 
    
    @prop()
    reviewsNum : Number //  '评价人数' 
    
    @prop()
    praiseNum : Number //  '好评次数' 
    
    @prop()
    praiseRate : Number //  '好评率(存储为整数)' 
    
    @prop()
    spuCode : String // '商品编码（商家编码 规则:商品分类+5位顺序数 010101+00001 ）' 
    
    @prop()
    newProduct : Boolean //  '是否是新品' 
    
    @prop()
    thumbnail : String // '缩略图' 
    
    @prop()
    video : String // '主图视频' 
    
    @prop()
    upTime: Date // '上架时间' 
    
    @prop()
    updateTime: Date // '最新编辑时间' 
    
    @prop()
    presale : Number //'是否预售（0：否，1：是）' 
    
    @prop()
    downTime: Date // '下架时间'  
    
    @prop()
    selfRate : Number //  '平台对商品的抽成比例' 
    
    @prop()
    shelfLife : Number //  '保质期' 
    
    @prop()
    productDate: Date // '生产日期' 
    
    @prop()
    categoryId: String // '商品分类Id' 
    
    @prop()
    customCategoryId : String // '店内的自定义分类' 
    
    @prop()
    taxationRate : Number //  '税费比例' 
    
    @prop()
    goodsType : Number //  '商品种类  1：普通商品 2：全球购商品 3：虚拟商品' 
    
    @prop()
    virtualType: Number //  '虚拟商品类型 1：礼品卡 '  
    
    @prop()
    wareHouseId : String // '仓库id'  

    @prop({ref:SkuSchema})
    Sku:Ref<SkuSchema>


    
}


