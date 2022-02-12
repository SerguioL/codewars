
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let arr = str.split("");
    let x = 0;
    let o = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==="x" || arr[i]==="X"){
            x++;
        }
        else if(arr[i]==="o" ||arr[i]==="O"){
            o++;
        }
    }
    return x === o;//if x is equal to o return true else return false
}

console.log(XO('xo'));// true
console.log(XO("xxOo"));// true
console.log(XO("xxxm"));//false
console.log(XO("Oo"));// false
console.log(XO("ooom"));// false
