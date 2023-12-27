import { Injectable } from "@nestjs/common";

@Injectable()
export class GithubServices {

    constructor() {

    }

    getUserDetails(username: string) {
        return {
            message: `User details has been fectched for ${username}`
        }
    }
}