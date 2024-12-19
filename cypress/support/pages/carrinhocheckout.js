import { Loc } from "../elements/selecionar_produtos";

class CarrinhoCheckout {
  Realizarprocessodecompra() {
    cy.get(Loc.Botao.AdicionarProdutoNoCarrinho)
      .should("contain", "Add to cart")
      .click();
    cy.get(Loc.Botao.BotaoCarrinho).should("contain", "1").click();

    cy.get(Loc.Texto.QuantidadeItens).should("exist");
    cy.get(Loc.Botao.BotaoCheckout).click();
    cy.get(Loc.Texto.Telainformardados).should("contain", "Your Information");
    cy.get(Loc.Campo.InserirNome).type("teste");
    cy.get(Loc.Campo.InserirSobrenome).type("teste");
    cy.get(Loc.Campo.InserirCep).type("60348080");
    cy.get(Loc.Botao.BotaoContinue).click();
    cy.get(Loc.Texto.TitulodoProduto).should("contain", "Sauce Labs Onesie");
    cy.get(Loc.Texto.ValordoProduto).should("contain", "7.99");
    cy.get(Loc.Botao.BotaoFinish).click();
    cy.get(Loc.Texto.MensagemSucessoCompra).should("contain", "Thank you");
  }
}

export default new CarrinhoCheckout();
