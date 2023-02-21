# CIS 376: Assignment 02

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
        <li>
      <a href="#specifications">Specifications</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
      <ul>
        <li><a href="#using-docker">Using Docker</a></li>
        <li><a href="#using-yarn">Using Yarn</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## About The Project

In this assignment, we will develop a set of REST APIs capable of reading a [JSON file](https://foyzulhassan.github.io/files/favs.json) deployed on a server and returning information by using a collection of simple HTTP requests invoked through Postman. We will be using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) to implement the APIs.

## Specifications

The RESTful APIs should be able to respond, with the appropriate data, to the following requests:

- Get all tweets (create time, id, and tweet text) available in the archive.
- Get a list of all external links (all links that appear in the tweet text field). Use regular expressions to extract the links, the links should be grouped based on tweet ids.
- Get the details about a given tweet (given the tweet’s id). Details of the tweet include created_at, text, screen_name, lang.
- Get detailed profile information(name, location, description) about a given Twitter user (given the user’s screen name).

## Installation

Start off by cloning the repo (if you don't have git, install it [here](https://git-scm.com/downloads)):

```
git clone https://github.com/ashra-f/CIS376_Assignment02.git
cd CIS376_Assignment02-main
```

or simply downloading the zip file.

### Using Docker

1. Install [Docker](https://www.docker.com/) on your machine then open it.
2. Pull the Docker image:
   ```
   docker pull ashrafha0/restapis
   ```
3. Run the Docker container:
   ```
   docker run -it -p 8080:8080 restapis
   ```

### Using yarn

#### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/) - version 14 or later is recommended.
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) - a package manager for Node.js.

Then perform the following:

1. Install yarn packages:
   ```
   yarn install
   ```
2. Run the application:
   ```
   yarn start
   ```

## Usage

Connect to the API on http://localhost:8080 using Postman or Insomnia.

### API Endpoints

| HTTP Verbs | Endpoints           | Action                                                                                                  |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| GET        | /api/tweets         | To retrieve all the tweets (create time, id, and tweet text)                                            |
| GET        | /api/links          | To retrieve all links associated with all the tweets grouped by tweet id                                |
| GET        | /api/tweet/:id      | To retrieve a specific tweet (created_at, text, screen_name, lang) by entering the tweet's id           |
| GET        | /api/user/:username | To retrieve a specific user's profile (username, location, description) by entering the user's username |
