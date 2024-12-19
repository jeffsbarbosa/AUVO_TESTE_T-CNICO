/// <reference types="cypress"/>

import util from "../../support/util"

describe('Disponibilidade da homepage saucedemo', () => {
   
    it('CT01 - Validando se estou na homepage e se está acessível', () => {
        util.acessarHomepage()
    })
})