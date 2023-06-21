const express = require('express');

const app = express();

app.listen(5100,function(req,res)
{
    console.log("Marvellous Server is started succesfully");
});

// Handling cors(Cross origin resource sharing)

app.use((req,res,next)=>
{
    res.header("Access-Control-Allow-Origin", // ya chya mule aapan server to client joined karu shakto
    "http://localhost:4200");

    res.header("Access_Control-Allow_Headers",
    "Origin , X-Requested-with ,Content-TypeError,Accept");

    next();

})

app.get('/',MarvellousGet);

function MarvellousGet(req,res)
{
    res.send("Marvellous Server is ON");
}

app.get('/getBatches',MarvellousGetBatches);

function MarvellousGetBatches(req,res)
{
    res.json({"batch":"PPA","Fees":18500});
}