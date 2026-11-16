let num
function isNumberType(num){
    if(num>0){
        console.log("Positive");
    } else if(num<0){
        console.log("Negative");
    } else {
        console.log("Neutral");
    }
}

isNumberType(5)
isNumberType(-10)
isNumberType(0)