import{test,expect} from "@playwright/test"
const{HomePage}=require('../page-objects/homepage.ts') 
const{Inputform}=require('../page-objects/inputform.ts') 
import urldata from "../test-data/url.json"

test('Inut form Verification',async({page})=>{
    let inputform = new Inputform(page)
    let homepage = new HomePage(page)
    await homepage.launchurl(urldata.url)
    await inputform.clickoninputform()
    console.log(await inputform.gettextcontents())
    expect(await inputform.gettextcontents()).toContain('Single Input Field')
    console.log(await inputform.showmessages())

    
})

test(' CheckBox Demo',async({page})=>{
    let inputform = new Inputform(page)
    let homepage = new HomePage(page)
    await homepage.launchurl(urldata.url)
    await inputform.clickoninputform()
    await inputform.clickOnCheckBoxDemo()
    await inputform.clickCheckBox('Check Box Four')
    expect(await inputform.isCheckBoxSelected('Check Box One')).toBe(true)

    
})