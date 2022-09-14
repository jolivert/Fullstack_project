const express = require("express");
const taskSchema = require("./task.model");
const router = express.Router();

/*//create project
 router.post("/project",(req, res)=>{
    res.send("create project");
 });*/

//create a task
router.post("/task", async (req, res) => {
  const task = taskSchema(req.body);
  await task
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all tasks
router.get("/task", (req, res) => {
  taskSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a task
router.get("/task/:id", (req, res) => {
  const { id } = req.params;
  taskSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a task
router.put("/task/:id", (req, res) => {
  const { id } = req.params;
  const { task_name, users_id, project_id, finished, isvoted,all_votes, description, time_init, time_end, story_point } = req.body;
  taskSchema
    .updateOne({ _id: id }, { $set: { task_name, users_id, project_id, finished, isvoted, description, time_init, time_end, story_point } })
    .updateOne({_id:id,"all_votes.user": {$nin: all_votes.user}},{ $push:({ "all_votes.user": all_votes.user, "all_votes.vote":all_votes.vote})})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
   // console.log("esteeee", all_votes.user);
});

//delete a task
router.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  await taskSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a task
router.get("/task/:id", (req, res) => {
  const { id } = req.params;
  taskSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all tasks of project
router.get("/tasksproject/:id", async(req, res) => {
  const { id } = req.params;
  await taskSchema
    .find({"project_id":id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
