import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.title')).getText() as Promise<string>;
  }

  clickOnSearchButton() {
    return element(by.buttonText('Search')).click() as Promise<any>;
  }

  inputDataInForm() {
    return element(by.id('search')).sendKeys('dog') as Promise <any>;
  }

  isPresentGiphes() {
    return element(by.tagName('nav')).isPresent() as Promise<any>;
  }

  clickOnNextButton() {
    return element(by.buttonText('Next')).click() as Promise<any>;
  }

  clickOnPreviousButton() {
    return element(by.buttonText('Previous')).click() as Promise<any>;
  }
}
