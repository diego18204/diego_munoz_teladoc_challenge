// <reference types="cypress" />

describe('As an Engr. Candidate I need to automate http://www.way2automation.com/angularjs-protractor/webtables/ So that I can show my awesome automation skills', () => {
  beforeEach(() => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/')
  })

  it('Add a user and validate the user has been added to the table', () => {

    cy.get('.btn-link.pull-right').click();
    cy.get('[name=FirstName]').type("Tom");
    cy.get('[name=LastName]').type("Smith");
    cy.get('[name=UserName]').type("tsmith");
    cy.get('[name=Password]').type("14523");
    cy.get(`[value='15']`).click();
    cy.get(`[name=RoleId]`).select("0");
    cy.get('[name=Email]').type("tsmith@gmail.com");
    cy.get('[name=Mobilephone').type("+1234567");
    cy.get('.btn-success').click();
    cy.get('input.pull-right').type("tsmith");
    cy.get('td.smart-table-data-cell').should('be.visible');
  })

  it('Delete the user "novak" from the table and validate the user has been deleted', () => {

    cy.get('.icon-remove').eq(2).click();
    cy.get('button.ng-scope.btn-primary').click();
    cy.get('.smart-table-data-cell').eq(24).should('not.have.value', 'novak')
  })

})
