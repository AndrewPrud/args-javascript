let grade1 = parseFloat(prompt("Enter grade: "));
let grade2 = parseFloat(prompt("Enter grade: "));
let grade3 = parseFloat(prompt("Enter grade: "));
let avgGrade = (grade1 + grade2 + grade3)/3;
console.log(avgGrade);
let letterGrade;

if(avgGrade > 92.5){
    letterGrade = "A";
}
else{
    if(avgGrade > 84.5){
        letterGrade = "B";
    }
    else{
        if(avgGrade > 77.5){
            letterGrade = "C";
        }
        else{
            if(avgGrade > 69.5){
                letterGrade = "D";
            }
            else{
                letterGrade = "F";
            }
        }
    }
}

console.log(letterGrade);