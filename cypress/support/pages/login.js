//const loc = require("../elements/login").Locator
import { Locator } from "../elements/login"


class Login {

    realizarlogin(){
        cy.get(Locator.Campo.UserName).type('standard_user')
        cy.get(Locator.Campo.Password).type('secret_sauce')
        cy.get(Locator.Botao.Login).click()
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get(Locator.Texto.MensagemDeErroNoLogin).should('not.exist')
        
    }

    realizarlogout(){   
        this.realizarlogin()
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get(Locator.Botao.Logout)
            .should('contain', 'Logout')
            .click()
        cy.get(Locator.Botao.Login).should('exist')

    }
}

export default new Login()