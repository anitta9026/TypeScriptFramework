import { Locator } from "@playwright/test";
export class HomePage{
    page:any;
    $icon:Locator;
    $navbar:Locator;
    $NavbarColour:Locator
    constructor(page:any){
        this.page = page;
        this.$icon = this.page.locator('(//img[@src="images/logo.png"])[1]');
        this.$navbar = this.page.locator('//ul[@class="navbar-nav"]//li');
        this.$NavbarColour = this.page.locator('//div[@class="mb-sec"]')

    }
    async launchurl(url:any) {
        await this.page.goto(url);
    }
    async islogoDisplayed() {
    return this.$icon.isVisible();
  }
  async islinksclickable() {
    let leng = await this.$navbar.count();
    console.log(leng);
    console.log(await this.$navbar.allInnerTexts());
    for (let j = 0; j < leng; j++) {
      this.$navbar.nth(j).click();
      await this.page.waitForTimeout(1000);
    }
  }

}