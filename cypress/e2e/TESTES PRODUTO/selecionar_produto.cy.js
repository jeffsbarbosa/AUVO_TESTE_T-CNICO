/// <reference types="cypress"/>

require ('cypress-xpath')
import util from "../../support/util"
import login from "../../support/pages/login"
import selecionarprodutos from "../../support/pages/selecionarprodutos"

describe('Testes para selecionar produtos e verificar seus detalhes', () => {

    beforeEach(() => {
        util.acessarHomepage()
        login.realizarlogin()  
    }),


it('CT01 - Validar se é possível selecionar um produto e verificar suas características', () => {
    selecionarprodutos.selecionarprodutos()  
       
})

it('CT02 - Validando título, valor e descrição do produto selecionado', () => {
    selecionarprodutos.validardetalhesdoproduto()   

})
    

})