import express from "express";
import fetch from "node-fetch";
const PORT = 8080;

const app = express();

// Get all tweets (create time, id, and tweet text) available in the archive.
app.get("/api/tweets", (req, res) => {
  fetch("https://foyzulhassan.github.io/files/favs.json")
    .then((res) => res.json())
    .then((data) => {
      // get the created_at, id, and tweet text fields
      let tweets = data.map((tweet) => {
        return { created_at: tweet.created_at, id: tweet.id, text: tweet.text };
      });

      res.send(tweets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving data");
    });
});

// Get a list of all external links (all links that appear in the tweet text field.
// Use regular expressions to extract the links, the links should be grouped based on tweet ids.
app.get("/api/links", (req, res) => {
  fetch("https://foyzulhassan.github.io/files/favs.json")
    .then((res) => res.json())
    .then((data) => {
      // Gets tweets with only their id and text body
      let tweetLinks = data.map((tweet) => {
        return {
          id: tweet.id,
          textBody: tweet.text,
        };
      });

      // Use regular expressions to extract the links from text body
      let regex = /https?:\/\/[^\s]+/g;
      tweetLinks.forEach((tweet) => {
        let links = tweet.textBody.match(regex);
        tweet.links = links;
      });

      // Remove textBody from tweets
      tweetLinks.forEach((tweet) => {
        delete tweet.textBody;
      });

      res.send(tweetLinks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving data");
    });
});

// Get the details about a given tweet (given the tweet’s id). Details of the tweet include created_at, text, screen_name, lang.
app.get("/api/tweet/:id", (req, res) => {
  fetch("https://foyzulhassan.github.io/files/favs.json")
    .then((res) => res.json())
    .then((data) => {
      const tweetId = parseInt(req.params.id);

      // get the created_at, text, screen_name, and lang fields for the specified tweet
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

      res.send(selectedTweet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving data");
    });
});

// Get detailed profile information(name, location, description) about a given Twitter user (given the user’s screen name).
app.get("/api/user/:username", (req, res) => {
  fetch("https://foyzulhassan.github.io/files/favs.json")
    .then((res) => res.json())
    .then((data) => {
      const username = req.params.username;

      // get the name, location, description for the specified username
      let userProfile = data
        .filter((tweet) => tweet.user.screen_name === username)
        .map((tweet) => {
          return {
            screen_name: tweet.user.screen_name,
            location: tweet.user.location,
            description: tweet.user.description,
          };
        });

      res.send(userProfile);
    });
});

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
