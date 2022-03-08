const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Thread = require("./models/Thread");

const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect("あなたのMONGOURL")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

//getメソッド
app.get("/api/v1/threads", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err);
  }
});

app.post("/ap1/v1/thread", async (req, res) => {
  try {
    console.log("post");
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, console.log("server is started"));
