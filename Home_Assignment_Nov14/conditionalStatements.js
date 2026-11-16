let browserName
function launchBrowser(browserName){
    if(browserName==="Chrome"){
        console.log('It\'s a Chrome Browser');
    }else{
        console.log('It\'s not a Chrome Browser');
    }
}
launchBrowser("Chrome")
launchBrowser("Firefox")

let testType
function runTests(testType){
   switch(testType){
       case "Smoke":
           console.log("It's a Smoke Test");
           break;
        case "Sanity":
           console.log("It's a Sanity Test");
           break;
       case "Regression":
           console.log("It's a Regression Test");
           break;
       default:
           console.log("Dafault Smoke Test");
   }
}

runTests("Smoke")
runTests("Regression")
runTests("Sanity")
runTests("Performance")