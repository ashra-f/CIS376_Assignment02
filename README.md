# CIS 376: Assignment 02

In this assignment, we will develop a set of REST APIs capable of reading a [JSON file](https://foyzulhassan.github.io/files/favs.json) deployed on a server and returning information by using a collection of simple HTTP requests invoked through Postman. We will be using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) to implement the APIs.

## Specifications

The RESTful APIs should be able to respond, with the appropriate data, to the following requests:

- Get all tweets (create time, id, and tweet text) available in the archive.
- Get a list of all external links (all links that appear in the tweet text field). Use regular expressions to extract the links, the links should be grouped based on tweet ids.
- Get the details about a given tweet (given the tweet’s id). Details of the tweet include created_at, text, screen_name, lang.
- Get detailed profile information(name, location, description) about a given Twitter user (given the user’s screen name).

## Installation

### Using Docker

1. Install [Docker](https://www.docker.com/) on your machine.
2. Clone the GitHub repository and navigate to the repository directory:
   ```
   git clone https://github.com/ashra-f/CIS376_Assignment02.git
   cd CIS376_Assignment02-main
   ```
3. Build the Docker image:
   ```
   docker build -t restAPIs .
   ```
4. Run the Docker container:
   ```
   docker run -it -p 8080:8080 restAPIs
   ```

### Using yarn

To use the API, you will need to have Node.js installed on your system. If you don't already have Node.js installed, you can download it from the [Node.js website](https://nodejs.org/en/).

### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/) - version 14 or later is recommended.
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) - a package manager for Node.js.

Then perform the following:

1. Clone the repo
   ```
   git clone https://github.com/ashra-f/CIS376_Assignment02.git
   cd CIS376_Assignment02-main
   ```
2. Install yarn packages
   ```
   yarn install
   ```
3. Run in production
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
