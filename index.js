const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);

// https://foyzulhassan.github.io/files/favs.json
app.get("/user", (req, res) => {
  res.status(200).send({
    name: "eddie",
    age: "23",
  });
});
