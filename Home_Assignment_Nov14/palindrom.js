
function reverseString(str) {
    let ch=str.split("");
    let resvers= "";
    for (let i = ch.length - 1; i >= 0; i--) {
        resvers += ch[i];
    }
    console.log("Reversed String:", resvers);
    return resvers;
}

function isPalindrome(str) {
    let reversedStr = reverseString(str);
    if (str === reversedStr) {
        console.log(str + " is a palindrome.");
        return true;
    }else {
        console.log(str + " is not a palindrome.");
        return false;
    }
}

isPalindrome("racecar");
isPalindrome("radar");
isPalindrome("hello");
