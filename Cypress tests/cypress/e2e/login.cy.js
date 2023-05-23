/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('The hints should appears if user try to logging with blank email and password fields', () => {
    
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