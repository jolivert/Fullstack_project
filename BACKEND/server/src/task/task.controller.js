

const express = require("express");
const taskSchema = require('./task.model');
const router = express.Router();



 /*//create project
 router.post("/project",(req, res)=>{
    res.send("create project");

 });*/

 //create a task
 router.post("/task",(req, res)=>{
   const task = taskSchema(req.body);
   task
   .save() 
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
 });

 //get all tasks
 router.get("/task",(req, res)=>{
  taskSchema
   .find().populate("user_story_id")
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
 });

  //get a task
  router.get("/task/:id",(req, res)=>{
    const {id}= req.params;
    taskSchema
    .findById(id) 
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
  });

    //update a task
    router.put("/task/:id",(req, res)=>{
        const {id}= req.params;
        const {task_name,user_story_id,finished,time_init,time_end,story_point}= req.body;
        taskSchema
        .updateOne({_id:id}, {$set: {task_name,user_story_id,finished,time_init,time_end,story_point}})  
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
      });

   //delete a task 
    router.delete("/task/:id",(req, res)=>{
        const {id}= req.params;
        taskSchema
        .remove({_id:id})  
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
      });

 module.exports = router;
 