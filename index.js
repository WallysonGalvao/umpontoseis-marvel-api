const express = require("express");
const compression = require("compression");
const cors = require("cors");
const db = require("./db.json");

require("./imagemin");

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());

app.use("/chars", express.static("images/chars"));
app.use("/movies", express.static("images/movies"));

app.get("/", (req, res) => {
  return res.json(db);
});

const port = process.env.PORT || 3333;
app.listen({ port }, () =>
  console.info("❤ server this my love online...", `http://localhost:${port}/`)
);
