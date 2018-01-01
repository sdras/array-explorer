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
          '<code>slice()</code> metoda vrací mělkou kopii části pole do nového pole. Lze specifikovat buď pouze koncový prvek, kde počáteční pozice je nula, anebo konec i začátek oddělené čárkou. Původní pole zůstává beze změny.',
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
        shortDesc: 'zjistit délku pole',
        desc: 'Vrátí počet prvků v poli.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'přiřadit všem prvkům pole statickou hodnotu',
        desc:
          'Přiřadí všem prvkům pole statickou hodnotu.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'zkopírovat řadu prvků v poli uvnitř pole',
        desc:
          'Zkopíruje řadu prvků pole uvnitř pole. Lze specifikovat buď koncový prvek, kde počáteční pozice je nula, anebo počateční i koncový prvek, oddělené čárkou.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'spuštění funkce nad každým prvkem',
        desc:
          'forEach() metoda spustí předdefinovanou funkci jednou nad každým prvkem pole.',
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
          'funkce, která vytvoří nové pole ze všech prvků',
        desc:
          'Vytvoří nové pole, které je výsledkem volání definované funkce nad každým prvkem.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'iteračního objektu',
        desc:
          'Vrátí nový iterátor pole, který obsahuje klíč-hodnota pár pro každou pozici v poli. Iterátor má mnoho případů užití jak samostatně, tak ve spojení s jinými metodami jako <code>values</code> nebo <code>keys</code>',
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
          shortDesc: 'prvek pokud existuje',
          desc:
            'Zjistí jestli existuje daný prvek v poli a podle toho vrátí true nebo false.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'první výskyt daného prvku',
          desc:
            'Vrátí první výskyt daného prvku nebo -1 pokud prvek nenalezne.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'poslední výskyt daného prvku',
          desc:
            'Vrátí poslední výskyt daného prvku nebo -1 pokud prvek nenalezne.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'první prvek, který splňuje podmínku',
          desc:
            'Vrátí nalezenou hodnotu v poli, pokud prvek v poli odpovídá definované testovací funkci nebo undefined pokud nenalezne. Podobné jako <code>findIndex()</code>, ale vrací prvek místo pozice.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'první výskyt prvku, který splňuje podmínku',
          desc:
            'Vrátí pozici prvního prvku v poli, který splňuje definovanou testovací funkci. V ostatních případech vrací -1. Podobné jako <code>find()</code>, ale vrací pozici místo prvku.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'hodnotu po redukci pole z leva do prava',
          desc:
            'Použije funkci na střadač (accumulator) a každou hodnotu pole (z leva do prava) redukuje do jedné hodnoty.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'hodnotu po redukci pole z prava do leva',
          desc:
            'Použije funkci na střadač (accumulator) a každou hodnotu pole (z prava do leva) redukuje do jedné hodnoty.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'hodnoty, které splňují mnou vytvořenou podmínku',
          desc:
            'Vytvoří nové pole se všemi prvky pole, pro které definovaná filtrovací funkce vrátí hodnotu true.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'jestli všechny prvky splňují podmínku',
          desc:
            'Vrací true pokud každý prvek odpovídá definované testovací funkci.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'jestli alespoň jeden prvek splňuje podmínku',
          desc:
            'Vrací true pokud alespoň jeden prvek odpovídá definované testovací funkci.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
