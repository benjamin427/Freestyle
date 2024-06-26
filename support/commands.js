// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("GoogleSearch", () => {
    cy.get("btnK").should('be.visible');
    cy.get("#btnK").click({force: true}).contains("Google Search");
})

Cypress.Commands.add("FeelingLucky", () => {
    cy.get("#btnI").should('be.visible');
    cy.get("#btnI").click({force: true}).contains("I'm Feeling lucky");
})

Cypress.Commands.add("Google_url", () => {
    cy.visit("http://www.google.com");
})

Cypress.Commands.add("EnteringRandomText", () => {
    cy.get(".gLFyf").type("testing 123").should('be.visible')
})

Cypress.Commands.add("TextField", () => {
    cy.get(".gLFyf").should('be.visible');
})