import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Welcome to Bancoco!');
=======
    expect(page.getTitleText()).toEqual('Welcome to BanCoco!');
>>>>>>> refs/remotes/origin/master
  });
});
