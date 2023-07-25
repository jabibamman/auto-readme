<h1 align="center">Auto Readme</h1>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">This Nest.js project periodically updates the number of public repositories a GitHub user is maintaining in the `README.md` of a repository. The project retrieves the number of public repos and if this number has changed, it will update the README.md file on Github.
</p>

[![wakatime](https://wakatime.com/badge/github/jabibamman/auto-readme.svg)](https://wakatime.com/badge/github/jabibamman/auto-readme)

## Configuration

To use this service, you'll need to set two environment variables:

```sh
GITHUB_TOKEN=your_token
GITHUB_USERNAME=the_username_you_want_to_retrieve_the_repos_from
````

`GITHUB_TOKEN`: A personal access token of a GitHub user. You can generate this from your GitHub settings.

`GITHUB_USERNAME`: The GitHub username of the account you want to retrieve the public repos from.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Code Explanation

The logic of this service resides mainly in two classes: UpdateReadme and GithubService.

UpdateReadme is a Nest.js injectable that uses Nest's cron package to periodically (every 30 minutes as currently set) fetch the number of public repositories of a GitHub user and update the README file if this number has changed.

GithubService is the class responsible for communicating with GitHub's API. It has three main methods:

- `getAllPublicReposByUsername`: fetches all the public repositories of a user.
- `getFileContents`: gets the contents of a file in a repo.
- `updateFile`: updates the contents of a file in a repo.

## Future Work

This is a simple project. In the future, we could extend this to update more data, not only the number of repositories. We could also make the interval at which the service runs configurable.

## Disclaimer

The usage of this tool should comply with GitHub's API usage terms and conditions. It is developed for educational purposes and should not be used to spam or disrupt the services of GitHub.

Please note that the values for the environment variables in the configuration section should be replaced with actual values for the tool to work. 

The same goes for the Cron job interval; it's set to update every 30 minutes for testing purposes, but this should be changed to a more reasonable interval (like every an hour or 2 hour) in a production setting.
