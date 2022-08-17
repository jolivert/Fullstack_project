const mongoose = require('mongoose');
//require ('../user_story/user_story.model');
const UserStory = mongoose.model('UserStory');
require ('../users/user.model');
const User = mongoose.model('user');


const taskSchema = mongoose.Schema({
  task_name: {
    type: String,
    required: true,
    trim: true,
  },
 user_story_id: {
    type: mongoose.Schema.ObjectId, ref: 'UserStory',
    required: true,
  },
     
  users_id: [{
  type: mongoose.Schema.ObjectId, ref: 'User',
  }],
  
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
 story_points:{
  type: Number
}
});


module.exports = mongoose.model('Task', taskSchema);
