// Write a function that doubles every second integer in a list, starting from the left.
//
//     Example:
//
// For input array/list :
//
// [1,2,3,4]
// the function should return :
//
// [1,4,3,8]

function doubleEveryOther(nums){
    for(let i=1; i<nums.length; i+=2){//start at 1 and skip every other number and multiply it by 2
        console.log(nums[i]);
        nums[i] *= 2;
        console.log(nums[i]);
    }
    return nums;
}

console.log(doubleEveryOther([1, 2, 3, 4])); //[1,4,3,8]