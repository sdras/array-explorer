export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'uno o più elementi in un array',
        desc: 'Aggunge o rimuove elementi in un array.',
        example: `arr.splice(2, 0, 'pizza');<br>
        console.log(arr);`,
        output: `[5, 1, 'pizza', 8]`
      },
      {
        name: 'push',
        shortDesc: 'elementi alla fine di un array',
        desc:
          'Aggiunge uno o più elementi alla fine di un array e restituisce la sua nuova lunghezza.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'elementi all\'inizio di un array',
        desc:
          'Aggiunge uno o più elementi all\'inizio di un array e restituisce la sua nuova lunghezza.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'altri array o valori a un array',
        desc:
          'Restituisce un nuovo array composto da questo array unito ad altri array e/o valori.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'uno o più elementi da un array',
        desc: 'Aggunge o rimuove elementi in un array.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'l\'ultimo elemento di un array',
        desc:
          'Rimuove l\'ultimo elemento di un array e restituisce tale elemento.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'il primo elemento di un array',
        desc:
          'Rimuove il primo elemento di un array e restituisce tale elemento.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'uno o più elementi da un array, lasciado intatto l\'array originale',
        desc:
          'La funzione <code>slice()</code> restituisce una copia di parte di un array in un nuovo array, lasciando l\'array originale intatto. Puoi specificare solo l\'elemento di partenza, oppure sia quello di partenza che quello finale, separati da una virgola. L\'array originale non viene modificato.',
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
        shortDesc: 'unire tutti gli elementi di un array in una stringa',
        desc: `Unisce tutti gli elementi di un arrya in una stringa. Puoi specificare cosa mettere fra gli elementi, altrimenti viene utilizzata una virgola.`,
        example: `console.log(arr.join());<br>
        console.log(arr.jion(" - "));`,
        output: `"5,1,8"<br>
        "5 - 1 - 8"`
      },
      {
        name: 'toString',
        shortDesc: 'ottenere una stringa che rappresenti l\'array',
        desc: 'Restituisce una stringa che rappresenta l\'array e i suoi elementi',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'ottenere una stringa localizzata che rappresenti l\'array',
        desc: 'Questa è una functione particolare. Restituisce una stringa localizzata che rappresenta l\'array e i suoi elementi; &egrave; molto utile quando si lavora con date o valute. Ha un funzionamento complesso, per cui si consiglia di consultare la documentazione quando la si usa.',
        example: `let date = [new Date()];<br>
        const arrString = arr.toLocaleString();<br>
        const dateString = date.toLocaleString();<br>
        console.log(arrString);<br>
        console.log(dateString);`,
        output: `"5,1,8"<br>
        "2/1/2018, 00:27:10"`
      }
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: 'invertire l\'ordine di un array',
        desc:
          'Inverte l\'ordine degli elementi di un array, modificandolo: il primo diventa l\'ultimo; l\'ultimo diventa il primo.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'ordinare gli elementi di un array',
        desc: `Ordina gli elementi di un array, modificandolo, e lo restituisce.<br>
        <br>
        <strong>Nota:</strong> Se non è specificata nessuna funzione per il confronto, gli elementi sono convertiti in stringhe e ordinati in ordine alfabetico, secondo i codici Unicode corrispondenti ai caratteri. Per esempio, "Banana" viene prima di "ciliegia". In ordine numerico 9 viene prima di 80, ma dal momento che sono convertiti in stringhe "80" viene prima di "9". Vedere la documentazione per ulteriori informazioni.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'conoscere la lunghezza di un array',
        desc: 'Restituisce il numero di elementi contenuti in un array.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'sostituire tutti gli elementi di un array con un valore dato',
        desc:
          'Sostituisce tutti gli elementi di un array, da una posizione iniziale a una finale, con un valore specificato.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'copiare una sequenza di elementi all\'interno di un array',
        desc:
          'Copia una sequenza di elementi di un array all\'interno dell\'array stesso. Si può specificare o solo l\'elemento finale (in questo caso viene utilizzato il primo come iniziale), o sia quello iniziale che quello finale, separati da una virgola.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'eseguire una funzione da me definita per ogni elemento dell\'array',
        desc:
          'Esegue una functione specificata una volta per ogni elemento di un array.',
        example: `arr.forEach((elemento) => {<br>
        <span>&nbsp;&nbsp;</span>console.log(elemento)<br>
        });`,
        output: `5<br>
        1<br>
        8`
      },
      {
        name: 'map',
        shortDesc:
          'creare un nuovo array trasformando ogni elemento con una funzione da me definita',
        desc:
          'Crea un nuovo array utilizzando i risultati ottenuti richiamando una funzione specificata per ogni elemento dell\'array originale.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'creare un oggetto di tipo Array Iterator',
        desc:
          'Restituisce un nuovo oggetto Array Iterator che contiene le coppie chiave/valore per ogni elemento dell\'array. Ci sono molti utilizzi per questo oggetto, e anche altri metodi da utilizzare insieme a <code>entries</code>, come <code>values</code> e <code>keys</code>.',
        example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
        output: `[0, 5]<br>
        <span class="comment">// 0 &egrave; il primo indice,</span><br>
        <span class="comment">// 5 &egrave; il primo numero</span>`
      }
    ],
    find: {
      single: [
        {
          name: 'includes',
          shortDesc: 'se un certo elemento esiste',
          desc:
            'Determina se un array contiene un certo elemento, restituendo <code>true</code> o <code>false</code>.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'la prima posizione di un elemento',
          desc:
            'Restituisce la prima posizione nella quale si trova un elemento uguale a quello specificato, o <code>-1</code> se non è presente.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'l\'ultima posizione di un elemento',
          desc:
            'Restituisce l\'ultima posizione (la maggiore) nella quale si trova un elemento uguale a quello specificato, o <code>-1</code> se non è presente.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'il primo elemento che soddisfa una condizione',
          desc:
            `Restituisce il primo valore dell'array che soddisfa la funzione specificata, o <code>undefined</code> se non ce n'è nessuno.<br>
            &Egrave simile a <code>findIndex</code>, ma restituisce l'elemento anziché la sua posizione.`,
          example: `let piccolo = (el) => el < 2;<br>
          console.log(arr.find(piccolo));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'la posizione del primo elemento che soddisfa una condizione',
          desc:
            `Restituisce la posizione del primo valore dell'array che soddisfa la funzione specificata, o <code>-1</code> se non ce n'è nessuno.<br>
            &Egrave simile a <code>find</code>, ma restituisce la posizione di un elemento anziché il suo valore.`,
          example: `let grande = (el) => el > 6;<br>
          console.log(arr.findIndex(grande));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'un valore a cui ridurre l\'array, dall\'inizio alla fine',
          desc:
            'Richiama una funzione con un accumulatore e ogni valore dell\'array, da sinistra a destra, per ridurlo a un singolo valore.',
          example: `let somma = (a, b) => a + b;<br>
          console.log(arr.reduce(somma));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'un valore a cui ridurre l\'array, dalla fine all\'inizio',
          desc:
            'Richiama una funzione con un accumulatore e ogni valore dell\'array, da destra a sinistra, per ridurlo a un singolo valore.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'i valori che rispettano una condizione specificata',
          desc:
            'Crea un nuovo array con tutti gli elementi dell\'array originale per i quali la funzione di filtro specificata restituisce <code>true</code>.',
          example: `let filtrato = arr.filter(el => el > 4);<br>
          console.log(filtrato)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'se ogni elemento soddisfa una condizione',
          desc:
            'Restituisce <code>true</code> se ogni elemento in questo array soddisfa il test della funzione specificata.',
          example: `let minoreDi10 = (el) => el < 10;<br>
          console.log(arr.every(minoreDi10));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'se almeno un elemento soddisfa una condizione',
          desc:
            'Restituisce <code>true</code> se almeno un elemeto in questo array soddisfa il test della funzione specificata.',
          example: `let maggioreDi4 = (el) => el > 4;<br>
          console.log(arr.some(maggioreDi4));`,
          output: `true`
        }
      ]
    }
  }
}
