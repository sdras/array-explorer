describe('array-explorer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  // utility functions
  const selectMethodOptions = choice => cy.get('#methodoptions').select(choice)
  const toDouble = text => text.replace(/'/g, '"')
  const confirmInputAndOutput = () => {
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
      // TODO remove comments from the output
      expect(console.log).to.have.been.calledWith(JSON.parse(toDouble(output)))
      cy
        .get('.exampleoutput2')
        .should('have.css', 'opacity', '1')
        .and('contain', output)
    })
  }

  it('loads', () => {
    cy.contains('h1', 'JavaScript Array Explorer')
  })

  const methods = {
    'add items or other arrays': [
      'element/s to an array',
      'elements to the end of an array',
      'elements to the front of an array',
      'this array to other array(s) and/or value(s)',
    ],
    'remove items': [
      'element/s from an array',
      'the last element of the array',
      'the first element of the array',
      'one or more elements in order for use, leaving the array as is',
    ],
    // skip "find items" - requires multiple parameters
    'walk over items': [
      'executing a function I will create for each element',
      'creating a new array from each element with a function I create',
      'creating an iterator object',
    ],
    'return a string': [
      'join all elements of the array into a string',
      'return a string representing the array.',
      'return a localized string representing the array.',
    ],
    'order an array': [
      'reverse the order of the array',
      'sort the items of the array',
    ],
    'something else': [
      'find the length of the array',
      'fill all the elements of the array with a static value',
      'copy a sequence of array elements within the array.',
    ],
  }

  Object.keys(methods).forEach(method => {
    context(method, () => {
      beforeEach(() => {
        cy.get('#firstmethod').select(method)
      })
      methods[method].forEach(secondary => {
        it(secondary, () => {
          selectMethodOptions(secondary)
          confirmInputAndOutput()
        })
      })
    })
  })
})
