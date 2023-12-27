import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { API_BASE_URL } from "src/config/api.config";
import { filteredGithubProfile, filteredGithubRepo } from "./utils";
import { getFilteredObject } from "src/shared/utils";


@Injectable()
export class GithubServices {

    constructor(private readonly httpService: HttpService) { }

    getUser(username: string) {
        return {
            message: `User details has been fectched for ${username}`
        }
    }

    // fetch data from github and modify it in one api
    async getUserDetails(username: string) {

        // fetch the data from github profile
        const getProfile = this.httpService.get(`${API_BASE_URL.GITHUB}users/${username}`)
            .pipe(
                map(response => response.data)
            );


        // fetch the data from github profile
        const getRepoList = this.httpService.get(`${API_BASE_URL.GITHUB}users/${username}/repos?per_page=5`)
            .pipe(
                map(response => response.data)
            );


        // convert promise into object
        const githubProfile = await lastValueFrom(getProfile);
        const githubRepoList = await lastValueFrom(getRepoList);

        // fetch the followers from github user if follower exists
        let githubFollowerList = [];
        if (githubProfile.followers > 0) {
            const getFollowerList = this.httpService.get(`${API_BASE_URL.GITHUB}users/${username}/followers`)
                .pipe(
                    map(response => response.data)
                );

            // convert promise into object
            githubFollowerList = await lastValueFrom(getFollowerList);
        }




        // filter fields from each repo from the list
        const filteredFieldsRepo = githubRepoList.map((object) => getFilteredObject(filteredGithubRepo, object))


        // console.log(githubProfileData)
        console.log(githubFollowerList)
        // console.log(getFilteredObject(filteredGithubProfile, githubProfileData))


        // modify the response and finalise it for the user
        return {
            message: `User details has been fectched for ${username}`,
            ...getFilteredObject(filteredGithubProfile, githubProfile),
            repos: filteredFieldsRepo,
            followers: githubFollowerList
        }
    }
}