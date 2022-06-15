let score_1 = parseFloat(prompt("Enter Score 1"));
let score_2 = parseFloat(prompt("Enter Score 2"));
let score_3 = parseFloat(prompt("Enter Score 3"));
let average = (score_1+score_2+score_3)/3;
if(average >= 92.5) {
    console.log( "Your Average is " + average +" which is an A");
} else if (average < 92.5 && average >= 84.5) {
    console.log( "Your Average is " + average +" which is a B");
} else if (average < 84.5 && average >= 77.5) {
    console.log( "Your Average is " + average +" which is a C");
} else if (average < 77.5 && average >= 69.5) {
    console.log( "Your Average is " + average +" which is a D");
} else if (average <= 69.5) {
    console.log( "Your Average is " + average +" which is a F");
}


