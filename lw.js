/*let height = parseInt(prompt("Enter height"));
let width = parseInt(prompt("Enter width"));
let length = parseInt(prompt("Enter length"));
let volume = length * width * height;
console.log(volume); */

let score1 = parseFloat(prompt("Enter score 1"));
let score2 = parseFloat(prompt("Enter score 2"));
let score3 = parseFloat(prompt("Enter score 3"));

let averageGrade = (score1 + score2 + score3) /3;
if (averageGrade >= 92.5){
    console.log("A " + averageGrade);
}
else if (averageGrade >= 84.5 ){
    console.log("B " + averageGrade);
}
else if (averageGrade >= 77.5){
    console.log("C " + averageGrade);
}
else if (averageGrade >= 69.5){
    console.log("D " + averageGrade);
}
else {
    console.log("F " + averageGrade);
}
