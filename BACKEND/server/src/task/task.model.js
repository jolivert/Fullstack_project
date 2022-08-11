const mongoose = require('mongoose');
const UserStory = mongoose.model('UserStory');
//const User = mongoose.model('User');

const taskSchema = mongoose.Schema({
  task_name: {
    type: String,
    required: true,
    trim: true,
  },
 user_story_id: {
    type: mongoose.Schema.ObjectId, ref: 'UserStory',
    
  },
   /*  
  users_id: [{
  type: mongoose.Schema.ObjectId, ref: 'User',
  }],
  */
  finished: {
    type: Boolean,
    required: true,
  },
  time_init: {
    type: Date, default: Date.now
  },
  time_end: { 
    type: Date,
  },
 story_point:{
  type: Number
}
});


module.exports = mongoose.model('Tarea', taskSchema);
