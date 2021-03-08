import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  // == Code par défaut ==
  /*
  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
  */

  getAppTitle() {
    return element(by.css('.navbar-brand')).getText();
  }
  /*
  // La fonction 'element()' est utilisée pour localiser un seul élément,
  // si on recherche plusieurs éléments il faudra utiliser la fonction 'element.all()'
  // l'élément prend un paramètre, un localisateur, qui décrit comment trouver l'élément.

  // By est une collection de stratégies de localisation d'éléments

  */
  async sendKeysToInputFirstNameByName(text: string) {
    return await element(by.name('nom')).sendKeys(text);
  }

  async sendKeysToInputLastNameByName(text: string) {
    return await element(by.name('prenom')).sendKeys(text);
  }
  async clickOnSaveBtn() {
    // return await element(by.buttonText('Ajouter')).click();
    return await element(by.xpath('//div[5]/button')).click();
    // On utilise 'xpath' qui va descendre du body pour récuper le 5° bouton
  }
  async checkAllInserts() {
    let a = await element.all(by.css('.list-group li span'))
    .count();
    return a;
  }
  async getTextContentByIndex(spanIndex: number) {
    let list = element.all(by.css('.list-group li span'));
    return list.get(spanIndex).getText();
  }
  async clickOnDeleteBtn(btnIndex: number) {
    let list = element.all(by.css('.list-group li button'));
    return list.get(btnIndex).click();
  }

}
