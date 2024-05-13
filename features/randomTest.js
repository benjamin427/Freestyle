const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor');


Given("Navigate to the url", () => {
    cy.Google_url();
})

Then("Enter a specific word", (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.TextField().type(element.random_word_1)
    })
})

Then("Click google search", () => {
    cy.GoogleSearch();
})


Given("Navigate to the url as a second attempt", () => {
    cy.Google_url();
})

Then("Enter another specific word", (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.TextField().type(element.random_word_2)
    })
})
Then("Click I feel lucky search", () => {
    cy.FeelingLucky();
})

