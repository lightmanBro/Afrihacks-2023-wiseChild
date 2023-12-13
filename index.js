const express = require('express');
require('./backend/db/database')
require('hbs')
const app = express();
const cors = require('cors');
const userRoute = require('./backend/routes/user');
const courseRoute = require('./backend/routes/course');
const walletRoute = require('./backend/routes/wallet');
const path = require('path');
const exp = require('constants');
app.use(express.json())
app.use(cors({
    origin:'*'
}))

const publicDirectory = path.join(__dirname,'/' )
const viewPath = path.join(__dirname,'./views')
app.set('view engine','hbs');
app.set('views',viewPath);

app.use(express.static(publicDirectory));
// All routes comes here
app.use(userRoute);
app.use(courseRoute);
app.use(walletRoute);



app.listen(2500,()=>{
    console.log('Connected to the server');
})