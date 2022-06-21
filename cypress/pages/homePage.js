const information = './cypress/e2e/information.json'

class HomePage {
    
    doLogin() {
        cy.xpath("//button[contains(text(),'Login')]").click();
        cy.readFile(information).then((obj) => {
            cy.get('#username').type(obj.username);
            cy.get('#password').type(obj.password);
        })
        cy.get('[type="submit"]').click();
    }

    doRegistration(userName, password) {
        cy.xpath("//button[contains(text(),'Register')]").click();
        cy.get('#username').type(userName);
        cy.get('#password').type(password);
        cy.get('[type="submit"]').click();
        cy.readFile(information).then((obj) => {
            obj.username = userName
            obj.password = password
            cy.writeFile(information, obj)
        })
    }

    closingLoginOrRegistrationWindow() {
        cy.xpath("//button").eq(2).click();
    }

    verifyUserNameIsExistInRegistration() {
        cy.xpath("//pre[contains(text(),'Cannot create a new user with the username')]").contains("Cannot create a new user with the username");
    }
}
export default HomePage;