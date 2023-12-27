import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class GithubServices {

    constructor(private readonly httpService: HttpService) {

    }

    getUser(username: string) {
        return {
            message: `User details has been fectched for ${username}`
        }
    }

    async getUserDetails(username: string) {
        const getGithubProfile = this.httpService.get(`https://api.github.com/users/hidaytrahman`)
            .pipe(
                map(response => response.data)
            );


        const githubProfileData = await lastValueFrom(getGithubProfile);

        console.log(githubProfileData)

        return {
            message: `User details has been fectched for ${username}`,
            ...githubProfileData
        }
    }
}