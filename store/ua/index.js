export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'елемент(и) до масиву',
        desc: 'Додає і/або видаляє елементи з масиву.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'елемент(и) у кінець масиву',
        desc:
          'Додає один чи більше елементів у кінець масиву и повертає новую довжину цього масиву.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'елемент(и) на початок масиву',
        desc:
          'Додає один чи більше елементів на початок масиву и повертає новую довжину цього масиву.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'цей масив до інших масивів і/чи значень',
        desc:
          'Повертає новий масив, створений із цього масиву та інших масивів і/чи значень.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'елемент(и) із масиву',
        desc: 'Додає і/або видаляє елементи з масиву.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'останній елемент масиву',
        desc:
          'Видаляє останній елемент масиву та повертає його значення.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'перший елемент масиву',
        desc:
          'Видаляє перший елемент масиву та повертає його значення.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'один чи більше елементів для використання, залишивши масив незмінним',
        desc:
          'Метод <code>slice()</code> повертає поверхневу копію масиву як новий обʼєкт масиву. Ви можете визначити лише початковий елемент (де кінець буде приймати значення з довжини масиву) або початок і кінець, розділені комою. Початковий масив залишиться без змін.',
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
        shortDesc: 'обʼєднати всі елементи масиву в стрічку',
        desc: `Об'єднує всі елементи масиву в стрічку. Ви можете об'єднати елементи за умовчуванням або використати розділовий знак, <code>elements.join(' -
          ')</code> повертає <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'повернути рядок, що представляє масив.',
        desc: 'Повертає рядок, що представляє масив та його елементи.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'повернути локалізований рядок, що представляє масив.',
        desc:
          'Цей метод трохи дивний. Повертає локалізований рядок що представляє масив і його елементи. Це дуже зручно для дат і грошових одиниць, а також має деякі незвичайні національні абстракції, тому краще звернутися до документації перед використанням. ',
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
        shortDesc: 'інвертувати порядок елементів в масиві',
        desc:
          'Змінює порядок елементів масиву на місці - перший стає останнім, а останній стає першим.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'сортувати елементи масиву',
        desc: `Сортує елементи масиву і повертає масив.<br>
        <br>
        <strong>Важлива примітка:</strong> Якщо compareFunction не вказано, елементи сортуються шляхом перетворення їх у рядки та порівняння рядків у порядку кодів Unicode. Наприклад, "банан" стане перед "вишні". У числовому стилі значення 9 стане до 80, але, оскільки числа перетворені в рядки, по "Порядку Юнікоду" "80" стане до "9". Документація має більше інформації для уточнення. `,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'знайти довжину масиву',
        desc: 'Повертає кількість елементів у цьому масиві.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'заповнити всі елементи масиву статичним значенням',
        desc:
          'Заповнює всі елементи масиву від початкового індексу до кінцевого індексу зі статичним значенням.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'копіювати послідовність елементів масиву в масиві.',
        desc:
          'Копіює послідовність елементів масиву в масиві. Ви можете вказати або тільки кінцевий елемент (де початок буде за замовчуванням до нуля) або як початок, так і кінець, розділені комами. ',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'виконуючи функцію, яку я створив для кожного елемента',
        desc:
          'Метод forEach () виконує надану функцію один раз для кожного елемента масиву.',
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
          'створення нового масиву з кожного елемента з функцією, яку я створюю',
        desc:
          'Створює новий масив з результатами виклику передбаченої функції на кожен елемент цього масиву.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: `створення об'єкта ітератора`,
        desc:
          `Повертає новий об'єкт Array Iterator, який містить пари ключ / значення для кожного індексу в масиві. Для ітераторів існує безліч застосувань, а також інші способи, що використовуються разом з ним, як, наприклад<code>values</code> та <code>keys</code>`,
        example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
        output: `[0, 5]<br>
        <span class="comment">// 0 це індекс,</span><br>
        <span class="comment">// 5 значення за індексом</span>`
      }
    ],
    find: {
      single: [
        {
          name: 'includes',
          shortDesc: 'чи певний елемент існує',
          desc:
            'Визначає, чи містить масив певний елемент, при необхідності повертаючи true або false.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'перший індекс певного елемента',
          desc:
            'Повертає перший індекс, за яким даний елемент може бути знайдено в масиві, або -1, якщо його немає.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'останній індекс конкретного елемента',
          desc:
            'Повертає останній (найбільший) індекс елемента в масиві, який дорівнює вказаному значенню, або -1, якщо нічого не знайдено.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'перший елемент, який задовольняє умовам',
          desc:
            'Повертає знайдене значення в масиві, якщо елемент у масиві задовольняє надану функцію тестування або не визначено, якщо не знайдено. Схожий на<code>findIndex()</code>, але він повертає елемент замість індексу.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'перший індекс елемента, який задовольняє умовам',
          desc:
            'Повертає індекс першого елемента в масиві, який задовольняє надану функцію тестування. В іншому випадку -1 повертається. Схожий на<code>find()</code>, але він повертає індекс замість елементу.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'значення за допомогою зменшення масиву, від початку до закінчення',
          desc:
            'Застосувати функцію до акумулятора та кожного значення масиву (зліва направо), щоб зменшити його до одного значення.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'значення за допомогою зменшення масиву, від закінчення до початку',
          desc:
            'Застосувати функцію проти акумулятора та кожного значення масиву (справа наліво), щоб зменшити його до одного значення.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'значення на основі умови яку я створюю',
          desc:
            'Створює новий масив з усіма елементами цього масиву, для якого надана функція фільтрування повертає true.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'чи не кожен елемент задовольняє умовам',
          desc:
            'Повертає true, якщо кожен елемент цього масиву задовольняє надану функцію тестування.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'чи принаймні один предмет задовольняє умовам',
          desc:
            'Повертає true, якщо принаймні один елемент цього масиву задовольняє надану функцію тестування.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
