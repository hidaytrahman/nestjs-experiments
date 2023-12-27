import { Module } from "@nestjs/common";
import { GithubController } from "./github.controller";
import { GithubServices } from "./github.services";

@Module({
    controllers:[GithubController],
    providers: [GithubServices]
})
export class GithubModule {
    constructor() {
        console.log("Github Module")
    }
}