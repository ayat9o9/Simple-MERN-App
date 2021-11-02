const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/////for uploading image
const server = http.createServer(app);

////conecting to database
const db = "mongodb://localhost:27017/DBname";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connection done`))
  .catch((err) => console.log(err));

// const userR = require("./router/userrouter");

// app.use("/api/v1", ParaGorinawaR);

////listing the api
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});

module.exports = server;
