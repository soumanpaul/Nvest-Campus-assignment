const  express = require('express');
const router = express.Router();
const TeacherModel = require('../models/TeacherProfile');



/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index', { title: 'Express' });
});


// @route   POST api/v1/addStudent
// @desc    Add new Teacher
// @access  Private
router.post('/addTeacher', (req, res, next) => {
  const teacher = new TeacherModel(req.body);
  teacher.save();
  res.status(200).send("New Teacher is added to database");
})


// @route   POST api/v1/addClass
// @desc    Add new class by teacherName
// @access  Private
router.post('/addClass', (req, res, next) => {
  const { className, teacherName } = req.body;
  console.log(teacherName);
  TeacherModel.findOne({teacherName}).then(data => {
    data.classes.push({className})
    data.save();
  })
  res.status(200).send("New class is added to database");
})

// @route   POST api/v1/addClass
// @desc    Add new class by teacherName
// @access  Private
router.post('/addSubject', (req, res, next) => {
  const { className, teacherName, subjectName } = req.body;
  TeacherModel.findOne({teacherName}).then(data => {
    data.classes.forEach(clas => {
      if(clas.className === className){
        clas.subjects.push({subjectName})
      }
    })
    data.save();
  })
  res.status(200).send(`New subject ${subjectName} is added to ${className} of ${teacherName}`);
})


// @route   POST api/v1/addStudent
// @desc    Add new student By className and TeacherName
// @access  Private
router.post('/addStudent', (req, res, next) => {

  const { className, teacherName, studentName } = req.body;
  TeacherModel.findOne({teacherName}).then(data => {
    console.log(data);
    data.classes.forEach(obj => {
      if(obj.className === className) {
        obj.studentName.push(studentName)
      }
      data.save();
    })
    res.status(200).send(`${studentName} is registered  for ${className}  class 0f ${teacherName} !`);
  })
})

// @route   POST api/v1/makeAttendance
// @desc    Make attendance by studentName, subjectName, Classname, TeacherName
// @access  Private
router.post('/makeAttendance', (req, res, next) => {

  const { className, teacherName, studentName, subjectName } = req.body;
  TeacherModel.findOne({teacherName}).then(data => {

    data.classes.forEach(obj => {
      if(obj.className === className) {
        // obj.studentName.push(studentName)
        obj.subjects.forEach(sub => {
          if(sub.subjectName === subjectName){
            sub.attendance.push(studentName)
            // console.log(sub.attendance)
          }
        })
    data.save();
    // console.log(data)

      }
    })
    // data.save();
    res.status(200).send(`${studentName} is registered subject ${subjectName} of ${className}  teach by ${teacherName} !`);
  })
})



// @route   GET api/v1/allStudents
// @desc    Fetch all student by teacher name
// @access  Private
router.get('/allStudents', function(req, res, next) {
  const { teacherName} = req.body;
  
  TeacherModel.findOne({teacherName}).then(data => {
    const StudentList = [];
    data.classes.forEach(call => {
      StudentList.push(call.studentName);
    }) 
    const StudentLength = StudentList[0].length;
    res.status(200).send(JSON.stringify({StudentList: StudentList[0], TotalStudent: StudentLength }))
  })
});


// @route   GET api/v1/attendance
// @desc    Find attendance by subject name
// @access  Private
router.post('/fetchattendance', function(req, res, next) {
  const { teacherName, className, studentName} = req.body;
  
  TeacherModel.findOne({teacherName}).then(data => {
    let count = 0;
    let percent = 0;
    data.classes.forEach(doc => {
      if(doc.className === className){

       doc.subjects.forEach(sub => {
         console.log(sub.attendance)
         console.log(studentName)
        function findname(name) {
          return name === studentName;
        }
         if(sub.attendance.find(findname)){
                count++;
         } 
       })
        const length = doc.subjects.length;
        console.log(length)
        percent = count/length * 100;
        console.log(percent)
      }
    })


    res.status(200).send(JSON.stringify({ studentName: `${studentName}` , className: `${className}`, Attendance: percent + `%`}))
  })
});


module.exports = router;
