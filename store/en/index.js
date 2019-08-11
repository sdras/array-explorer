export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'element/s to an array',
        desc: 'Adds and/or removes elements from an array.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'elements to the end of an array',
        desc:
          'Adds one or more elements to the end of an array and returns the new length of the array.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'elements to the front of an array',
        desc:
          'Adds one or more elements to the front of an array and returns the new length of the array.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'this array to other array(s) and/or value(s)',
        desc:
          'Returns a new array comprised of this array joined with other array(s) and/or value(s).',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'element/s from an array',
        desc: 'Adds and/or removes elements from an array.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'the last element of the array',
        desc:
          'Removes the last element from an array and returns that element.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'the first element of the array',
        desc:
          'Removes the first element from an array and returns that element.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'one or more elements in order for use, leaving the array as is',
        desc:
          'The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array object. You can specify either just the beginning element (where end will default to the arrays length) or both the beginning and the end, comma-separated. The original array will not be modified.',
        example: `let slicedArr = arr.slice(1);<br>
        console.log(arr);<br>
        console.log(slicedArr);`,
        output: `[5, 1, 8]<br>
        [1, 8]`
      }
    ],
    string: [
      {
        name: 'join',
        shortDesc: 'join all elements of the array into a string',
        desc: `Joins all elements of an array into a string. You can join it together as is or with something in between, <code>elements.join(' -
          ')</code> gives you <code>foo - bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'return a string representing the array.',
        desc: 'Returns a string representing the array and its elements.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'return a localized string representing the array.',
        desc:
          'This one is a bit wacko. Returns a localized string representing the array and its elements. This is very useful for dates and currency and has some strange native abstractions, so best to consult the docs when using it',
        example: `let date = [new Date()];<br>
        const arrString = arr.toLocaleString();<br>
        const dateString = date.toLocaleString();<br>
        console.log(arrString, dateString);`,
        output: `"5,1,8 12/26/2017, 6:54:49 PM"`
      }
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: 'reverse the order of the array',
        desc:
          'Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'sort the items of the array',
        desc: `Sorts the elements of an array in place and returns the array.<br>
        <br>
        <strong>Important note:</strong> If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. The docs have more information to clarify.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'find the length of the array',
        desc: 'Returns the number of elements in that array.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'fill all the elements of the array with a static value',
        desc:
          'Fills all the elements of an array from a start index to an end index with a static value.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'copy a sequence of array elements within the array.',
        desc:
          'Copies a sequence of array elements within the array. You can specify either just the ending element (where begin will default to zero) or both the beginning and the end, comma-separated.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'executing a function I will create for each element',
        desc:
          'The forEach() method executes a provided function once for each array element.',
        example: `arr.forEach((element) => {<br>
        <span>&nbsp;&nbsp;</span>console.log(element)<br>
        });`,
        output: `5<br>
        1<br>
        8`
      },
      {
        name: 'map',
        shortDesc:
          'creating a new array from each element with a function I create',
        desc:
          'Creates a new array with the results of calling a provided function on every element in this array.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'creating an iterator object',
        desc:
          'Returns a new Array Iterator object that contains the key/value pairs for each index in the array. There are a lot of uses for iterators, as well as other methods used with it in conjuction, like <code>values</code> and <code>keys</code>',
        example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
        output: `[0, 5]<br>
        <span class="comment">// the 0 is the index,</span><br>
        <span class="comment">// the 5 is the first number</span>`
      }
    ],
    find: {
      single: [
        {
          name: 'includes',
          shortDesc: 'out if a certain element exists',
          desc:
            'Determines whether an array contains a certain element, returning true or false as appropriate.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'the first index of a particular item',
          desc:
            'Returns the first index at which a given element can be found in the array, or -1 if it is not present.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'the last index of a particular item',
          desc:
            'Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'the first element that satisfies a condition',
          desc:
            'Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. Similar to <code>findIndex()</code>, but it returns the item instead of the index.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'the first index of an item that satisfies a condition',
          desc:
            'Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. Similar to <code>find()</code>, but it returns the index instead of the item.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'a value by reducing the Array, start to finish',
          desc:
            'Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'a value by reducing the Array, finish to start',
          desc:
            'Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'values based on a condition I create',
          desc:
            'Creates a new array with all of the elements of this array for which the provided filtering function returns true.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'whether or not every item satisfies a condition',
          desc:
            'Returns true if every element in this array satisfies the provided testing function.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'whether or not at least one item satisfies a condition',
          desc:
            'Returns true if at least one element in this array satisfies the provided testing function.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
