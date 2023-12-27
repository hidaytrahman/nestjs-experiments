import { Controller, Get, Param } from "@nestjs/common";
import { GithubServices } from "./github.services";

@Controller("github")
export class GithubController {

    constructor(private githubServices: GithubServices) {

    }

    @Get("")
    getDetails() {
        return {
            message: "This is the customised way to get the response from Github"
        }
    }

    @Get(":username")
    getUserDetails(@Param() params): any {
        return this.githubServices.getUserDetails(params.username);
    }
}