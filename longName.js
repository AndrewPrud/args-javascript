function getLongest(xList){
    //traversing the array to find the longest last name and outputting it
    let longestName;
    let longestSize = 0;
    for(var i = 0; i < xList.length; i++){
        thisSize = xList[i].substring(xList[i].indexOf(" ")).length;
        if(thisSize > longestSize){
            longestSize = thisSize;
            longestName = xList[i];
        }
    }
    return longestName;
    }


function getRange(yList){
//finding the shortest last name in order to output the range in lengths of last names
let shortestSize = getLongest(yList).substring(getLongest(yList).indexOf(" ")).length;
for(var j = 0; j < yList.length; j++){
    thisSize = yList[j].substring(yList[j].indexOf(" ")).length;
    if(thisSize < shortestSize){
        shortestSize = thisSize;
    }
}
return getLongest(yList).substring(getLongest(yList).indexOf(" ")).length - shortestSize;
}


//Getting names from the user and adding them to an array
let numNames = parseInt(prompt("Enter number of names: "));
const nameList = [];
for(var i = 0; i < numNames; i++){
    nameList.push(prompt("Enter full name: "));
}

console.log(getLongest(nameList));
console.log(getRange(nameList));


//outputting all the names in the list
for(var k = 0; k < nameList.length; k++){
    console.log(nameList[k]);
}
