const express = require("express");
const app = express();

var port = 5555;

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// Put listen at the end
