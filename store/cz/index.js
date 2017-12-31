export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'prvek nebo prvky z/do pole',
        desc: 'Přidá anebo odebere prvky z pole.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'prvky na konec pole',
        desc:
          'Přidá jeden nebo více prvků na konec pole a vrátí novou délku pole.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'prvky na začátek pole',
        desc:
          'Přidá jeden nebo více prvků na začátek pole a vrátí novou délku pole.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'toto pole k jinému poli/polím anebo hodnotě/hodnotám',
        desc:
          'Vrátí nové pole skládající z tohoto pole a jiných polí anebo hodnot.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'prvek nebo prvky z pole',
        desc: 'Přidá anebo odebere prvky z pole.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'poslední prvek pole',
        desc:
          'Odebere poslední prvek z pole a vrátí odebraný prvek.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'první prvek pole',
        desc:
          'Odebere první prvek z pole a vrátí odebraný prvek.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'jeden nebo více prvků pro práci beze změny pole',
        desc:
          '<code>slice()</code> metoda vrací mělkou kopii části pole do nového pole. Lze specifikovat buď pouze koncový prvek, kde výchozí hodnota je nula, anebo konec i začátek oddělené čárkou. Původní pole zůstává beze změny.',
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
        shortDesc: 'spojit všechny prvky do jednoho řetezce',
        desc: `Spojí všechny prvky pole do jednoho řetezce. Lze je spojit dohromady nebo mezi ně něco vložit, <code>elements.join(' -
          ')</code> vrátí <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'vrátit řetězec reprezentující pole',
        desc: 'Vrací řetězec reprezentující pole a jeho prvky.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'vrátit lokalizovaný řetězec reprezentující pole',
        desc:
          'Tato metoda je divná. Vrací lokalizovaný řetězec reprezentující pole a jeho prvky. To je často použitelné pro data a měny, ale má podivné vestavěné abstrakce, takže před použitím je vhodné se poradit s dokumentací.',
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
        shortDesc: 'obrátit pořadí v poli',
        desc:
          'Obrátí pořadí prvků pole - první bude poslední a poslední první.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'seřadit prvky pole',
        desc: 'Seřadí prvky pole a vrátí seřazené pole.',
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
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
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
