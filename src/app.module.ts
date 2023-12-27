import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './apps/github/github.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [GithubModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
