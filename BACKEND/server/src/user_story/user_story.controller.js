const express = require("express");
const userStorySchema = require('./user_story.model');
const router = express.Router();


 //create a user_story
 router.post("/user_story",(req, res)=>{
   const user_story = userStorySchema(req.body);
   user_story
   .save() 
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
 });

 //get all 
 router.get("/user_story",(req, res)=>{
  userStorySchema
   .find().populate("project_id")
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
 });

  //get a user_story
  router.get("/user_story/:id",(req, res)=>{
    const {id}= req.params;
    userStorySchema
    .findById(id).populate("project_id")
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
  });

    //update a user_story
    router.put("/user_story/:id",(req, res)=>{
        const {id}= req.params;
        const {story_name,description, project_id,state}= req.body;
        userStorySchema
        .updateOne({_id:id}, {$set: {story_name,description, project_id,state}})  
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
      });

   //delete a user_story
    router.delete("/user_story/:id",(req, res)=>{
        const {id}= req.params;
        userStorySchema
        .remove({_id:id})  
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
      });

 module.exports = router;
 
