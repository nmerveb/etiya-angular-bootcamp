class Course {
  constructor(courseName, category, instructor) {
    this.name = courseName;
    this.category = category;
    this.instructor = instructor;
    this.chapters = [];
    this.studentList = [];
  }

  addStudent(newStudent) {
    this.studentList.push(newStudent);
  }

  addChapter(chapterTitle, chapterType) {
    if (chapterTitle && (chapterType === "Kayit" || chapterType === "Odev" || chapterType === "Quiz")) {
      this.chapters.push(new Chapter(chapterTitle, chapterType));
    } else {
      return "Gecersiz chapterType.";
    }
  }

  showStudents() {
    console.log(this.studentList);
  }

  showChapters() {
    return this.chapters;
  }
}

class Chapter {
  constructor(chapterTitle, chapterType) {
    this.chapterTitle = chapterTitle;
    this.chapterType = chapterType;
  }
}

class CourseService {
  constructor() {
    this.courses = [];
  }

  addCourse(newCourse) {
    this.courses.push(newCourse);
  }

  showCourses() {
    this.courses.forEach((course) => {
      console.log(course.name, course.category, course.instructor, course.studentList, course.showChapters());
    });
  }
}

const courses = new CourseService();

const angular = new Course("C#-Angular", "Programlama", "Engin Demirog");
angular.addStudent("Ayse A");
angular.addStudent("Veli B");
angular.addChapter("Variables", "Kayit");
angular.addChapter("Variables", "Quiz");

courses.addCourse(angular);

const java = new Course("Java-React", "Programlama", "Engin Demirog");
const basics = new Course("Programlamaya Giris Icin Temel Kurs", "Programlama", "Engin Demirog");

courses.addCourse(java);
courses.addCourse(basics);

courses.showCourses();
