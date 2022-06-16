let n = parseInt(prompt("Enter in the number of friends u know"));
let arr =[];
let = lastName = [];

// storing data...
for(let i = 0; i < n; i++) {
    arr.push(prompt("Enter in thier full names ex. Jihong Bae"));
}

//  Find long last name
for(let i = 0; i < arr.length-1; i++) {
    lastName.push(arr[i].substring(arr[i].charAt(" ") + 1));
}

let longest = lastName.reduce((a, b) => {a.length > b.length ? a.toString() : b.toString()});
let fullName = arr[lastName.indexOf(longest)];

// Find short last name
let shortest = lastName.reduce((a, b) => {a.length <= b.length ? a.toString() : b.toString()});

// Fing range of last name
let range = (longest.length) - (shortest.length);

// Displaying...
console.log(longest + " " + shortest);
console.log("longest last name is: " + fullName);
console.log("reange of the last names: " + range);
console.log("all names: " + arr);

// longLast(arr);

// function longLast(arr){
//     arr = this.arr;
//     for(let i = 0; i < arr.length-1; i++) {
//         lastName.push(arr[i].substring(arr[i].charAt(" ") + 1));
//     }
    
//     let longest = lastName.reduce((a, b) => {a.length > b.length ? a : b});
//     let fullName = arr[lastName.indexOf(longest)];
    
//     // Find short last name
//     let shortest = lastName.reduce((a, b) => {a.length <= b.length ? a : b});
    
//     // Fing range of last name
//     let range = (longest.length() - shortest.length());

//     return console.log("longest last name is: " + fullName + "\n reange of the last names: " + range + "\n all names: " + arr);
// }


// Prompts the user for the number of people they know
// Prompts the user for the full names of each person
// Stores all of the names into an array
// Display the full name with the longest last name
// Display the range of lengths of the names
// Display all of the names
