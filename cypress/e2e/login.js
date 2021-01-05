/* eslint-disable no-undef */
describe('login', () => {
  it('should login an existing user', () => {
    cy.visit('/')

    const username = 'Bret'

    const password = '123456'

    // -- Get an input, type into it and verify that the value has been updated

    cy.get('#username').type(username).should('have.value', username)

    cy.get('#password').type(password).should('have.value', password)

    // -- Sign in user

    // Listen to GET to /users

    cy.intercept('GET', '**/users').as('login')

    cy.get('button').click()

    cy.wait('@login').should(({ response }) => {
      expect(response.statusCode).to.eq(200)

      expect(response.body).to.be.an('array')

      expect(localStorage.getItem('profile')).to.eq('Leanne Graham')
    })
  })
})
