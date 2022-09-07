context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Successfully loads', () => {
    cy.url()
      .should('eq', 'http://localhost:5173/')
  })
  it('Check logo', () => {
    cy.get('img[alt="logo"]')
      .should('exist')
  })
})
