//const loc = require("../elements/login").Locator
//import { Locator } from "../elements/login"
import { Loc } from "../elements/selecionar_produtos"


class SelecionarProdutos {

    selecionarprodutos(){
        cy.get(Loc.Texto.DescricaodoProduto).should('contain', 'Rib snap infant onesie')
        cy.xpath(Loc.Botao.EscolherProdutoSauceLabsOnesie)
            .should('have.text', 'Sauce Labs Onesie')
            .click()
        
    }

    validardetalhesdoproduto(){   
       cy.xpath(Loc.Botao.EscolherProdutoSauceLabsOnesie)
            .should('have.text', 'Sauce Labs Onesie')
            .click()
       cy.get(Loc.Texto.TitulodoProduto).should('have.text', 'Sauce Labs Onesie')
       cy.get(Loc.Texto.ValordoProduto).should('contain', '7.99')
       cy.get(Loc.Texto.DescricaodoProduto).should('contain', 'Rib snap infant onesie')

    }
}

export default new SelecionarProdutos()