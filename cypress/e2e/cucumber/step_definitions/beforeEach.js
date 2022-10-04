import MainPage from '../../../pages/MainPage';

beforeEach(() => {
    MainPage.goto('https://telnyx.com/');
    cy.CoookiesChecker();
});
