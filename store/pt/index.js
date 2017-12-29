export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'elemento(s) no array',
        desc: 'Adiciona e/ou remove elementos do array.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'elementos no final do array',
        desc:
          'Adiciona um ou mais elementos no final do array e retorna o novo tamanho do array.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'elementos no início do array',
        desc:
          'Adiciona um ou mais elementos no início do array e retorna o novo tamanho do array.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'este array a outro(s) array(s) e/ou valor(es)',
        desc:
          'Retorna um novo array incluindo este array concatenado de outro(s) arrays e/ou valor(es).',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'elemento(s) no array',
        desc: 'Adiciona e/ou remove elementos do array.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'o último elemento do array',
        desc:
          'Remove o último elemento do array e retorna o elemento.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'o primeiro elemento do array',
        desc:
          'Remove o primeiro elemento do array e retorna o elemento.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'um ou mais elementos, mantendo o array original sem alterações',
        desc:
          'O método <code>slice()</code> retorna uma cópia rasa de parte do array em um novo objeto array. Você pode especificar apenas o índice final (deixando o índice inicial assumir o valor padrão zero), ou ambos, o índice inicial e o índice final separados por vírgula. O array original não será modificado.',
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
        shortDesc: 'unir todos os elementos do array em uma string.',
        desc: `Une todos elementos do array em uma string. Você pode unir todos os itens sem delimitadores, ou com algum delimitador entre os elementos, <code>elements.join(' -
          ')</code> retorna <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'retornar uma string representando o array.',
        desc: 'Retorna uma string representando um array e seus elementos.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'retornar uma string localizada representando o array.',
        desc:
          'Retorna uma string localizada representando um array e seus elementos. É muito útil para datas e moedas com características específicas do locale, recomendo consultar a documentação quando utilizar esta função.',
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
        shortDesc: 'inverter a ordem do array',
        desc:
          'Inverte a ordem dos elementos do array modificando o array — o primeiro elemento se torna o último, e o último se torna o primeiro.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'ordenar os itens do array',
        desc: 'Orderna os itens do array modificando o array e retorna o próprio array.',
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'retornar o comprimento do array',
        desc: 'Retorna o número de elementos existentes no array.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'preencher todos os elementos do array com um valor estático',
        desc:
          'Preenche todos os elementos do array de um índice inicial até um índice final com valores estáticos.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'copiar parte do array dentro do mesmo array.',
        desc:
          'Copia parte do array para outra localização dentro deste mesmo array e o retorna, sem alterar seu tamanho. Você pode especificar o índice final (deixando o índice inicial assumir o valor padrão zero), ou ambos, o índice inicial e o índice final separados por vírgula',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 8]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'executando uma função sobre cada elemento',
        desc:
          'O método <code>forEach()</code> executa uma função fornecida como parâmetro para cada elemento do array.',
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
          'criando um novo array a partir de cada elemento transformado via uma função',
        desc:
          'Cria um novo array com o resultado da chamada da função para cada elemento no array.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'criando um objeto iterator',
        desc:
          'Retorna um novo objeto do tipo Array Iterator que contém pares de chave/valor para cada índice do array. Há diversos usos para iterators, assim como há outros métodos análogos, como o método <code>values</code> e o método <code>keys</code>',
        example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
        output: `[0, 5]<br>
        <span class="comment">// o 0 é o índice,</span><br>
        <span class="comment">// o 5 é o primeiro número</span>`
      }
    ],
    find: {
      single: [
        {
          name: 'includes',
          shortDesc: 'se um dado elemento existe',
          desc:
            'Verifica se um array contém um certo elemento, retornando true ou false.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'o primeiro índice de um elemento',
          desc:
            'Retorna o primeiro índice no qual um dado elemento pode ser encontrado no array, ou retorna -1 se não existe o item.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'o último índice de um elemento',
          desc:
            'Retorna o último (maior) índice no qual um dado elemento pode ser encontrado no array, ou retorna -1 se não existe o item.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'o primeiro elemento que satisfaz a condição',
          desc:
            'Retorna o valor econtrado no array, se um elemento no array satisfaz o teste da função fornecida como parâmetro, ou retorna undefined se não encontrado. Similar ao método <code>findIndex()</code>, porém esta função retorna o item ao invés do índice.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'o primeiro índice de um elemento que satisfaz a condição',
          desc:
            'Retorna o índice do primeiro elemento no array que satisfaz o teste da função fornecida como parâmetro. Senão, o valor -1 é retornado. Similar ao método <code>find()</code>, porém esta função retorna o índice ao invés do item.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'um valor através da redução do array, início ao fim',
          desc:
            'Aplica uma função sobre um acumulador e cada elemento do array (da esquerda para direita) até reduzir a um único valor.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'um valor através da redução do array, fim ao ínicio',
          desc:
            'Aplica uma função sobre um acumulador e cada elemento do array (da direta para esquerda) até reduzir a um único valor.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'um valor baseado numa condição que eu criei',
          desc:
            'Cria um novo array com todos os elementos do array que satisfazem o teste da função fornecida como parâmetro.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'se todos elementos satisfazem uma condição',
          desc:
            'Retorna true se todos elementos no array satisfazem o teste da função fornecida como parâmetro.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'se pelo menos algum elemento satisfaz uma condição',
          desc:
            'Retorna true se pelo menos um elemento no array satisfaz o teste da função fornecida como parâmetro.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}