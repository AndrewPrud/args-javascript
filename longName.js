//Getting names from the user and adding them to an array
let numNames = parseInt(prompt("Enter number of names: "));
const nameList = [];
for(var i = 0; i < numNames; i++){
    nameList.push(prompt("Enter full name: "));
}

//traversing the array to find the longest last name and outputting it
let longestName;
let longestSize = 0;
for(var i = 0; i < nameList.length; i++){
    thisSize = nameList[i].substring(nameList[i].indexOf(" ")).length;
    if(thisSize > longestSize){
        longestSize = thisSize;
        longestName = nameList[i];
    }
}
console.log(longestName);

//finding the shortest last name in order to output the range in lengths of last names
let shortestSize = longestSize;
for(var j = 0; j < nameList.length; j++){
    thisSize = nameList[j].substring(nameList[j].indexOf(" ")).length;
    if(thisSize < shortestSize){
        shortestSize = thisSize;
    }
}

console.log(longestSize - shortestSize);

//outputting all the names in the list
for(var k = 0; k < nameList.length; k++){
    console.log(nameList[k]);
}
