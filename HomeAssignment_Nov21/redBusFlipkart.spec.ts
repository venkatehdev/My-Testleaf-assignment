
import { webkit, chromium, test } from "playwright/test";

test('launch browser using webkit- Flipkart',async() => {

    let browser =await webkit.launch({ channel: 'webkit' })
    let context= await browser.newContext()
    let page= await context.newPage()


    await page.goto('https://www.flipkart.com/')
    let flipkartTitle = await page.title();
    console.log("Flipkart Title is : "+flipkartTitle);
    await page.waitForTimeout(5000)
   
})


test('launch browser using msedge - Redbus',async() => {

    let browser = await chromium.launch({ channel: 'msedge' })
    let context= await browser.newContext()
    let page= await context.newPage()   


    await page.goto(' https://www.redbus.in')
    let redbusTitle = await page.title();
    console.log("Redbus Title is : "+redbusTitle);
    await page.waitForTimeout(5000)
  
})

/*import {test} from "playwright/test";

test('launch browser using edge- Flipkart',async({page}) => {

    await page.goto('https://www.flipkart.com/')
    let flipkartTitle = await page.title();
    console.log("Flipkart Title is : "+flipkartTitle);
   

})


test('launch browser using webkit - Redbus',async({page}) => {

    await page.goto(' https://www.redbus.in')
    let redbusTitle = await page.title();
    console.log("Redbus Title is : "+redbusTitle);
   

})*/