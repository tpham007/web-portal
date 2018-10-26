import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLogo() {
    return element(by.id('appLogo')).getAttribute('src');
  }
}
