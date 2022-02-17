const express = require("express");
const app = express();

var port = 5555;

function coinFlip() {
  var result;
  var rand_num = Math.random();

  if (rand_num < 0.5) {
    result = "heads";
  } else {
    result = "tails";
  }
  return result;
}

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

app.get("/app", (req, res) => {
  res.status(200).end("OK");
  res.type("text/plain");
});

app.get("/app/echo/:number", (req, res) => {
  res.status(200).json({ message: req.params.number });
});
// Put listen at the end
app.get("/app/flip", (req, res) => {
  var flip = coinFlip();
  res.status(200).json({ flip: flip });
});

app.use(function (req, res) {
  res.status(404).end("Endpoint does not exist");
  res.type("text/plain");
});
