
// Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.


function findShort(s) {
    let words = s.split(' ');
    let shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);//where it starts
    return shortest.length;
}

//different solution(NOT MY SOLUTION)
// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); //3
console.log(findShort("Let's travel abroad shall we"));//2
