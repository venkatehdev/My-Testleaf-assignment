let browser ="Chrome";
function checkBrowserVersion(callback) {
    setTimeout(() => {
        callback(browser);
    }, 2000);

}


function logBrowserVersion(browserVersion) {
    console.log("Browser Version:", browserVersion);
}

checkBrowserVersion(logBrowserVersion);