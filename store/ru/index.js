export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'элемент(ы) в массив',
        desc: 'Добавляет и/или удаляет элементы из массива.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'элемент(ы) в конец массива',
        desc:
          'Добавляет один или более элементов в конец массива и возвращает новую длину этого массива.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'элемент(ы) в начало массива',
        desc:
          'Добавляет один или более элементов в начало массива и возвращает длину этого массива.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'этот массив к другим массивам и/или значениям',
        desc:
          'Возвращает новый массив, составленный из этого массива и других массивов и/или значений.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'элементы из массива',
        desc: 'Добавляет и/или удаляет элементы из массива.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'последний элемент массива',
        desc:
          'Удаляет последний элемент из массива и возвращает удалённый элемент.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'первый элемент массива',
        'the first element of the array',
        desc:
          'Удаляет первый элемент из массива и возвращает удалённый элемент.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'один или более элементов для использования, оставив массив неизменённым',
        desc:
          'Метод <code>slice()</code> возвращает поверхностную копию части массива как новый объект массива. Вы можете определить только конечный элемент (тогда началом будет взят нуль) либо и начальный, и конечный элемент, разделённые запятой. Изначальный массив не будет изменён.',
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
        shortDesc: 'объединить все элементы массива в строку',
        desc: `Объединяет все элементы в строку. Вы можете объединить элементы по умолчанию или использовать разделитель, <code>elements.join(' - ')</code> вернёт <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'вернуть строку представляющую массив',
        desc: 'Возвращает строку представляющую массив и его элементы.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'вернуть локализованную строку представлющую массив',
        desc:
          'Этот метод немного странный. Возвращает локализованную строку представлющую массив и его элементы. Это очень удобно для дат и денежных единиц, а также имеет некоторые необычные национальные абстракции, поэтому лучше обратиться к документации перед использованием.', example: `let date = [new Date()];<br>
        const arrString = arr.toLocaleString();<br>
        const dateString = date.toLocaleString();<br>
        console.log(arrString, dateString);`,
        output: `"5,1,8 12/26/2017, 6:54:49 PM"`
      }
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: 'обратить порядок элементов массива',
        desc:
          'Обращает порядок элементов массива на месте — первый становится последним, а последний становится первым.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'отсортировать элементы массива',
        desc: 'Сортирует элементы массива на месте и возвращает этот массив.',
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'найти длину массива',
        desc: 'Возвращает количество элементов в этом массиве.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'заполнить все элементы массива статическим значением',
        desc:
          'Заполняет все элементы массива, начиная со стартового и до конечного индекса, статическим значением',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'скопировать последовательность элементов внутри массива',
        desc:
          'Копирует последовательность элементов внутри массива. Вы можете определить только конечный элемент (тогда началом будет взят нуль) либо и начальный, и конечный элемент, разделённые запятой.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'выполнить функцию, которую я создам, над каждым элементом массива',
        desc:
          'Метод forEach() выполняет переданную функцию единожды для каждого элемента массива.',
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
          'созадть новый массив из элементов с помощью моей функции',
        desc:
          'Создаёт новый массив используя результаты вызова переданной функции для каждого элемента в этом массиве.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'создать объект-итератор',
        desc:
          'Возвращает новый объект-итератор для массива, который содержит пары ключ/значение для каждого индекса в этом массиве. Существует много способов использования этого итератора, а также методов, связаных с ним, таких как <code>values</code> и <code>keys</code>',
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
          shortDesc: 'существует ли определённый элемент',
          desc:
            'Определяет содержит ли массив определённый элемент, возвращает true или false как полагается.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'первый индекс определённого элемента',
          desc:
            'Возвращает первый индекс, в котором встречается данный элемент в массиве или -1, если элемента не существует.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'последний индекс определённого элемента'
          desc:
            'Возвращает последний (наибольший) индекс, в котором встречается данный элемент в массиве или -1, если элемента не существует.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'первый элемент соответствующий условию',
          desc:
            'Возвращает найденное в массиве значение, если элемент в массиве соответствует переданной тестирующей функции или undefined, если такой элемент не найден. Подобен <code>findIndex()</code>, но возвращает элемент вместо индекса.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'первый индекс элемента, соответствующего условию',
          desc:
            'Возвращает индекс первого элемента в массиве, который соответствует переданной тестирующей функции. В ином случае возвращает -1. Подобен <code>find()</code>, но возвращает индекс вместо элемента.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'значение, полученное сокращением массива, от начала до конца',
          desc:
            'Применить функцию к аккумулятору с каждым значением массива (слева направо), чтобы сократить его до единственного значения.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'значение, полученное сокращением массива, от конца к началу',
          desc:
            'Применить функцию к аккумулятору с каждым значением массива (справа налево), чтобы сократить его до единственного значения.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'значения, основываясь на условви, которое я создам',
          desc:
            'Создаёт новый массив со всеми элементами этого массива, для которых переданная фильтрующая функция возвращает true.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'соответствует или нет каждый элемент условию',
          desc:
            'Возвращает true, если каждый элемент в этом массиве соответствует переданной тестирующей функции.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'соответствует или нет хотя бы один элемент условию',
          desc:
            'Возращает true, если хотя бы один элемент в этом массиве соответствует переданной тестирующей функции',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
