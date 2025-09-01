import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";


export type PostDocument = Post & Document

@Schema({ timestamps: true })
export class Post {

    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    author: Types.ObjectId;

    @Prop({ enum: ["image", "video"], required: true })
    mediaType: string;

    @Prop({ required: true })
    media: string;

    @Prop()
    caption: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: "User" }] })
    likes: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: "User" }] })
    comments: Types.ObjectId[];

}

export const PostSchema = SchemaFactory.createForClass(Post);