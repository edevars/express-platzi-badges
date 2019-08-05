const express = require("express");
const bodyParser = require("body-parser");
const badgesRouter = require("./routes/badges");
const { config } = require("./config");

const app = express();
const PORT = config.port;

//midlewares
app.use(bodyParser.json());

app.use("/badges", badgesRouter);

//redirect
app.get("/", (req, res) => {
  res.redirect("/badges");
});

const server = app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${server.address().port}`);
});
