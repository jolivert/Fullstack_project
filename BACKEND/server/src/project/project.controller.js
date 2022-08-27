const express = require("express");
const projectSchema = require('./project.model');
const router = express.Router();


 //create a project
 router.post("/project",(req, res)=>{
    //res.send("create project");
   const project = projectSchema(req.body);
   project
   .save() 
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
   //console.log("resultado",project);
 });

 //get all projects
 router.get("/project",(req, res)=>{
   projectSchema
   .find() 
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
 });

  //get a projects
  router.get("/project/:id",(req, res)=>{
    const {id}= req.params;
    projectSchema
    .findById(id) 
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
  });

    //update a projects
    router.put("/project/:id",(req, res)=>{
        const {id}= req.params;
        const {project_name, description, product_owner, team_members}= req.body;
        projectSchema
        .updateOne({_id:id}, {$set: {project_name, description, product_owner, team_members}})  
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
      });

   //delete a projects
    router.delete("/project/:id",(req, res)=>{
        const {id}= req.params;
        projectSchema
        .remove({_id:id})  
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message: error}));
      });

 module.exports = router;
 

