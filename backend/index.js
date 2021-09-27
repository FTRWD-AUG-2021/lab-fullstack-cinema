const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const MONGODB_URI = "mongodb://localhost:27017/Movie";
const Movie = require("./models/Movie");

mongoose
  .connect(MONGODB_URI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
  });

app.get("/", (req, res) => {
  res.send("Nothing Here");
});

app.get("/api/movies", async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

app.get("/api/moviedetail/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

app.listen(5000);
