import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bye there");
});

app.listen(8080, () => {
  console.log("Listening or port 8080");
});
