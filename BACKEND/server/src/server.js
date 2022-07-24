const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const PORT = "8082";
const db = require('./db');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get("/",async (req, res)=>{
    res.status(200).send({ send: "Hello! Welcome to the team management API!"});
});

const startServer = async () =>{
    await db.connect();
    app.listen(PORT,()=>{
        console.log(`Team Management API listening on: ${PORT}`);
    });
}

startServer();