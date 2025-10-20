import { Locator } from "@playwright/test"
export class Inputform{
    page:any
    $clickInput:Locator
    $textContents:Locator
    $showMessage:Locator
    $checkBox:(name:string)=>Locator
    $checkDemo:Locator
    $entervalue:Locator
    $valueDisplayed:Locator

    constructor(page:any){
        this.page = page
        this.$clickInput = this.page.locator('(//a[@href="simple-form-demo.php"])')
        this.$textContents = this.page.locator('(//div[@class="card-header"])[2]')
        this.$showMessage = this.page.locator('//button[@id="button-one"]')
        this.$entervalue = this.page.locator('//input[@placeholder="Message"]')
        this.$valueDisplayed = this.page.locator('//div[@id="message-one"]')
        this.$checkDemo = this.page.locator('//a[text()="Checkbox Demo"]')
        this.$checkBox=(name:String)=>this.page.locator(`//label[contains(text(),"${name}")]//preceding-sibling::input`)
    }
    async clickoninputform(){
        await this.$clickInput.click()

    }
    async gettextcontents(){
        return this.$textContents.textContent()


    }
     async showmessages(){
        return this.$showMessage.textContent()
    }
    async valueentered(value:string){
      let values = await this.$entervalue.fill(value)
       await this.page.waitForTimeout(1000)
       let inputentered = await this.$entervalue.inputValue()
       console.log(inputentered)

    }
    async displayedvalue(){
        await this.$showMessage.click()
        console.log(await this.$valueDisplayed.textContent())
    }
    async clickOnCheckBoxDemo(){
        await this.$checkDemo.click()
    }
    async clickCheckBox(name:string){
        await this.$checkBox(name).click()
    }
    async isCheckBoxSelected(name:string){
        return await this.$checkBox(name).isChecked()
    }


}