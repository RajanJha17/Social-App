import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;


@Schema({timestamps:true})
export class User {

    @Prop({required:true})
    name:string;

    @Prop({required:true , unique:true})
    userName:string;


    @Prop({required:true , unique : true})
    email:string;
    
    @Prop({required:true})
    password:string;

    @Prop()
    profileImage:string;

    @Prop({ref:"User"})
    followers:[]

    @Prop({ref:"User"})
    following:[]

    


}

export const UserSchema = SchemaFactory.createForClass(User);