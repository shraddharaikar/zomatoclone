
const express = require('express');
const rout = require('./Routes/router');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

const port = 2020;
const host = 'localhost';

// backend will give response irrespective of resource,platform,port or medium

app.use(cors());
app.options("*",cors());

app.use(express.json())

//app.use will act as middleware.Every single request will route through the '/' now
app.use('/',rout);

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();

})
mongoose.connect('mongodb+srv://zomatoCloneUser:o0A0ROHIUp96TnVi@cluster0.l3jtz.mongodb.net/zomatoClone?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true })
        .then(res => {
            app.listen(port,host,() => {
                              console.log(`Server is up and running on ${port} : ${host}`);
            });

        }).catch(err => console.log("Error"+err));



    
