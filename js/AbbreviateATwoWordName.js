
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

function abbrevName(name){

    console.log(name);

    let splitName = name.split(" ");

    // console.log(splitName);

    // console.log(splitName[0]);

    let output = [];

    for (let i=0; i<splitName.length; i++){

       output.push(splitName[i].charAt(0));

    }

    // console.log(output);

    return output.join(".")

}

console.log(abbrevName("Sam Harris"));//"S.H"
console.log(abbrevName("Patrick Feenan"));//"P.F"
console.log(abbrevName("Evan Cole"));//"E.C"
console.log(abbrevName("P Favuzzi"));//"P.F"
console.log(abbrevName("David Mendieta"));//"D.M"