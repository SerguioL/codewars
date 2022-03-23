

function bubbleSort(arr){

    let swap = true;

    while (swap){

        swap = false;

        for(let i=0; i <arr.length -1; i++){

            if(arr[i] > arr[i + 1]){
                swap = true;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }

        }

    }

    return arr;

};

let array1 = [10, 14, 2, 23, 19];
let array2 = [12, -21, 0, 273, -19];
let array3 = [-10, 890, -263, 23, 19, 7, 23,42];
let array4 = [11, 49, 72, 223, -19];

console.log(bubbleSort(array1));//[2, 10, 14, 19, 23]
console.log(bubbleSort(array2));//[-21, -19, 0, 12, 273]
console.log(bubbleSort(array3));//[-263, -10, 7, 19, 23, 23, 42, 890]
console.log(bubbleSort(array4));//[-19, 11, 49, 72, 223]


function isPalindrome (word){

    let reverse = "";

    for(let i = word.length -1; i >= 0; i--){
        reverse += word.charAt(i);
    }

    if (reverse === word){
        return true;
    } else {
        return false;
    }

};

console.log(isPalindrome("racecar"));//ture
console.log(isPalindrome("stats"));//ture
console.log(isPalindrome("wow"));//true
console.log(isPalindrome("dog"));//false

function fizzbuzz(num){

    if((num % 3 === 0 )&& (num % 5 === 0)){
        return "fizzbuzz";
    } else if(num % 3 === 0){
        return "fizz";
    } else if(num % 5 === 0){
        return "buzz";
    }

    return num;

}

console.log(fizzbuzz(3));//"fizz"
console.log(fizzbuzz(5));//"buzz"
console.log(fizzbuzz(15));//"fizzbuzz"
console.log(fizzbuzz(2));//2
