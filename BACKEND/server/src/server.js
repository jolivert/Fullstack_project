const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const projectRoutes= require ('./project/project.controller');
const userStoryRoutes= require ('./user_story/user_story.controller');
const taskRoutes= require ('./task/task.controller');


const PORT = process.env.PORT || 8082;
const db = require('./db');
const { errorHandler, TeamMgmtApiError } = require("./errors");
const { needsAuthToken } = require('./users/auth/auth.middleware');

const app = express();

app.use(express.json());






app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.get("/",async (req, res)=>{
    res.status(200).send({ send: "Hello! Welcome to the team management API!"});
});

require('./users/user.controller').addRoutesTo(app);
app.use('/api', projectRoutes);
app.use('/api', userStoryRoutes);
app.use('/api', taskRoutes);

// Catch all errors from middleware
app.all("/*", async (req, res, next) => {
    //this will end up passing the error to the next (last) middleware which is errorHandler and it will control the error
    next(new TeamMgmtApiError(404, `Not Found`));
});

//this middleware is our error handling function in error.js and will handle every error in the app
app.use(errorHandler);

const startServer = async () =>{
    await db.connect();
    app.listen(PORT,()=>{
        console.log(`Team Management API listening on port: ${PORT}`);
    });
}

startServer();