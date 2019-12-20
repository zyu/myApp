import { prop ,Ref, mongoose} from "@typegoose/typegoose";
import { IsString } from "class-validator";

 
export class CatSchema {
  @IsString()
  @prop({ required: true })
  name: string; 

  @prop()
  title: string

  @prop()
  content: string
}
