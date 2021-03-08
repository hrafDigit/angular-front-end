import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(async() => {
    page = new AppPage();

    // == Code à ajouter ==
    await browser.waitForAngularEnabled(true);
    await browser.get('/home');
    await browser.driver.manage().window().maximize();
  });

  // n.B. 'it'  => débute un test
  // == Code par défaut ==
  /*
  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('angular-front-end app is running!');
  });
  */

  //Cas 1
  it('should display the name of the application', async () => {
    expect(await page.getAppTitle()).toContain('Session Angular');
  });

  // Cas 2
  it('should add values to the ngForm', async () => {
    await browser.get('/templateform');
    await page
    .sendKeysToInputFirstNameByName('John');
    await page
    .sendKeysToInputLastNameByName('Wick');
    await page.clickOnSaveBtn();
    expect(await page.getTextContentByIndex(0))
    .toContain('John Wick');
    expect(await page.checkAllInserts())
    .toBeGreaterThan(0);
    expect(await page.checkAllInserts())
    .toBe(1);
  });

  // Cas 3
  it('should add values to the ngForm', async () => {
    await browser.get('/templateform');

    await page
    .sendKeysToInputLastNameByName('Wick');
    await page
    .sendKeysToInputFirstNameByName('John');
    await page.clickOnSaveBtn();

    await page
    .sendKeysToInputLastNameByName('Baton');
    await page
    .sendKeysToInputFirstNameByName('Jean');
    await page.clickOnSaveBtn();

    expect(await page.getTextContentByIndex(0))
    .toContain('John Wick');
    expect(await page.getTextContentByIndex(1))
    .toContain('Jean Baton');

    expect(await page.checkAllInserts())
    .toBeGreaterThan(0);
    // expect(await page.checkAllInserts())
    // .toBe(1);
    expect(await page.checkAllInserts())
    .toBe(2);

    // !! WARNING !!
    // la valeur du premier btn à reset doit être à 1...
    // sinon, c'est 0 par défaut -> erreur !
    await page.clickOnDeleteBtn(1);
    await page.clickOnDeleteBtn(0);

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
