describe('array-explorer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('loads', () => {
    cy.contains('h1', 'JavaScript Array Explorer')
  })
  context('something else', () => {
    it('shows length of an array', () => {
      cy.get('#firstmethod').select('something else')
      cy.get('#methodoptions').select('find the length of the array')
      let output
      cy
        .get('.exampleoutput2')
        .invoke('text')
        .then(t => {
          output = t
        })
      // set up spy on `console.log` before
      // we can call `eval(input code)`
      cy.spy(console, 'log')
      cy.get('.usage1').then(v => {
        const input = v.text()
        // evaluate the input code - we are already spying on console.log!
        eval(input)
        // the value comes from DOM - so it needs to be
        // converted before we can compare it to the
        // compute value
        expect(console.log).to.have.been.calledWith(JSON.parse(output))
        cy
          .get('.exampleoutput2')
          .should('have.css', 'opacity', '1')
          .and('have.text', String(output))
      })
    })
  })
})
