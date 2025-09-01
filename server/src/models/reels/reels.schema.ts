import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type ReelsDocument = Reels & Document

@Schema({timestamps:true})
class Reels {

    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    author: Types.ObjectId;


    @Prop({ required: true })
    media: string;

    @Prop()
    caption: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: "User" }] })
    likes: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: "User" }] })
    comments: Types.ObjectId[];



}

export const ReelsSchema = SchemaFactory.createForClass(Reels)