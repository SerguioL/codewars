
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(str){

    //Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

    //[... x]
    //I use [... ] to spread the object into an array, so I can then join them together into a String
    //https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript

    return [...new Set(str.split(' '))].join(' ');
}

//different solution (not MY SOLUTION)

// const removeConsecutiveDuplicates = s => {
//     s = s.split(' ');
//     return s.filter((el, i) => !(el === s[i + 1])).join(' ');
// }

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));//'alpha beta gamma delta alpha beta gamma delta'