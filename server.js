const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is running on port " + listener.address().port);
});
