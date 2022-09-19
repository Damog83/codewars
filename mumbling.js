const { format } = require("prettier");

function accum(s) {

const stringArray = [];

for(let i = 0; i < s.length; i++) {
    stringArray.push(format(s[i], i +1))
    
}

function format(letter, i) {

    let letterString = letter.toUpperCase();

    while(letterString.length < i ) {
        letterString += letter.toLowerCase();
    }
    return letterString;
}

return stringArray.join('-');
}

module.exports = accum;