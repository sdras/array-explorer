import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'elemento/s em uma array',
        desc: 'Adiciona e/ou remove elementos de uma array.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'elementos no fim de uma array',
        desc:
          'Adiciona um ou mais elementos para o fim de uma array e retorna o novo comprimento dela.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'elementos no início da array',
        desc:
          'Adiciona um ou mais elementos para o início da array e retorna o novo comprimento dela.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'essa array junto com outra(s) array(s) e/ou valor(es)',
        desc:
          'Retorna uma nova array com a junção das arrays e/ou valores encadeados.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'elemento/s em uma array',
        desc: 'Adiciona e/ou remove elementos de uma array.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'O último elemento da array',
        desc: 'Remove o último elemento da array e o retorna.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'o primeiro elemento da array',
        desc: 'Remove o primeiro elemento de uma array e o retorna.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'um ou mais elementos na ordem de uso, deixando a array intacta',
        desc:
          'O método <code>slice()</code> retorna uma cópia rasa de uma porção da array dentro de um novo objeto array. Você pode especificar tanto o elemento final (onde o começo será zero por padrão) ou ambos o começo e o fim, separados por vírgula. A array original não será modificada.',
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
        shortDesc: 'junta todos os elementos da array numa string',
        desc: `Junta todos os elementos de uma array numa string. Você pode combinar os ítens como estiverem ou com algo entre eles, <code>elements.join(' -
          ')</code> resulta em <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'retorna uma string representativa da array.',
        desc: 'Retorna uma string representando a array e seus elementos.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'retorna uma string localizada representando a array.',
        desc:
          'Esse é um pouco esquisito. Retorna uma string localizada representando a array e seus elementos. É super útil para datas e moeda e tem algumas abstrações nativas, então o melhor é consutlar o manual quando for usá-la',
        example: `let date = [new Date()];<br>
        arr.toLocaleString();<br>
        date.toLocaleString();<br>
        console.log(arr, date);`,
        output: `"5,1,8 12/26/2017, 6:54:49 PM"`
      }
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: 'reverte a ordem da array',
        desc:
          'Reverte a ordem dos elementos de uma array - a primeira se torna a última, a última se torna a primeira.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'ordena os itens de uma array',
        desc: 'Ordena os elementos de uma array e retorna essa nova array.',
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'calcula o comprimento da array',
        desc: 'Returna o número de elementos dessa array.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'completa todos os elementos da array com um valor estático',
        desc:
          'Completa todos os elementos de uma array do início (index) até o fim (index) com um valor estático.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'copia uma sequência de elementos de array dentro da array.',
        desc:
          'Copia uma sequencia de elementos da array dentro da array. Você pode especificar o último elemento (onde o início será zero por padrão) ou ambos, separado por vírgula.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 8]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'executar uma função para cada elemento',
        desc:
          'O método forEach() executa uma função uma vez para cada elemento da array.',
        example: `arr.forEach((element) => {<br>
        <span>&nbsp;&nbsp;</span>console.log(element)<br>
        });`,
        output: `5<br>
        1<br>
        8`
      },
      {
        name: 'map',
        shortDesc: 'criar uma nova array de cada elemento com uma função',
        desc:
          'Cria uma nova array com o resultado da chamada de uma função que passa em cada elemento.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'criar um objeto iterator',
        desc:
          'Retorna um novo objeto Array Iterator que contém pares de chave/valor para cada índice da array. Existem vários usos para iterators, bem como outros métodos usados em conjunção com ele, como <code>values</code> e <code>keys</code>',
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
          shortDesc: 'se existe um certo elemento',
          desc:
            'Determina se a array contém um certo elemento, retornando verdadeiro ou falso conforme apropriado.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'o primeiro índice de um item em particular',
          desc:
            'Retorna o primeiro índice que pode ser encontrado na array ou -1 se não encontrado.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'o último índice de um item em particular',
          desc:
            'Retorna o último (maior) índice de um elemento dentro da array igual ao valor especificado, ou -1 se não encontrado',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'o primeiro elemento que satisfaz uma condição',
          desc:
            'Retorna o valor encontrado na array, se o elemento na array satisfaz a função dada ou undefined se não encontrado. Similar ao <code>findIndex()</code>, mas retorna o item ao invés do índice.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'o primeiro índice de um item que satisfaz uma condição',
          desc:
            'Retorna o índice do primeiro elemento de uma array que satisfaz a função dada. Do contrário retorna -1. Similar ao <code>find()</code>, mas retorna o índice ao invés do item.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'um valor ao reduzir a array, do começo ao fim',
          desc:
            'Aplica uma função a um acumulador e a cada valor da array (da esquerda pra direita) afim de reduzir a um valor só.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'um valor ao reduzir a array, do fim ao começo',
          desc:
            'Aplica uma função contra um acumulador e cada valor da array (da direita pra esquerda)afim de reduzir a um valor só.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'valores baseados numa condição que eu criei',
          desc:
            'Cria uma nova array com todo os elementos da array que passaram pela função teste.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'se todos os itens satisfazem a condição',
          desc:
            'Retorna verdadeiro se todos os elementos da array satisfazem a função dada.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'se pelo menos um item satisfaz a condição',
          desc:
            'Retorna verdadeiro se ao menos um elemento na array satisfaz a função dada.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  },
  mutations: {
    selectionMethod(state, selected) {
      state.selectedMethod = selected
    },
    resetSelection(state) {
      state.selectedMethod = ''
    }
  }
})
