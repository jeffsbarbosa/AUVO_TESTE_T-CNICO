/// <reference types="cypress"/>

import util from "../../../support/util"
import { Locator } from "../../../support/elements/login"
import login from "../../../support/pages/login"

describe('Testes funcionais da tela de login', () => {

    beforeEach(() => {
        util.acessarHomepage()    
    }),
   
    it('CT01 - Validar se é possível logar sem inserir dados', () => {
        cy.get(Locator.Botao.Login).click()
            .should('contain', 'Login')
            .click()
        cy.get(Locator.Texto.MensagemDeErroNoLogin).should('exist')
        
    }),

    it('CT02 - Validar se é possível logar informando somente o usuário', () => {
        cy.get(Locator.Campo.UserName).type('standard_user')
        cy.get(Locator.Botao.Login).click()
        cy.get(Locator.Texto.MensagemDeErroNoLogin).should('exist')
        
    }),

    it('CT03 - Validar se é possível logar informando somente a senha', () => {
        cy.get(Locator.Campo.Password).type('secret_sauce')
        cy.get(Locator.Botao.Login).click()
        cy.get(Locator.Texto.MensagemDeErroNoLogin).should('contain', 'Username is required')

    }),

    it('CT04 - Validar se é possível logar com usuário/senha inválidos', () => {
        cy.get(Locator.Campo.UserName).type('standard_user')
        cy.get(Locator.Campo.Password).type('standard_user')
        cy.get(Locator.Botao.Login).click()
        cy.get(Locator.Texto.MensagemDeErroNoLogin).should('contain', 'Username and password')

    }),

    it('CT05 - Validar se é possível logar com usuário bloqueado locked_out_user', () => {

        cy.get(Locator.Campo.UserName).type('locked_out_user')
        cy.get(Locator.Campo.Password).type('secret_sauce')
        cy.get(Locator.Botao.Login).click()
        cy.get(Locator.Texto.MensagemDeErroNoLogin).should('contain', 'been locked out')

    }),

    it('CT06 - Validar se é possível logar com dados válidos', () => {

        login.realizarlogin()

    }),

    it('CT07 - Realizar logout', () => {
       
        login.realizarlogout()
        
    })
})