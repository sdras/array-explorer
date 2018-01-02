export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'element/en aan een array',
        desc: 'Voegt een element toe aan een array of verwijderd een element van een array.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'element aan het einde van een array',
        desc: 'Voegt een of meerdere elementen toe aan het einde van een array en geeft de nieuwe lengte van de array terug.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'element aan het begin van een array',
        desc: 'Voegt een of meerdere elementen toe aan het begin van een array en geeft de nieuwe lengte van de array terug.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'deze array aan (een) andere array(s) en/of waarde(s)',
        desc: 'Geeft een nieuwe array terug bestaande uit deze array samengevoegd met andere array(s) en/of waarde(s).',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'element/en van een array',
        desc: 'Voegt een element toe aan een array of verwijderd een element van een array.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'laatste element van een array',
        desc:
          'Verwijderd het laatste element van een array en geeft dat element terug.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'the first element of the array',
        shortDesc: 'het eerste element van een array',
        desc:
          'Verwijderd het eerste element van een array and geeft dat element terug.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc: 'een of meerdere elementen in de huidige volgorde, zonder dat de array wordt aangepast,',
        desc:
          'De <code>slice()</code> methode geeft een kopie van een gedeelte van de array terug in een nieuwe array. Je kan kiezen  voor het beginnende element (waar het einde standaard gelijk is aan de lengte van de array) opgeven of zowel het begin als einde opgeven, gescheiden met een komma. De orginele array wordt niet aangepast.',
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
        shortDesc: 'alle elementen van een array samenvoegen als string',
        desc: 
        `Voegt alle elementen van een array samen tot een string. Je kan het samenvoegen zoals het is of met iets er tussen, <code>elements.join(' - ')</code> gives you <code>foo-bar</code>.`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'een array weergeven als string',
        desc: 'Geeft de array en de elementen daarvan weer als string.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'return a localized string representing the array.',
        shortDesc: 'een array weergeven als taal string',
        desc:
          'Dit is een gekke. Deze functie geeft de array en de elementen daarvan weer als een taal string. Dit kan heel nuttig zijn voor datums en valuta en heeft wat vreemde abstracties, dus het beste is om de documentatie te raadplegen wanneer je deze functie gebruikt.',
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
        shortDesc: 'de volgorde van een array omkeren',
        desc:
          'Keert de volgorde van de elementen in een array om waar het eerste element het laatste element wordt en vice versa.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'elementen van een array sorteren',
        desc: 'Sorteert de elementen van een array en geeft de array vervolgens terug.',
        desc: `Sorts the elements of an array in place and returns the array.<br>
        <br>
        <strong>Belangrijke opmerking:</strong> Als de compareFunction niet is toegepast, dan worden elementen gesorteerd door middel van conversie naar strings en worden deze vergeleken in Unicode code point volgorde. Bijvoorbeeld, "Banaan" komt voor "kers". In nummeriek volgorde, komt 9 voor 80, maar omdat nummers geconverteerd worden naar strings, komt "80" voor "9" in Unicode order. De documentatie heeft meer informatie om het te verduidelijken.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'de lengte van een array vinden',
        desc: 'Geeft het aantal elementen in een array terug.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'Alle elementen van een array vullen met een statische waarde',
        desc:
          'Vult alle elementen van een array met een statische waarde.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'een kopie van de volgorde van array elementen maken binnen de array',
        desc:
          'Maakt een kopie van de volgorde van array elementen binnen de array. Je kan er voor kiezen om het eind element te kiezen (Waar het begin standaard 0 is) of zowel begin tot eind te kiezen, met een komma gescheiden. ',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'een functie uit te voeren voor elk element',
        desc:
          'De forEach() methode voert eenmalig een functie uit voor elk element in de array.',
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
          'een nieuwe array te maken van elk element met een functie die uitgevoerd wordt',
        desc:
          'Maakt een nieuwe array aan met het resultaat van de uitgevoerde functie van elk element in de array.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'een iteratie object aan te maken',
        desc:
          'Geeft een nieuw array iteratie object terug dat de sleutel/waarde koppelt voor elke index in de array. Er is veel mogelijk met intereren, in samenwerking met andere methodes, zoals ook  <code>values</code> en <code>keys</code>.',
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
          shortDesc: 'of een element bestaat in de array',
          desc:
            'Bepaald of een array een bepaald element bevat, en geeft vervolgens true of false terug voor de uitkomst.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'de eerste index van een bepaald element',
          desc:
            'Geeft de eerst komende index terug van het gegeven element, of geeft -1 terug als het element niet gevonden kan worden.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'de laatste index van een bepaald element',
          desc:
            'Geeft de laatst mogelijke index terug van het gegeven element, of geeft -1 terug als het element niet gevonden kan worden.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'het eerste element dat overeenkomt met de conditie',
          desc:
           'Geeft de waarde terug uit de array, als het element in de array overeenkomt met de conditie die aangegeven is, en geeft anders undefined terug als er geen element gevonden is. Ongeveerd hetzelfde als <code>findIndex()</code> maar dit geeeft de waarde van het element terug in plaats van de index.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'de eerste index van een element dat overeenkomt met de conditie',
          desc:
            'Geeft de index terug van het eerste element uit de array dat overeenkomt met de conditie die aangegeven is, en anders -1 terug geeft. Ongeveer hetzelfde als <code>find()</code>, maar dit geeft de index terug in plaats van de waarde van het element.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'een waarde door het verkleinen van de array, van begin tot eind',
          desc:
            'Pas een functie toe op een verzameling en elke waarde in de array (van links naar rechts) aan door het te verkleinen in een enkele waarde.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'een waarde door het verkleinen van de array, van eind tot begin',
          desc:
            'Pas een functie toe op een verzameling en elke waarde in de array (van rechts naar links) door het te verkleinen in een enkele waarde.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'waardes gebaseerd op een conditie die ik toepas',
          desc:
            'Maakt een nieuwe array met alle elementen van deze array waarbij de conditie overeenkomt en true terug geeft.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'of alle waardes in een array overeenkomen met de conditie die ik stel',
          desc:
            'Geeft true terug als elk element in de array overeenkomt met de opgegeven conditie.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'of een waarde in een array overeenkomt met de conditie die ik stel',
          desc:
            'Geeft true terug als er minimaal een element in de array overenekomt met de opgegeven conditie.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
