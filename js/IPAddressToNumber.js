
// An IPv4 address is a 32-bit number that identifies a device on the internet.
//
//     While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.
//
//     In this kata, you will create the function ipToNum that takes an ip address and converts it to a number, as well as the function numToIp that takes a number and converts it to an IP address string. Input will always be valid.

//original IP address
// 192.168.1.1
//
// //breaks down into 4 binary octets
// 11000000 . 10101000 . 00000001 . 00000001
//
// //which are merged together (unsigned 32-bit binary)
// 11000000101010000000000100000001
//
// //and finally converted to base 10
// 3232235777
// Note that the binary octets are unsigned (so we can't have negative numbers).
//
// Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.
//
//     Code Examples
console.log(ipToNum('192.168.1.1'));//returns 3232235777
console.log(ipToNum('10.0.0.0')); //returns 167772160
console.log(ipToNum('176.16.0.1')); //returns 2953838593

console.log(numToIp(3232235777)); //returns '192.168.1.1'
console.log(numToIp(167772160)); //returns '10.0.0.0'
console.log(numToIp(2953838593)); //returns '176.16.0.1'


console.log(numToIp(ipToNum('192.168.1.1'))); //returns '192.168.1.1'
console.log(ipToNum(numToIp(3232235777))); //returns 3232235777


function ipToNum(ip) {
    return parseInt(ip.split('.').map(v => parseInt(v).toString(2).padStart(8, '0')).join(''),2);
}

function numToIp(num) {//this function takes a int and convert it into an IP Address .mapping and RegExp \D Metacharacter https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
    return num.toString(2).padStart(32, '0').match(/\d{8}/g).map(v => parseInt(v, 2)).join('.');
}