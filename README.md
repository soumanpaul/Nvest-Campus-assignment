
# coursesAPI



## Indices

* [Default](#default)

  * [Ffetchattendance of each Subject](#1-ffetchattendance-of-each-subject)
  * [make Attendance](#2-make-attendance)
  * [Add new subject in a Class](#3-add-new-subject-in-a-class)
  * [Make attendance by classname](#4-make-attendance-by-classname)
  * [Fetch all Students](#5-fetch-all-students)
  * [Add NewClass By TeacherName](#6-add-newclass-by-teachername)
  * [Add teacher](#7-add-teacher)
  * [Add student by class name](#8-add-student-by-class-name)


--------


## Default



### 1. Ffetchattendance of each Subject



***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:3000/api/v1/endpoints/fetchattendance
```



### 2. make Attendance



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/v1/endpoints/makeAttendance
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"studentName": "Souman",
	"subjectName": "JavaScript",
	"className": "Class5",
	"teacherName": "Dr. Pravin"
}
```



### 3. Add new subject in a Class



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/v1/endpoints/addSubject
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"teacherName": "Dr. Pravin",
	"className": "Class5",
	"subjectName": "JavaScript"
}
```



### 4. Make attendance by classname



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: localhost:3000/api/v1/endpoints/attendance
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"teacherName": "Dr. Pravin",
	"className": "Math"
}
```



### 5. Fetch all Students



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: localhost:3000/api/v1/endpoints/allStudents
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"teacherName": "Dr. Pravin"
}
```



### 6. Add NewClass By TeacherName



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/v1/endpoints/addClass
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"teacherName": "Dr. Pravin",
	"className": "Class5"
}
```



### 7. Add teacher



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/v1/endpoints/addTeacher/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"teacherName": "Dr. Ravin"
}
```



### 8. Add student by class name



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:3000/api/v1/endpoints/addStudent/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"className": "class4",
	"teachername": "Dr. Pratik",
	"studentName": "souman Paul"
}
```



---
[Back to top](#coursesapi)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-01-10 19:03:54 by [docgen](https://github.com/thedevsaddam/docgen)
