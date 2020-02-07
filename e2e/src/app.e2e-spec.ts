import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title', () => {
    expect(page.getTitleText()).toEqual('Welcome to GiphySearch');
  });

  it('should display Giphy`s list', () => {
    page.inputDataInForm();
    page.clickOnSearchButton();
    page.isPresentGiphes();
    page.clickOnNextButton();
    page.clickOnPreviousButton();
  });
});
