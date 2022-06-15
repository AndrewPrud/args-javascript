let n = prompt("Enter in the number of friends u know");
let arr, ln = [];

// storing data...
while(true) {
    arr.push(prompt("Enter in thier full names ex. Jihong Bae"));
    n--;
    if(n==0) {
        break;
    }
}

// dysplay the long last name
for(let i = 0; i < arr.length()-1; i++) {
    ln.push(arr[i].substring(charAt("")));
}