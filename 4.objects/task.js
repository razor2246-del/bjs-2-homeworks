function Student(name, gender, age) {
 this.name = name;
 this.gender = gender;
 this.age = age;
 this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks") === true) {
    this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if (this.marks <= 0 || this.hasOwnProperty("marks") === false) {
    return 0;
  }
  else {
    for (let i = 0; i < this.marks.length; ++i) {
      sum += this.marks[i];
    }
    return sum/this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
