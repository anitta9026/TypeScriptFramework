import{test,expect} from "@playwright/test"
const{HomePage} =require('../page-objects/homepage.ts')
import urldata from "../test-data/url.json"

test('Home Page Verification',async({page})=>{
    let homepage = new HomePage(page)
    await homepage.launchurl(urldata.url)
    expect(await homepage.islogoDisplayed()).toBe(true)
    
})

