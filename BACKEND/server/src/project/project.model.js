const mongoose = require('mongoose');
//const User = mongoose.model('User');

const projectSchema = mongoose.Schema({
  project_name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
 /*product_owner: {
    type: Schema.ObjectId, ref: 'User',
    unique: false,
    required: true,
  },
   team_members: [{
    type: mongoose.Schema.ObjectId, ref: 'User',
    unique: false,
    required: true,
    }],*/

 
 
});


module.exports = mongoose.model('Project', projectSchema);
