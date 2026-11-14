const browserName="Chrome"

function getBrowserVersion() {
if(browserName=="Chrome"){
  var browserVersion="Chrome verision 157"
  console.log("Browser name is inside the function if block: " , browserVersion)

  let browserVersion1="Chrome verision 156"
  console.log("Let Browser version is inside function if block: " , browserVersion1)
}
 console.log("Browser version is inside the function outside if block: " ,browserVersion)
 //console.log("Let Browser version is inside function outside if block: " , browserVersion1)
console.log("Browser name is inside the function outside if block: " , browserName)
}
 
getBrowserVersion()
console.log("Browser name is outside the function: " , browserName)