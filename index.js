const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get('/', function (req, res) {
  res.render('pages/index')
})

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to:" + port);
})