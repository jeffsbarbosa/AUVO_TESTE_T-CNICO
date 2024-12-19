/// <reference types="cypress"/>

require ('cypress-xpath')
import util from "../../support/util"
import login from "../../support/pages/login"
import selecionarprodutos from "../../support/pages/selecionarprodutos"
import carrinhocheckout from "../../support/pages/carrinhocheckout"

describe('Testando a funcionalidade de adicionar produtos ao Carrinho e Checkout', () => {

    beforeEach(() => {
        util.acessarHomepage()
        login.realizarlogin()  
        selecionarprodutos.selecionarprodutos()
    })
it('CT01 - Inserindo produto no carrinho e finalizando o processo de compra', () => {
    
        carrinhocheckout.Realizarprocessodecompra()   


})









})