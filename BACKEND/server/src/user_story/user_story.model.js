const mongoose = require('mongoose');
//require ('../task/task.model');
const Project = mongoose.model('Project');
//const Task = mongoose.model('Task');



const userStorySchema = mongoose.Schema({
  story_name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
 project_id: {
    type: mongoose.Schema.ObjectId, ref: 'Project',
    required: true,
  },
  
 /*tasks: [{
  type: mongoose.Schema.ObjectId, ref: 'Task',
  }],*/
  state: {
    type: Boolean,
    required: true,
  }
 
});


module.exports = mongoose.model('UserStory', userStorySchema);
