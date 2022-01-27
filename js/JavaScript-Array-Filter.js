// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
//
// The solution would work like the following:

//getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(nums){
    return nums.filter(num => num % 2 === 0);//loop through the nums array and if num(the current number in the loop) is divisible 2 equally then leave it if not equally divisible by 2 then remove it form the array
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));//[2,6,8,10])
console.log(getEvenNumbers([1, 2]));//[2])
console.log(getEvenNumbers([12, 14, 15]));//[12,14])
console.log(getEvenNumbers([13, 15]));//[])
console.log(getEvenNumbers([1, 3, 9]));//[])