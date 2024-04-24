const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

// -----------------------------------------------------------------------------------
//   Problem 10: countCalculation [1]

function countCalculation(school){
    let output = {};
    
   for(let key in school.departments){
    output.mathTeachersCount = school.departments["math"].teachers;
    output.historyTeachersCount = school.departments["history"].teachers;
    output.mathStudentsCount = school.departments["math"].students;
    output.historyStudentsCount = school.departments["history"].students;

   }
   
   return output
}
console.log(countCalculation(school));

// -----------------------------------------------------------------------------------

// Problem 11: findTopStudent [1]
function findTopStudent(school, sub){
    let max = 0;
    let topstudent = null;
    for(let key in school.students){
        
        if(max < school.students[key].scores[sub]){
            max = school.students[key].scores[sub];
            topstudent = school.students[key];
        }
    
       }
     return topstudent;
}

console.log(findTopStudent(school, 'math'))

// -----------------------------------------------------------------------------------
// Problem 12: addNewDept [1]
let art = { teachers: 2, students: 50 }

function addNewDept(school, newDepartment){
     school.departments.art = newDepartment;
     return school
}
console.log(addNewDept(school, art));

// -----------------------------------------------------------------------------------
// Problem 13: highestStudentCountDepartment[1]

function highestStudentCountDepartment(school){
    let max = 0;
    let dept = null;
    for(let key in school.departments){
        // console.log(school.departments)
        
        if(max < school.departments[key].students){
            max = school.departments[key].students;
            dept = key;
        }
    
       }
       return dept;
}
console.log(highestStudentCountDepartment(school));
// -----------------------------------------------------------------------------------

// Problem 14: Greeting Message [1]

function generateGreeting(name, language){
    let greetings = {
        "English":"Hello",
        "Spanish":"¡Hola",
        "French":"Bonjour"
    }
    return `${greetings[language]}, ${name}!`; // Corrected the template string
};

console.log(generateGreeting("Meera", "Spanish"));
