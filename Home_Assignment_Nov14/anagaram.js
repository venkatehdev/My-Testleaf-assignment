
let str1 = "Hello World";

function lastWordLength(str1){
    let words = str1.split(" ");
    let lastWordLength = words[words.length - 1].length;
    return lastWordLength;
}

console.log(lastWordLength(str1));

let str2 = "   fly me   to   the moon  " ;

function lastWordLength_example2(str2){
    let trimmedStr = str2.trim();
    let words = trimmedStr.split(" ");
    let lastWordLength = words[words.length - 1].length;
    return lastWordLength;
}

console.log(lastWordLength_example2(str2));


let anagramStr1 = "listen" , anagramStr2 = "silent"

function areAnagrams(str1, str2) {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams(anagramStr1, anagramStr2));
console.log(areAnagrams("hello", "world"));