const express = require("express");
const app = express();
const importData = require("./data.json");
const stationData = require("./station.json");
const projectData = require("./projectdata.json");
let port = process.env.PORT || 3000;


app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.get("/product",(req, res)=>{
    res.send(importData);
});

app.get("/projectData",(req, res)=>{
    res.send(projectData);
});

app.get("/station",(req, res)=>{
    res.send(stationData);
});

app.listen(port, ()=>{
    console.log('Example app is listening on port http://localhost:${port}');
});
