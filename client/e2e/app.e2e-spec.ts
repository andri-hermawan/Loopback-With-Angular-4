import { Angular2StarPage } from './app.po';

describe('angular2-star App', () => {
  let page: Angular2StarPage;

  beforeEach(() => {
    page = new Angular2StarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
