const express = require("express"); // import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.json({ name: "Mike", age: 22 });
});

app.listen(9000, () => {
  console.log("Listening on PORT 9000");
});
