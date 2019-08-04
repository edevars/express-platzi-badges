const express = require("express");
const badgesRouter = require("./routes/api/badges");

const app = express();

app.use('/api/badges', badgesRouter)

const server = app.listen(3000, () => {
  console.log(`Listening in http://localhost:${server.address().port}`);
});
