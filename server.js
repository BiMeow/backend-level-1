const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello BiMeow!");
});

app.get("/account", (req, res) => {
  res.send("Hello BiMeow Account!");
});


app.listen(port, () => {
  console.log(`BiMeow app listening on port ${port}`);
});
