// <reference types="cypress" />
import selectors from '../../fixtures/selectors.json';

describe('As an Engr. Candidate I need to automate http://www.way2automation.com/angularjs-protractor/webtables/ So that I can show my awesome automation skills', () => {
  beforeEach(() => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/');
  })

  it('Add a user and validate the user has been added to the table', () => {
    cy.get(selectors.AddUserButton).click();
    cy.get(selectors.FirstName).type("Tom");
    cy.get(selectors.LastName).type("Smith");
    cy.get(selectors.UserName).type("tsmith");
    cy.get(selectors.Password).type("14523");
    cy.get(selectors.Company).click();
    cy.get(selectors.RoleId).select("0");
    cy.get(selectors.Email).type("tsmith@gmail.com");
    cy.get(selectors.Mobile).type("+1234567");
    cy.get(selectors.OkButton).click();
    cy.get(selectors.Search).type("tsmith");
    cy.get(selectors.TableElements).should('be.visible');
  })

  it('Delete the user "novak" from the table and validate the user has been deleted', () => {

    cy.get(selectors.Remove).eq(2).click();
    cy.get(selectors.OkRemoveButton).click();
    cy.get(selectors.Elements).eq(24).should('not.have.value', 'novak');
  })

})
