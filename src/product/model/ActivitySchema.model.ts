import { prop } from "@typegoose/typegoose"; 

export class ActivitySchema {
    @prop()
    prmNo: string // '促销编号' 
    
    @prop()
    name: string // '活动名称' 
    
    @prop({default:Date.now})
    startDay:Date //'开始的日期' 
    
    @prop()
    endDay: Date//'结束的日期' 
    
    @prop()
    startTime : Date// '开始的时间' 
    
    @prop()
    endTime : Date// '结束的时间'  
    
    @prop()
    createTime : Date // '创建时间' 
    
    @prop()
    createPerson : string // '创建人' 
    
    @prop()
    prmType  : Number // '促销类型（1满减，2满折，3 x件折 4满赠 5满包邮 6每满减 7每满赠）' 
    
    @prop()
    prmScope : Number //'活动范围（1指定商品，2指定店铺，3全站）' 
    
    @prop()
    parm1Val : Number //'活动参数1的值' 
    
    @prop()
    parm2Val : string // '活动参数2的值(满赠存增加ids，满包邮存地区)' 
    
    @prop()
    active  : Number // '0已删除 1正常' 
    
    @prop()
    activityType : Number //'促销活动类型，1：代表平台 2：店铺' 
    
    @prop()
    activityDetail : string // '促销活动详情 例如：满100减10' 
    
    @prop()
    timeType : Number // '时间类型：1全天，2时段' 
    
    @prop()
    bids : [string] // '商品ids或类目Ids'  
}
