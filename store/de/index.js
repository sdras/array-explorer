export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'Elemente in ein Array einfügen',
        desc: 'Fügt Elemente zu einem Array hinzu oder entfernt welche.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'Elemente an das Ende eines Arrays anhängen',
        desc:
          'Hängt ein oder mehrere Elemente an ein Array an und gibt die neue Länge des Arrays zurück.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'Elemente an den Anfang eines Arrays hinzufügen',
        desc:
          'Fügt ein oder mehrere Elemente an den Anfang eines Arrays an und gibt die neue Länge des Arrays zurück.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'dieses Array zu anderen Arrays und/oder Werten hinzufügen',
        desc:
          'Gibt einen neues Array bestehend aus diesem Array zusammen mit anderen Array(s) und/oder Werten zurück.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'Elemente aus einem Array entfernen oder hinzufügen',
        desc: 'Fügt Elemente einem Array hinzu und/oder entfernt welche.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'das letzte Element eines Arrays entfernen',
        desc: 'Entfernt das letzte Element eines Arrays und gibt es zurück.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'das erste Element eines Arrays entfernen',
        desc: 'Entfernt das erste Element eines Arrays und gibt es zurück.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        // fehlt noch
        shortDesc:
          'mindestens ein Element, ohne das eigentliche Array zu verändern, entfernen',
        desc:
          'Die <code>slice()</code>-Methode schreibt eine flache Kopie eines Teils des Arrays in ein neues Array-Objekt. Man kann entweder nur den Index für das letzte Elemente (dann wird der Index für das erste Element auf 0 gesetzt) oder sowohl den Index für das erste und das letzte Element kommagetrennt angeben. Das Original-Array wird nicht verändert.',
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
        shortDesc: 'alle Elemente eines Arrays in einen String zusammenführen.',
        desc: `Führt alle Elemente eines Arrays in einem String zusammen. Man kann die Elemente entweder mit oder ohne Trennzeichen zusammenführen. <code>elements.join(' -
          ')</code> gibt <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'einen String, der das Array repräsentiert, zurückgegeben.',
        desc:
          'Gibt einen String, der das Array und alle darin enthaltenen Elemente beinhaltet, zurück.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc:
          'einen an die Sprache angepassten String, der das Array repräsentiert, zurückgeben.',
        desc:
          'Diese Methode ist ein bisschen komisch. Sie gibt einen an die Sprache angepassten String, der das Array und alle seine Elemente beinhaltet, zurück. Dies ist sehr nützlich für Datumsangaben und Währungen, hat aber einige seltsame Verhaltensweisen, so dass du am besten die genaue Dokumentation durchlesen solltest.',
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
        shortDesc: 'die Reihenfolge eines Arrays umkehren',
        desc:
          'Kehrt die Reihenfolge der Elemente in einem Array um, das erste wird zum letzten Element, das letzte zum ersten Element.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'die Elemente in einem Array sortieren',
        desc:
          'Sortiert die Elemente eines Arrays in aufsteigender Reihenfolge.',
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'die Länge des Arrays herausfinden',
        desc: 'Gibt die Zahl aller Elemente in einem Array zurück.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc:
          'allen Elementen des Arrays einen bestimmten Wert zuweisen',
        desc:
          'Weist alle Elementen in einem Array vom Start- bis zum Endindex einen bestimmten Wert zu.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc:
          'ein Folge von Elementen des Arrays innerhalb des Arrays kopieren',
        desc:
          'Kopiert eine Reihe von Elementen des Arrays innerhalb des Arrays. Du kannst entweder nur das letzte Element (dann wird der Startindex auf 0 gesetzt) oder sowohl das erste als auch das letzte kommagetrennt festlegen.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc:
          'eine selbstdefinierte Funktion auf jedes Element des Arrays anwenden',
        desc:
          'Die <code>forEach()</code>-Methode wendet eine gegebene Funktion auf jedes Element im Array an.',
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
          'ein neues Array basierend auf einer auf alle Elemente angewendeten Funktion erstellen',
        desc:
          'Erstellt ein neues Array, dessen Elemente auf dem gegebenem Array, auf die eine gegebene Funktion angewendet wurde, basieren.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'ein Iterator-Objekt erstellen',
        desc:
          'Gibt ein Iterator-Objekt zurück, das zu jedem Index den Wert des Elements beinhaltet. Es gibt eine Vielzahl an Anwendungen für Iteratoren und andere Methoden, die in Verbindung mit Iteratoren genutzt werden, wie <code>key</code> oder <code>value</code>.',
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
          shortDesc: 'herausfinden, ob ein bestimmtes Element im Array vorkommt',
          desc:
            'Existiert ein bestimmtes Element im Array, wird true, ansonsten false, zurückgegeben.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'den ersten Index eines Elements finden',
          desc:
            'Gibt den ersten Index zurück, an dem das Element im Array gefunden werden kann, oder -1, falls es nicht im Array vorkommt.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'den letzten Index eines Elements finden',
          desc:
            'Gibt den letzten (größten) Index zurück, an dem das Element im Array gefunden werden kann, oder -1, falls es nicht im Array vorkommt.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'das erste Element, welches eine Bedingung erfüllt, finden',
          desc:
            'Gibt das erste gefundene Element aus dem Array zurück, welches die gegebene Bedingung erfüllt, wenn mindestens ein Element die gegebene Bedingung erfüllt, ansonsten wird undefined zurückgegeben. Ähnlich zu <code>findIndex()</code>, aber <code>find()</code> gibt das Element und nicht den Index zurück.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc:
            'den ersten Index eines Elements, welches eine Bedingung erfüllt, finden',
          desc:
            'Gibt den Index des ersten Elements im Array, welches die gegebene Bedingung erfüllt, zurück. Erfüllt kein Element die Bedingung, wird -1 zurückgegeben. Ähnlich zu <code>find()</code>, aber <code>findIndex()</code> gibt den Index und nicht das Element zurück.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc:
            'das Array auf einen einzigen Wert reduzieren, von links nach rechts',
          desc:
            'Reduziert das Array auf einen einzigen Wert, indem es jeweils zwei Elemente (von links nach rechts) durch eine angegebene Funktion reduziert.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc:
            'das Array auf einen einzigen Wert reduzieren, von rechts nach links',
          desc:
            'Wendet eine Funktion gegen einen Akkumulator auf jeden Wert des Arrays (von rechts nach links) an und reduziert es um einen einzelnen Wert.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc:
            'Werte basierend auf einer selbsterstellten Bedingung finden',
          desc:
            'Erstellt ein neues Array mit allen Elementen des Strings, welche eine gegebene Bedingung erfüllen.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc:
            'herausfinden, ob alle Elemente des Arrays eine Bedingung erfüllen',
          desc:
            'Gibt true zurück, wenn alle Elemente des Arrays eine gegebene Bedingung erfüllen.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc:
            'herausfinden, ob mindestens ein Element des Arrays eine Bedingung erfüllt',
          desc:
            'Gibt true zurück, wenn zumindest ein Element des Arrays eine gegebene Bedingung erfüllt.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
