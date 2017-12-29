export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'елемент(и) в масив',
        desc: 'Добавя и/или премахва елементи от масив.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'елементи в края на масива',
        desc:
          'Добавя един или повече елементи в края на масива и връща новата дължина на масива.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'елементи в началото на масива',
        desc:
          'Добавя един или повече елементи в началото на масива и връща новата дължина на масива.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'този масив в друг масив(и) и/или стойност(и)',
        desc:
          'Връща нов масив, съставен от този масив, свързан с друг масив(и) и/или стойност(и).',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'елемент(и) от масив',
        desc: 'Добавя и/или премахва елементи от масив.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'последният елемент на масива',
        desc: 'Премахва последния елемент от масив и връща този елемент.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'първият елемент на масива',
        desc: 'Премахва първия елемент от масив и връща този елемент.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'едно или повече елементи за употреба, оставяйки масива, както е',
        desc:
          'Методът <code>slice()</code> връща плитко копие на част от масив в нов обект от масив. Можете да посочите или само крайния елемент (откъдето започва да е по подразбиране до нула) или и началото, и края, разделени със запетая. Оригиналният масив няма да бъде променен.',
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
        shortDesc: 'присъединете всички елементи на масива към низ',
        desc: `Присъединява всички елементи на масива към низ. Можете да ги присъедините заедно, както е или с нещо между тях, <code>elements.join ('-')</code> ви дава <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'връща низ, представляващ масива',
        desc: 'Връща низ, представляващ масива и неговите елементи.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'връща локализиран низ, представляващ масива',
        desc:
          'Това е малко вълшебство. Връща локализиран низ, представляващ масива и неговите елементи. Това е много полезно за дати и валута и има някои странни местни абстракции, така че най-добре да се консултирате с документите, когато го използвате.',
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
        shortDesc: 'обръщане на реда на масива',
        desc:
          'Обръща реда на елементите на масив на място - първият става последният и последният става първият.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'сортирайте елементите на масива',
        desc: 'Сортира елементите на масив на място и връща масива.',
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'намерете дължината на масива',
        desc: 'Връща броя елементи в този масив.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'попълнете всички елементи на масива със статична стойност',
        desc:
          'Запълва всички елементи на масива от начален индекс до крайния индекс със статична стойност.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'копирайте последователност от масивни елементи в масива.',
        desc:
          'Копира последователност от масивни елементи в масива. Можете да посочите или само крайния елемент (откъдето започва да е по подразбиране до нула) или и началото, и края, разделени със запетая.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 8]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'изпълнявайки функция, която ще създам за всеки елемент',
        desc:
          'Методът forEach() изпълнява една предоставена функция веднъж за всеки елемент на масива.',
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
          'създаване на нов масив от всеки елемент с функция, която създавам',
        desc:
          'Създава нов масив с резултатите от извикването на дадена функция на всеки елемент в този масив.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'създаване на обект итератор',
        desc:
          'Връща нов обект от Array Iterator, който съдържа двойките ключ/стойност за всеки индекс в масива. Има много приложения за итераторите, както и други методи, използвани с него, като <code>values</code> и <code>keys</code>',
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
          shortDesc: 'ако има определен елемент',
          desc:
            'Определя дали даден масив съдържа определен елемент, връщайки се true или false, както е подходящо.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'първият индекс на конкретен елемент',
          desc:
            'Връща първия индекс, при който даден елемент може да бъде намерен в масива, или -1, ако то не присъства.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'последния индекс на конкретен елемент',
          desc:
            'Връща последния (най-голям) индекс на елемент в масива, равен на зададената стойност, или -1, ако не е намерен.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'първият елемент, който удовлетворява едно условие',
          desc:
            'Връща намерената стойност в масива, ако елемент в масива удовлетворява предоставената функция за тестване или недефинирана, ако не е намерена. Подобно на <code>findIndex()</code>, но връща елемента вместо индекса.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc:
            'първият индекс на елемент, който отговаря на дадено условие',
          desc:
            'Връща индекса на първия елемент в масива, който удовлетворява предоставената функция за тестване. В противен случай -1 се връща. Подобно на <code>find()</code>, но връща индекса вместо елемента.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc:
            'стойност чрез намаляване на масива, започни за да свършиш',
          desc:
            'Прилагайте функция срещу акумулатор и всяка стойност на масива (от ляво на дясно), за да го намалите до единична стойност.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc:
            'стойност чрез намаляване на масива, завърши за да започнеш',
          desc:
            'Прилагайте функция срещу акумулатор и всяка стойност на масива (от дясно на ляво), за да го намалите до единична стойност.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'стойности въз основа на състояние, което създавам',
          desc:
            'Създава нов масив с всички елементи на този масив, за които предоставената филтрираща функция връща true.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc:
            'независимо от това дали всеки елемент отговаря на дадено условие',
          desc:
            'Връща true, ако всеки елемент в този масив удовлетворява предоставената функция за тестване.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc:
            'независимо дали поне един елемент отговаря на дадено условие',
          desc:
            'Връща true, ако поне един елемент в този масив отговаря на предоставената функция за тестване.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
