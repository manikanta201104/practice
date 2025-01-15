const express = require('express');
const app=express();
const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('This is Manikanta from express');
});

app.get('/kannama',(req,res)=>{
    res.send('i love u tittu');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});