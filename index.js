const express = require("express");
const cors = require("cors");
const db = require("./db.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/movies", express.static("movies"));

app.get("/", (req, res) => {
  return res.json(db);
});

const port = 3333;
app.listen({ port }, () =>
  console.info("❤ server this my love online...", `http://localhost:${port}/`)
);
