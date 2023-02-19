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

// Get the details about a given tweet (given the tweet’s id). Details of the tweet include created_at, text, screen_name, lang.

// Get detailed profile information(name, location, description) about a given Twitter user (given the user’s screen name).

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
