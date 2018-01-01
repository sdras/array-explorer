export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'element/elemente u niz',
        desc: 'Dodaje i/ili uklanja elemente iz niza.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'elemente na kraj niza',
        desc:
          'Dodaje jedan ili više elemenata na kraj niza i vraća novu dužinu niza.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'elemente na početak niza',
        desc:
          'Dodaje jedan ili više elemenata na početak niza i vraća novu dužinu niza.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'ovaj niz sa drugim nizom/nizovima i/ili vrednošću/vrednostima',
        desc:
          'Vraća novi niz koji se sastoji od ovog niza i drugog niza/nizova i/ili vrednosti.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'element/elemente iz niza',
        desc: 'Dodaje i/ili uklanja elemente iz niza.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'poslednji element niza',
        desc:
          'Uklanja poslednji element iz niza i vraća taj element.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'prvi element niza',
        desc:
          'Uklanja prvi element iz niza i vraća taj element.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'jedan ili više elemenata za upotrebu, ostavljajući niz onakvim kakav jeste',
        desc:
          '<code>Slice()</code> metod vraća plitku kopiju porcije niza u novi objekat niza. Možete odrediti ili krajnji element (gde će početak podrazumevano biti nula) ili i početnu i krajnju vrednost, odvojene zarezom. Originalni niz će ostati neizmenjen.',
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
        shortDesc: 'pridružim sve elemente niza u jedan string.',
        desc: `Pridružuje sve elemente niza u jedan string. Možete ih pridružiti zajedno onakve kakvi jesi, ili sa nečim između, npr. <code>elements.join(' -
          ')</code> proizvodi <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'vratim string koji predstavlja niz.',
        desc: 'Vraća string koji predstavlja niz i njegove elemente.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'vratim lokalizovan string koji predstavlja niz.',
        desc:
          'Ovo je pomalo čudno. Vraća lokalizovan string koji predstavlja niz i njegove vrednosti. Ovo je veoma korisno za datume i valute, i ima neke čudne prirodne apstrakcije, tako da je najbolje konsultovati dokumentaciju pri njegovom korišćenju.',
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
        shortDesc: 'okrenem redosled niza',
        desc:
          'Preokreće redosled elemenata datog niza — prvi element postaje zadnji, a zadnji postaje prvi.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'sortiram elemente niza',
        desc: 'Sortira elemente datog niza i vraća niz.',
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'pronađem dužinu niza',
        desc: 'Vraća broj elemenata datog niza.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'popunim sve elemente niza statičkom vrednošću',
        desc:
          'Popunjava sve elemente niza od početnog indeksa do krajnjeg indeksa sa statičkom vrednošću.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'kopiram sekvencu elemenata nizu unutar niza.',
        desc:
          'Kopira sekvencu elemenata niza unutar niza. Možete odrediti ili krajnji element (gde će početak podrazumevano biti nula) ili i početnu i krajnju vrednost, odvojene zarezom.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'izvršavanju funkcije koju ću da kreiram za svaki element',
        desc:
          'forEach() metod izvršava datu funkciju nad svakim elementom niza jedanput.',
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
          'kreiranju novog niza od svakog elementa sa funkcijom koju kreiram',
        desc:
          'Kreira novi niz sa rezultatima pozvane funkcije nad svakim elementom u ovom nizu.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'kreiranjem iterator objekta',
        desc:
          'Vraća novi Array Iterrator objekat koji sadrži key/value parove za svaki indeks u nizu. Postoji dosta upotreba iteratora, kao i drugih metoda u sprezi sa njima, kao npr. <code>values</code> i <code>keys</code>',
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
          shortDesc: 'ako postoji određeni element',
          desc:
            'Ustanovljava da li niz sadrži određeni element, vraćajuću true ili false vrednosti.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'prvi indeks određenog elementa',
          desc:
            'Vraća prvi indeks na kom se dati element može pronaći u nizu, ili -1 ako on nije prisutan.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'zadnji indeks određenog elementa',
          desc:
            'Vraća zadnji (najveći) indeks određenog elementa u nizu koji je jednak određenoj vrednosti, ili -1 ako nijedan nije pronađen.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'prvi element koji zadovoljava određen uslov',
          desc:
            'Vraća pronađenu vrednost unutar niza, ako element u nizu zadovoljava datu test funkciju ili undefined ako nije pronađen. Slično kao <code>findIndex()</code>, s tim što vraća vrednost umesto indeks.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'prvi indeks elementa koji zadovoljava određen uslov',
          desc:
            'Vraća indeks prvog elementa u nizu koji zadovoljava datu test funkciju. U suprotnom vraća -1. Slično kao <code>find()</code>, s tim što vraća indeks umesto vrednosti.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'vrednost redukujući niz, od početka do kraja',
          desc:
            'Primenjuje funkciju na akumulator i svaku vrednost niza (sa leva na desno) kako bi je smanjio na jednu vrednost.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'vrednost redukujući niz, od kraja do početka',
          desc:
            'Primenjuje funkciju na akumulator i svaku vrednost niza (sa desna na levo) kako bi je smanjio na jednu vrednost.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'vrednosti na osnovu uslova koji ja zadam',
          desc:
            'Kreira novi niz sa svim elementima ovog niza za koji data filter funkcija vraća true.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'da li svaki element zadovoljava određen uslov ili ne',
          desc:
            'Vraća true ako svaki element u ovom nizu zadovoljava datu test funkciju',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'da li barem jedan element zadovoljava određen uslov ili ne',
          desc:
            'Vraća true ako barem jedan element u ovom nizu zadovoljava datu test funkciju',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
