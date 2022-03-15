
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {

    let str = string.toLowerCase();
    let lettersOfAlphabet = "zqxjkvbpygfwmucldrhsnioate";

    for (let i = 0; i < 26; i++) { // 26 because there are 26 letter in the alphabet

    if (str.indexOf(lettersOfAlphabet.charAt(i)) == -1) {//indexOf getting index of array element, returns -1 if not found. In this if statement if we get -1 then that means that this string does not contain all the letter of the alphabet
        return false;
    }
}
    return true;

}


console.log(isPangram("The quick brown fox jumps over the lazy dog."));//, true)

console.log(isPangram("This is not a pangram."));//, false)

