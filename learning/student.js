const students = [

{name: "Aman", marks: 75},
{name: "Riya", marks: 40},
{name:"karan", marks: 55},
{name: "Neha", marks: 90},
{name:"Raj", marks: 30},

];
const pass = students.filter(s => s.marks >=50).map(s => ({name: s.name.toUpperCase(),marks:s.marks}))

const totalMarks = pass.reduce((acc,s)=> acc+s.marks,0);
const result = {
    name: pass.map(s => s.name), totalmarks: totalMarks

};
console.log(pass);
console.log(result);