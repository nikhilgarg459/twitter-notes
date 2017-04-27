var express = require('express');
const app = express();
var config = require('./config');

//console.log(config.envVar.serverUrl);

app.get('/', (req,res)=>{
    res.send("ho ho ho");
});

app.listen(config.envVar.port, () =>{
    console.log("Express server listenong on Port " + config.envVar.port);
})