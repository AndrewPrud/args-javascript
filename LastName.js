const names = [];
let name_number = parseInt(prompt("Enter Number of Names"));
for(let i; i < name_number; i++) {
    let name = prompt("Enter Name");
    names.push(name);
}
for(let j of names){
    console.log(j);
}