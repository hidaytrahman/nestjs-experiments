import { Module } from "@nestjs/common";
import { GithubController } from "./github.controller";
import { GithubServices } from "./github.services";
import { HttpModule } from "@nestjs/axios"

@Module({
    controllers: [GithubController],
    providers: [GithubServices],
    imports: [HttpModule]
})
export class GithubModule {
    constructor() {
        console.log("Github Module")
    }
}