const express = require("express");
const bodyParser = require("body-parser");
const badgesRouter = require("./routes/badges");

const app = express();

//midlewares
app.use(bodyParser.json());

app.use("/badges", badgesRouter);

//redirect
app.get('/', (req,res)=>{
  res.redirect('/badges')
})

const server = app.listen(8000, () => {
  console.log(`Listening in http://localhost:${server.address().port}`);
});
