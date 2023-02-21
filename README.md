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

In this assignment, we will develop a set of REST APIs capable of reading a [JSON file](https://foyzulhassan.github.io/files/favs.json) deployed on a server and returning information by using a collection of simple HTTP requests invoked through Postman. We will be using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) to implement the APIs in VS Code.

## Specifications

The RESTful APIs should be able to respond, with the appropriate data, to the following requests:

- Get all tweets (create time, id, and tweet text) available in the archive.
- Get a list of all external links (all links that appear in the tweet text field). Use regular expressions to extract the links, the links should be grouped based on tweet ids.
- Get the details about a given tweet (given the tweet’s id). Details of the tweet include created_at, text, screen_name, lang.
- Get detailed profile information(name, location, description) about a given Twitter user (given the user’s screen name).

## Installation

### Using Docker

1. Install [Docker](https://www.docker.com/) on your machine then open it.
2. Pull the Docker image:
   ```
   docker pull ashrafha0/rest_apis
   ```
3. Run the Docker container on port 8080:

   ```
   docker run -it --platform linux/arm64/v8 -p 8080:8080 ashrafha0/rest_apis
   ```

4. **[Optional]** If you wish to change the default JSON file we are reading from, run the following:

   ```
    docker run -it --platform linux/arm64/v8 -p <host-port>:<container-port> -e URL=<URL_value> -e PORT=<PORT_value> ashrafha0/rest_apis
   ```

   - Replace `<host-port>` with the port number you want to use on your host machine, and `<container-port>` with the port number that your application is listening on inside the container.
   - Replace `<URL_value>` with the new JSON file path, and replace `<PORT_value>` with the same port number you set for `<container-port>`.

Skip to the usage section? [Click here!](#usage)

### Using yarn

Start off by cloning the repo (if you don't have git, install it [here](https://git-scm.com/downloads)):

```
git clone https://github.com/ashra-f/CIS376_Assignment02.git
cd CIS376_Assignment02-main
```

or simply downloading the zip file.

#### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/) - version 12 or later is recommended.
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

3. **[Optional]** If you wish to change the default JSON file we are reading from, you can either use:
   **a. Command Line Arguments:**

   - Pass a URL argument:

     ```
     yarn start <url> <host-port>
     ```

     - Note: The default url is `https://foyzulhassan.github.io/files/favs.json` and the default host port is `8080`.

   **b. Environment Variables:**

   - Rename the .env.example file to .env.
   - Set your desired JSON file by changing the URL variable and/or PORT variable.
   - Run:

     ```
     yard start
     ```

## Usage

You can connect to the API using Postman or Insomnia on http://localhost:8080, or on your newly specified host port `<host-port>`.

### API Endpoints

#### Get All tweets

This endpoint allows you to retrieve all the tweets. Only their create time, id, and tweet text will be included.

**Request:**

```
GET /api/tweets
```

**Response:**

```
[
  {
    "created_at": "Wed Mar 13 23:01:36 +0000 2013",
    "id": 311975360667459600,
    "text": "Was wondering why @billgates cc'd me on story abt @MSFTResearch cool viral search tool; discovered I'm featured in it http://t.co/g6oSeEIEUr"
  },
  {
    "created_at": "Wed Mar 13 22:16:59 +0000 2013",
    "id": 311964132205269000,
    "text": "The one page everyone in Hollywood is watching http://t.co/jaX0uQqk4W  This is the film industry's Pebble Watch moment."
  },
  {
    "created_at": "Wed Mar 13 13:16:30 +0000 2013",
    "id": 311828115477372900,
    "text": "I reflected on why the #sxsw induction means so much to me and it took &gt;140 chars: http://t.co/rJWz0jKrqf"
  },
  {
    "created_at": "Tue Mar 12 13:29:12 +0000 2013",
    "id": 311468922962587650,
    "text": "How to Create an Early Stage Pitch Deck\nhttp://t.co/TdYB5I6xBl\n(Great advice from @ryanspoon )"
  },
  {
    "created_at": "Tue Mar 12 11:05:00 +0000 2013",
    "id": 311432631726264300,
    "text": "1st gear Empathy, 2nd gear Prototype, 3rd gear Align w/ Reality http://t.co/QxDfp2GLcQ by @Jabaldaia http://t.co/CLcxKevjrY"
  }
]

```

#### Get External Links

This endpoint allows you to retrieve all the external links found in the tweets. The links are grouped by tweet id.

**Request:**

```
GET /api/links
```

**Response:**

```
[
  {
    "311975360667459600": {
      "links": [
        "http://t.co/g6oSeEIEUr"
      ]
    }
  },
  {
    "311964132205269000": {
      "links": [
        "http://t.co/jaX0uQqk4W"
      ]
    }
  },
  {
    "311828115477372900": {
      "links": [
        "http://t.co/rJWz0jKrqf"
      ]
    }
  },
  {
    "311468922962587650": {
      "links": [
        "http://t.co/TdYB5I6xBl"
      ]
    }
  },
  {
    "311432631726264300": {
      "links": [
        "http://t.co/QxDfp2GLcQ",
        "http://t.co/CLcxKevjrY"
      ]
    }
  }
]
```

#### Get Individual Tweet

This endpoint allows you to retrieve a single tweet. You'll need to provide a tweet id in the request body. The tweet returned will include the following:

- when the tweet was posted
- tweet's text body
- user's screen name
- language

**Request:**

```
GET /api/tweet/:id
(where id = 311975360667459600)
```

**Response:**

```
{
  "created_at": "Wed Mar 13 23:01:36 +0000 2013",
  "text": "Was wondering why @billgates cc'd me on story abt @MSFTResearch cool viral search tool; discovered I'm featured in it http://t.co/g6oSeEIEUr",
  "screen_name": "timoreilly",
  "lang": "en"
}
```

#### Get User Profile

This endpoint allows you to retrieve a single user profile. You'll need to provide a username in the request body. The user profile returned will include the following:

- screen name
- location
- description

**Request:**

```
GET /api/user/:username
(where username = timoreilly)
```

**Response:**

```
{
  "screen_name": "timoreilly",
  "location": "Sebastopol, CA",
  "description": "Founder and CEO, O'Reilly Media. Watching the alpha geeks, sharing their stories, helping the future unfold."
}
```

### Summary

| HTTP Verbs | Endpoints           | Action                                                                                                  |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| GET        | /api/tweets         | To retrieve all the tweets (create time, id, and tweet text)                                            |
| GET        | /api/links          | To retrieve all links associated with all the tweets grouped by tweet id                                |
| GET        | /api/tweet/:id      | To retrieve a specific tweet (created_at, text, screen_name, lang) by entering the tweet's id           |
| GET        | /api/user/:username | To retrieve a specific user's profile (username, location, description) by entering the user's username |
