const express = require("express");
const bodyParser = require("body-parser");
const badgesRouter = require("./routes/api/badges");
const { config } = require("./config");

const app = express();
const PORT = config.port;

//midlewares
app.use(bodyParser.json());

app.use("/api/badges", badgesRouter);

//redirect
app.get("/", (req, res) => {
  res.redirect("/api/badges");
});

const server = app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${server.address().port}`);
});
