const express = require('express');
require('./backend/db/database')
const app = express();
const userRoute = require('./backend/routes/user');
const courseRoute = require('./backend/routes/course');
const walletRoute = require('./backend/routes/wallet');
app.use(express.json())

// All routes comes here
app.use(userRoute);
app.use(courseRoute);
app.use(walletRoute);



app.listen(2500,()=>{
    console.log('Connected to the server');
})