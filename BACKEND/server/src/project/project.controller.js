const express = require("express");
const { needsAuthToken } = require("../users/auth/auth.middleware");
const projectSchema = require('./project.model');
const router = express.Router();


 //create a project
 router.post("/project", async (req, res)=>{
    //res.send("create project");
   const project = projectSchema(req.body);
   await project
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
    .find({_id:id}) 
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
  });

  //get a project by po id
  router.get("/projects/:id",(req, res)=>{
    const {id}= req.params;
    projectSchema
    .find({product_owner:id}).lean().exec() 
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
  });

  //get a project by team_members id
  router.get("/myprojects/:id",(req, res)=>{
    const {id}= req.params;
    projectSchema
    .find({team_members:[id]}).lean().exec() 
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
 

