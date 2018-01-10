const lolex = require('lolex')

const trim = text => text.trim()
const toDoubleQuots = text => text.replace(/'/g, '"')
const isMultiLine = text => text.includes('\n')
const isCommentLine = text => text.trim().startsWith('//')
const isNonCommentLine = text => !isCommentLine(text)
const convertSingleTextLine = text => {
  const quoted = toDoubleQuots(text)
  try {
    return JSON.parse(quoted)
  } catch (err) {
    console.error('could not parse text')
    console.error(quoted)
    return
  }
}
const removeComments = text =>
  text
    .split('\n')
    .filter(isNonCommentLine)
    .join('\n')

// we need to get JavaScript data from the code text
// there might be single quotes, comments - we need to clean this up
// also each output line means there was different console.log call
const parseText = text =>
  text
    .split('\n')
    .filter(isNonCommentLine)
    .map(convertSingleTextLine)

describe('array-explorer', () => {
  let fakeClock
  beforeEach(() => {
    cy.visit('http://localhost:8080', {
      onBeforeLoad: win => {
        fakeClock = lolex.install({
          target: win,
        })
      },
    })
  })

  // utility functions
  const selectMethod = choice => cy.get('#firstmethod').select(choice)
  const selectMethodOptions = choice => cy.get('#methodoptions').select(choice)

  const confirmInputAndOutput = () => {
    cy
      .get('.exampleoutput2')
      .as('output')
      .invoke('text')
      .then(removeComments)
      .as('outputText')
      .then(parseText)
      .as('outputValues')
      .then(() => {
        fakeClock.tick(10000)
      })

    // set up spy on `console.log` before
    // we can call `eval(input code)`
    cy.spy(console, 'log')
    cy
      .get('.usage1')
      .invoke('text')
      .then(sourceCode => {
        // show message in the command log
        cy.log('evaluating', sourceCode)
        // there is one test that has hardcoded output date
        // mock clock and pass fake "Date" object into `eval`
        // to get the same date when called
        var clock = Cypress.sinon.useFakeTimers(
          new Date('12/26/2017, 6:54:49 PM').getTime()
        )
        {
          // evaluate the input code - we are already spying on console.log!
          eval('const Date = clock.Date;' + sourceCode)
        }
        // don't forget to restore system clock
        // otherwise good things will not happen
        clock.restore()
        eval(sourceCode)
      })

    // confirm console.log with expected values happened in order
    cy.get('@outputValues').then(outputValues => {
      outputValues.forEach((value, k) => {
        expect(console.log.getCall(k)).to.have.been.calledWith(value)
      })
    })

    // make sure the output text actually appears
    cy.get('@outputText').then(outputText => {
      cy.get('@output').should('have.css', 'opacity', '1')
      // the only difficulty is with multiline text where there might
      // be white space at the start of each line
      outputText
        .split('\n')
        .map(trim)
        .forEach(line => {
          cy.get('@output').should('contain', line)
        })
    })
  }

  it('loads', () => {
    cy.contains('h1', 'JavaScript Array Explorer')
  })

  it('works in Russian', () => {
    cy.get('[data-attr-cy="language"').select('Russian')
    selectMethod('удалить элементы') // remove elements
    selectMethodOptions('первый элемент массива') // first element of the array
    confirmInputAndOutput()
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
        selectMethod(method)
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
