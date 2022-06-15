console.log("I will find your avarge score! Pls Enter");
let hm = new Map();
let ave, add = 0;

for(let i = 1; i <= 3; i++){
    hm.set(i, parseFloat(prompt("Enter Grade " + i + ":")));
}

// find average
ave = (hm.get(1) + hm.get(2) + hm.get(3))/3;
console.log("Average:" + ave);

// find grade
if(ave >= 92.5) { console.log("Your grade is A") } else
if(ave >= 84.5) { console.log("Your grade is B") } else
if(ave >= 77.5) { console.log("Your grade is C") } else
if(ave >= 69.5) { console.log("Your grade is D") } else
{ console.log("Your grade is F") }

// I was going to use foreach. but soo many errors