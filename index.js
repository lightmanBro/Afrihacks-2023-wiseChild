const express = require('express');

const app = express();

app.use(express.json())

app.listen(2500,()=>{
    console.log('Connected to the server');
})