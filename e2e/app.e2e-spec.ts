import { AngularSacffoldingPage } from './app.po';

describe('angular-sacffolding App', function() {
  let page: AngularSacffoldingPage;

  beforeEach(() => {
    page = new AngularSacffoldingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
