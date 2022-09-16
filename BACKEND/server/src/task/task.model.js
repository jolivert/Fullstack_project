const mongoose = require("mongoose");
//const UserStory = mongoose.model('UserStory');
require("../users/user.model");
const User = mongoose.model("user");
const Project = mongoose.model("Project");

const taskSchema = mongoose.Schema({
  task_name: {
    type: String,
    required: true,
    trim: true,
  },
  /*user_story_id: {
    type: mongoose.Schema.ObjectId, ref: 'UserStory',
    required: true,
  },*/

  users_id: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],

  project_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Project",
    required: true,
  },

  finished: {
    type: Boolean,
    required: true,
  },
  isvoted: {
    type: Boolean,
    required: true,
  },

  all_votes: {
    user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: false,
        unique: true,
      },
    ],
    vote: [{ type: String, require: false }],
  },

  description: {
    type: String,
    trim: true,
  },
  time_init: {
    type: Date,
    //default: Date.now
  },
  time_end: {
    type: Date,
  },
  story_points: {
    type: Number,
  },
});

module.exports = mongoose.model("Task", taskSchema);
