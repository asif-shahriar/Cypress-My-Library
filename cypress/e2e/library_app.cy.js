import HomePage from "../pages/homePage"
import UserDashboardPage from "../pages/userDashboardPage"
const faker = require('faker')

describe("Test on React Library App", () => {
  const homePage = new HomePage();
  const userDashboardPage = new UserDashboardPage();
  const userName = faker.internet.userName()
  const password = faker.random.alphaNumeric(8)

  before(() => {
    cy.visit("https://ts-e2e-challenge.netlify.app/list");
  })

  it("Valid sign-up", () => {
    homePage.doRegistration(userName, password);
    userDashboardPage.verifyUserName(userName);
    userDashboardPage.logout();
  })

  it("Invalid sign up", () => {
    homePage.doRegistration(userName, password);
    homePage.verifyUserNameIsExistInRegistration();
    homePage.closingLoginOrRegistrationWindow();
  })

  it("Verifies that books are in reading list", () => {
    homePage.doLogin();
    userDashboardPage.gotoDiscover();
    userDashboardPage.searchForBook();
    userDashboardPage.addBookInTheList();
    cy.wait(3000);
    userDashboardPage.gotoReadingList();
    userDashboardPage.verifyBookIsAddedInReadingList();
  })
})