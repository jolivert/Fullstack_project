const mongoose = require('mongoose');
const Project = mongoose.model('Project');
//const Tarea = mongoose.model('Tarea');


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
    
  },
  
 /*tasks: [{
  type: mongoose.Schema.ObjectId, ref: 'Tarea',
  }], */
  state: {
    type: String,
    required: true,
    trim: true,
  }
 
});


module.exports = mongoose.model('UserStory', userStorySchema);
