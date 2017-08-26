import { BsowaPage } from './app.po';

describe('bsowa App', () => {
  let page: BsowaPage;

  beforeEach(() => {
    page = new BsowaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
