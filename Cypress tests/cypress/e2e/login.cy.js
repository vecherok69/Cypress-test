/// <reference types="cypress" />

describe('Empty email and password', () => {
  it('The alert should apears if user try to loging with blank email and password fields', () => {
    cy.viewport(1280, 720)
    
    cy.visit('/')

    cy.get(':nth-child(9) > #loginButton')
      .click();
    
    cy.get('.text-center > .btn')
      .click();

    cy.get('#emailError')
      .should('contain.text', 'Введіть коректний Email')
    
    cy.get(':nth-child(10) > .help-block')
      .should('contain.text', 'Введіть пароль')
  })
})