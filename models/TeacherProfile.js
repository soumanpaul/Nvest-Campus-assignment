const mongoose = require('mongoose');

const TecherProfile = new mongoose.Schema({
  teacherName: {
    type: String,
  },
  classes:  [
    {
     className: {
       type: String,
     },
     studentName: [String],
     subjects: [{
      subjectName: {
        type: String
      },
      attendance: [String]
    }] 
    }
  ],
})

module.exports = Profile = mongoose.model('TecherProfile', TecherProfile);

