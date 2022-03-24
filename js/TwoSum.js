
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//
//     For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//
//     The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {

    for(let i=0; i < numbers.length; i++){

        for(let j=i+1; j < numbers.length; j++){
            let number2 = target - numbers[i];
            if(numbers[j] === number2){
                let output = [i,j];
                return output;
            }
        }

    }

}

let array1 = [1, 2, 3];
let array2 = [1234, 5678, 9012];
let array3 = [2, 2, 3];

console.log(twoSum(array1, 4));//[0, 2]
console.log(twoSum(array2, 14690));//[1, 2]
console.log(twoSum(array3, 4));//[0, 1]
