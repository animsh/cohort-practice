const express = require("express");
import someValue from "@repo/common";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3003, () => {
  console.log("Server is running on port 3000");
});
