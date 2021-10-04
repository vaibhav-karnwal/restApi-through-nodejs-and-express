const express = require("express");
const app = express();
const importData = require("./data.json");
const stationData = require("./detail.json");
const projectData = require("./projectdata.json");
const cssData = require("./css.json");
const cssUser = require("./user.json");
const dishData = require("/station.json");
let port = process.env.PORT || 3000;


app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.listen(port, ()=>{
    console.log('Example app is listening on port http://localhost:${port}');
});
