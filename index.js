/*
 *  Author: Ashraf
 *  Class: CIS 376-- SWE II
 *  Professor: Foyzul Hassan
 *  Date: 02/23/2023
 */

// Access the command line arguments
const args = process.argv.slice(2);

if (args.length > 2) {
  console.log("Too many arguments");
  process.exit(1);
}

// Retrieve the URL and port from the command line arguments
require("dotenv").config();

let arg_url = args[0]
  ? args[0].toString()
  : process.env.URL
  ? process.env.URL
  : "https://foyzulhassan.github.io/files/favs.json";

let arg_port = args[0]
  ? args[1].toString()
  : process.env.PORT
  ? process.env.PORT
  : 8080;

// Server setup
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = arg_port;
const URL = arg_url;

// RESTful APIs
/**
 * GET a list of tweets.
 * @route GET /api/tweets
 * @returns {object} 200 - An array of tweet objects (create time, id, and tweet text)
 * @returns {object} 500 - An error message
 */
app.get("/api/tweets", (req, res) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      // Get only the created_at, id, and tweet text fields from all tweets
      let tweets = data.map((tweet) => {
        return { created_at: tweet.created_at, id: tweet.id, text: tweet.text };
      });

      res.send(tweets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving data from ${URL}`);
    });
});

/**
 * GET a list of links.
 * @route GET /api/links
 * @returns {object} 200 - An array of link URL objects grouped by tweet ids
 * @returns {object} 500 - An error message
 */
app.get("/api/links", (req, res) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      // Gets Tweets With Only Their Id and TextBody
      let tweetLinks = data.map((tweet) => {
        return {
          id: tweet.id,
          textBody: tweet.text,
        };
      });

      // Extract Links From TextBody Using Regular Expressions
      let regex = /https?:\/\/[^\s]+/g;
      tweetLinks.forEach((tweet) => {
        let links = tweet.textBody.match(regex);
        tweet.links = links;
      });

      // Group and Label Links by TweetId
      let linksByTweetId = [];
      tweetLinks.forEach((tweet) => {
        linksByTweetId.push({ [tweet.id]: { links: tweet.links } });
      });

      // No Links Found
      if (linksByTweetId.length === 0) {
        res.send("No links");
        return;
      }

      res.send(linksByTweetId);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving data from ${URL}`);
    });
});

/**
 * GET a tweet.
 * @route GET /api/tweet/:id
 * @returns {object} 200 - A single tweet object (created_at, text, screen_name, lang) given a tweet Id
 * @returns {object} 500 - An error message
 */
app.get("/api/tweet/:id", (req, res) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      // Checks if the provided Id is a number
      if (isNaN(req.params.id)) {
        res.send("Invalid tweet id");
        return;
      }

      const tweetId = parseInt(req.params.id);

      // Get only the created_at, text, screen_name, and lang fields for the user selected tweet
      let selectedTweet = data
        .filter((tweet) => tweet.id === tweetId)
        .map((tweet) => {
          return {
            created_at: tweet.created_at,
            text: tweet.text,
            screen_name: tweet.user.screen_name,
            lang: tweet.lang,
          };
        });

      if (selectedTweet.length === 0) {
        res.send("Tweet not found");
        return;
      } else if (selectedTweet.length === 1) {
        selectedTweet = selectedTweet[0];
      }

      res.send(selectedTweet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving data from ${URL}`);
    });
});

/**
 * GET a user profile.
 * @route GET /api/user/:username
 * @returns {object} 200 - A single user profile object (name, location, description) given a username
 * @returns {object} 500 - An error message
 */
app.get("/api/user/:username", (req, res) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const username = req.params.username;

      // Get only the name, location, description for the specified username
      let userProfile = data
        .filter((tweet) => tweet.user.screen_name === username)
        .map((tweet) => {
          return {
            screen_name: tweet.user.screen_name,
            location: tweet.user.location,
            description: tweet.user.description,
          };
        });

      if (userProfile.length === 0) {
        res.send("User not found");
        return;
      } else if (userProfile.length === 1) {
        userProfile = userProfile[0];
      }

      res.send(userProfile);
    });
});

// Set up listening port
app.listen(PORT, () =>
  console.log(
    `JSON File: ${URL}\nServer is running on http://localhost:${PORT}`
  )
);

// TODO:
// links JSON format
// docker image push
