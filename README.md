
# CIS 376: Assignment 02

In this assignment, we will develop a set of REST APIs capable of reading a [JSON file](https://foyzulhassan.github.io/files/favs.json) deployed on a server and returning information by using a collection of simple HTTP requests invoked through Postman. We will be using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) to implement the APIs.


## Specifications

The RESTful APIs should be able to respond, with the appropriate data, to the following requests:

-   Get all tweets (create time, id, and tweet text) available in the archive.   
-   Get a list of all external links (all links that appear in the tweet text field). Use regular expressions to extract the links, the links should be grouped based on tweet ids.
-   Get the details about a given tweet (given the tweet’s id). Details of the tweet include created_at, text, screen_name, lang.
-   Get detailed profile information(name, location, description) about a given Twitter user (given the user’s screen name).

## Installation

To use the API, you will need to have Node.js installed on your system. If you don't already have Node.js installed, you can download it from the [Node.js website](https://nodejs.org/en/).

1. Clone the repo
   ```
   git clone https://github.com/ashra-f/CIS376_Assignment02.git
   ```
2. Install npm packages
   ```
   npm install
   ```
3. Run in production
   ```
   npm start
   ```

## Usage

Connect to the API on http://localhost:8080 using Postman or Insomnia.

### API Endpoints  
| HTTP Verbs | Endpoints | Action |  
| --- | --- | --- |  
| GET | /api/tweets | To retrieve all the tweets |  
| GET | /api/links | To retrieve all links associated with all the tweets | 
| GET | /api/tweet/:id | To retrieve a specific tweet by entering the tweet's id |  
| GET | /api/user/:username | To retrieve a specific user's profile by entering the user's username| 
