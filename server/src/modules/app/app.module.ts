import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';


@Module({
  imports: [
    ConfigModule.forRoot({
      
      isGlobal: true,
      validationSchema:Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    
    MongooseModule.forRoot(process.env.DATABASE_URL!)],
  
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
