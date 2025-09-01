import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type UserDocument = User & Document;


@Schema({ timestamps: true })
export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    userName: string;


    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    profileImage: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: "User" }] })
    followers: Types.ObjectId[];

    // Following = people this user follows
    @Prop({ type: [{ type: Types.ObjectId, ref: "User" }] })
    following: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: "Post" }] })
    posts: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: "Post" }] })
    saved: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: "Reels" }] })
    reels: Types.ObjectId[];




}

export const UserSchema = SchemaFactory.createForClass(User);