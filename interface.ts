// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


interface Subjects {
	students: number;
	teachers: number
}

interface  SchoolSubjects {
	mathematics: Subjects;
	biology: Subjects;
	geography: Subjects;
	chemistry: Subjects;
}

const subjects: SchoolSubjects = {
  mathematics: {
    students: 200,
    teachers: 6
  },
  biology: {
    students: 120,
    teachers: 6
  },
  geography: {
		students: 60,
    teachers: 2
  },
  chemistry: {
  	students: 100,
    teachers: 3
  }
}

//-------------------------1---------------------------------
// const arraySubjects = (subjects: SchoolSubjects): string => {
// 	let subjectsstring = '';
// 	subjectsstring = Object.keys(subjects).join(', ')
// 	return subjectsstring
// }

// console.log(arraySubjects(subjects));

//--------------------------2-----------------------------------

// type TotalNumberStudentsType = (subjects: SchoolSubjects) => string;

// const totalNumberStudentsAndTeachers: TotalNumberStudentsType = (subjects: SchoolSubjects) => {
//   let totalNumberStudents: number = 0;
//   let totalNumberTeachers: number = 0;
//   Object.values(subjects).forEach(item => {
//     totalNumberStudents += item.students;
//     totalNumberTeachers += item.teachers;
//   })
//   return `students ${totalNumberStudents} and teachers ${totalNumberTeachers}`
// }

// console.log(totalNumberStudentsAndTeachers(subjects));

//----------------------------3------------------------------------

// type AverageStudentsType = (subjects: SchoolSubjects) => number;

// const averageStudents: AverageStudentsType = (subjects: SchoolSubjects) => {
//   return Object.values(subjects).reduce((acc, item) => acc + item.students, 0) / Object.keys(subjects).length
// }

// console.log(averageStudents(subjects));

//-----------------------------4------------------------------------

// type ArrayOfSchoolSubjectsType = (subjects: SchoolSubjects) => Array<SchoolSubjects>


// const arrayOfSchoolSubjects: ArrayOfSchoolSubjectsType = (subjects: SchoolSubjects) => {
//   let arrSubjects = [subjects];
//   return arr;
// }

// console.log(arrayOfSchoolSubjects(subjects));

//------------------------------5---------------------------------------

// const arraySortSubjects = (subjects: SchoolSubjects) => {
//   let arrSubjects = [subjects];
//   return arrSubjects.sort()

// }

// console.log(arraySortSubjects(subjects));