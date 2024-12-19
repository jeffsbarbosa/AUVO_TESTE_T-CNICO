class Util {

    acessarHomepage(){
        cy.visit('www.saucedemo.com')
        cy.get('[data-test="login-button"]').should('exist')
    }
}

export default new Util();