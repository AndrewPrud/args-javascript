const names = [];
let transfer = [];
let last_names = [];
let first_names = [];
let name_number = parseInt(prompt("Enter Number of Names"));
let range;

promptNames();

printNames(names);

transferLastNames(name_number,names);

sortLastNames(last_names);

findLongestName(name_number,names,last_names);

findShortestName(name_number,names,last_names);

findRange(last_names);

 console.log("The range is " + range);

 function promptNames(){
    for(let i = 0; i < name_number; i++) {
        let name = prompt("Enter Name");
        names.push(name);
    }
 }

 function printNames(names){
    for(let j of names){
        console.log(j);
    }
 }

 function transferLastNames(name_number,names) {

    for(let i = 0; i < name_number; i++){
        transfer = names[i].split(" ");
        last_names[i] = transfer[1];
       }
       return last_names;
      
 }

 function sortLastNames(last_names) {
    last_names.sort(function(a,b){return  b.length - a.length || b.localeCompare(a)});
    return last_names
 }

 function findLongestName(name_number,names,last_names) {

    for(let i = 0; i < name_number; i++){
        if(names[i].includes(last_names[0]) == true){
            console.log("The longest last name belongs to " + names[i]);
        }
    }
 }

 function findShortestName(name_number,names,last_names) {

    for(let i = 0; i < name_number; i++){
        if(names[i].includes(last_names[last_names.length-1]) == true){
            console.log("The shortest last name belongs to " + names[i]);
        }
    }
 }

 function findRange(last_names) {
    range = last_names[0].length - last_names[last_names.length-1].length;
    return range;
 }