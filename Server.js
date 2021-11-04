const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
////conecting to database
const db = "mongodb://localhost:27017/DBname";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connection done`))
  .catch((err) => console.log(err));

const post = require("./Routes/Post");

app.use("/", post);

////listing the api
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});

module.exports = server;
