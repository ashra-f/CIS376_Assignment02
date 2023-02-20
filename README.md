# CIS 376: Assignment 02

In this assignment, we will develop a set of REST APIs capable of reading a [JSON file](https://foyzulhassan.github.io/files/favs.json) deployed on a server and returning information by using a collection of simple HTTP requests invoked through Postman. We will be using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) to implement the APIs.

## Specifications

The RESTful APIs should be able to respond, with the appropriate data, to the following requests:

- Get all tweets (create time, id, and tweet text) available in the archive.
- Get a list of all external links (all links that appear in the tweet text field). Use regular expressions to extract the links, the links should be grouped based on tweet ids.
- Get the details about a given tweet (given the tweet’s id). Details of the tweet include created_at, text, screen_name, lang.
- Get detailed profile information(name, location, description) about a given Twitter user (given the user’s screen name).

## Installation Using Docker
1. Install Docker on your machine.
2. Clone the GitHub repository and navigate to the repository directory: 
   ```
   git clone https://github.com/ashra-f/CIS376_Assignment02.git
   cd CIS376_Assignment02-main
   ```
3. Build the Docker image: 
   ```
   docker build -t asgmt02 .
   ```
4. Run the Docker container: 
   ```
   docker run -p 8080:8080 asgmt02
   ```

## Installation Using npm

To use the API, you will need to have Node.js installed on your system. If you don't already have Node.js installed, you can download it from the [Node.js website](https://nodejs.org/en/).

### Prerequisites

Before you can use the API, you will need to install Node.js and npm using [nvm](https://github.com/nvm-sh/nvm). If you already have nvm installed, you can skip to the installation part.

Before you can install nvm (Node Version Manager) and Node.js using the installation command, you will need to have the curl command-line tool installed on your system. If you do not already have curl installed, you can typically install it using your operating system's package manager. Here are a few examples:

On Ubuntu or Debian-based Linux distributions, you can install curl using the apt package manager:

```
sudo apt update
sudo apt install curl
```

On CentOS or Fedora-based Linux distributions, you can install curl using the yum package manager:

```
sudo yum install curl
```

On macOS, you can install curl using the Homebrew package manager:

```
brew install curl
```

On Windows, you can download the curl executable from the [curl website](https://curl.se/windows/), and add the directory containing the curl executable to your system's PATH environment variable.

To install Node.js and npm using nvm, follow these steps:

1. Install nvm
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   ```
2. Install node.js and npm
   ```
   nvm install --lts
   ```

### Using npm

1. Clone the repo
   ```
   git clone https://github.com/ashra-f/CIS376_Assignment02.git
   cd CIS376_Assignment02-main
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

| HTTP Verbs | Endpoints           | Action                                                                |
| ---------- | ------------------- | --------------------------------------------------------------------- |
| GET        | /api/tweets         | To retrieve all the tweets (create time, id, and tweet text)                                           |
| GET        | /api/links          | To retrieve all links associated with all the tweets grouped by tweet id                 |
| GET        | /api/tweet/:id      | To retrieve a specific tweet (created_at, text, screen_name, lang) by entering the tweet's id               |
| GET        | /api/user/:username | To retrieve a specific user's profile (username, location, description) by entering the user's username |
