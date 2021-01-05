/* eslint-disable no-undef */
describe('login', () => {
  it('should login an existing user', () => {
    cy.visit('/')

    // Get an input, type into it and verify that the value has been updated

    cy.get('#username').type('fake_user@email.com').should('have.value', 'fake_user@email.com')

    cy.get('#password').type('123456').should('have.value', '123456')
  })
})
