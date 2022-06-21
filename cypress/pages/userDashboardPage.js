const information = './cypress/e2e/information.json'

class UserDashboardPage {
    verifyUserName(userName) {
        cy.xpath("//div[contains(text(),'" + userName + "')]").contains(userName);
    }

    logout() {
        cy.xpath("//button[contains(text(),'Logout')]").click();
    }

    gotoDiscover() {
        cy.xpath("//a[contains(text(),'Discover')]").eq(0).click();
    }

    searchForBook() {
        cy.readFile(information).then((obj) => {
            cy.get('#search').type(obj.Book);
        })
        cy.xpath("//button[@type='submit']").click();
    }

    addBookInTheList() {
        cy.readFile(information).then((obj) => {
            cy.xpath("//h2[contains(text(),'" + obj.Book + "')]").click();
        })
        cy.xpath("//button[@aria-label='Add to list']").click();
    }

    gotoReadingList() {
        cy.xpath("//a[contains(text(),'Reading List')]").click();
    }
    
    verifyBookIsAddedInReadingList() {
        cy.readFile(information).then((obj) => {
            cy.xpath("//h2[contains(text(),'" + obj.Book + "')]").contains(obj.Book);
        })
    }
}
export default UserDashboardPage;