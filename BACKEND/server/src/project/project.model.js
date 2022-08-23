const mongoose = require('mongoose');
require ('../users/user.model');
const User = mongoose.model('user');

const projectSchema = mongoose.Schema({
  project_name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
 product_owner: {
    type: mongoose.Schema.ObjectId, ref: 'User',
    unique: false,
    required: true,
  },
   team_members: [{
    type: mongoose.Schema.ObjectId, ref: 'User',
    }],

 
 
});


module.exports = mongoose.model('Project', projectSchema);
