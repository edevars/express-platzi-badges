const express = require("express");
const bodyParser = require("body-parser");
const badgesRouter = require("./routes/badges");

const app = express();

app.use("/badges", badgesRouter);

//midlewares
app.use(bodyParser.json());

//redirect
app.get('/', (req,res)=>{
  res.redirect('/badges')
})

const server = app.listen(3000, () => {
  console.log(`Listening in http://localhost:${server.address().port}`);
});
