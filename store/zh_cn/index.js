export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: '一个或多个元素到数组',
        desc: '添加、删除或替换数组中的元素。',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: '元素到数组的末尾',
        desc:
          '将一个或多个元素添加到数组的末尾，并返回数组的新长度。',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: '元素到数组的开头',
        desc:
          '将一个或多个元素添加到数组的开头，并返回数组的新长度。',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: '其他数组或值到这个数组',
        desc:
          '返回由这个数组与其他数组或值组成的新数组。',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: '数组中一个或多个元素',
        desc: '添加、删除或替换数组中的元素。',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: '数组的最后一个元素',
        desc:
          '从数组中删除最后一个元素并返回该元素。',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: '数组的第一个元素',
        desc:
          '从数组中移除第一个元素并返回该元素。',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          '一个或多个才能使用，保持原数组不变。',
        desc:
          '<code>slice()</code>方法返回一个新的数组，是对原数组部分的浅拷贝。可以只传入<code> begin </code>开始位置参数（<code> end </code>结束位置将默认为数组的长度），或者都传入<code> slice(begin, end) </code>。原数组不会被修改。',
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
        shortDesc: '把数组中的所有元素转换为字符串',
        desc: `把数组中的所有元素转换为字符串。可以按原样，或者在中间加入<code>elements.join('-')</code>返回<code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: '返回一个表示数组的字符串。',
        desc: '返回表示数组和它元素的字符串。',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: '返回表示该数组的本地化字符串。',
        desc:
          '这个有点怪。返回表示数组及其元素的本地化字符串。这对日期和货币是非常有用，有一些奇怪的原生抽象，所以最好使用时参考文档。',
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
        shortDesc: '反转数组中的元素顺序。',
        desc:
          '反转数组中元素的顺序 - 第一个变成最后一个，最后一个变成第一个。',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: '对数组中元素进行排序。',
        desc: `对数组中的元素进行排序并返回数组。<br>
        <br>
        <strong>注意：</strong>如果没有给出用于比较的函数，数组中的元素会被转换成字符串后再比较，然后以 Unicode 的顺序进行排序。在对数字进行排序的时候，9 本来应该排在 80 前面，但因为数字会被转换成字符串，而按照 Unicode 的顺序，“80”会排在“9”前面。详细信息可查看文档。`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: '查询数组的长度',
        desc: '返回数组中元素的数目。',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: '用静态值填充数组的所有元素',
        desc:
          '用一个静态值从开始索引到结束索引填充数组的所有元素。',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: '复制数组中的一系列数组元素。',
        desc:
          '复制数组中的一系列数组元素。可以只传入<code> end </code>结束位置参数（<code> begin </code>开始位置将默认为 0），或者都传入<code> copyWithin(begin, end) </code>',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: '为每个元素都执行一次回调函数。',
        desc:
          'The forEach() 方法为每个元素都执行一次回调函数。',
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
          '回调函数处理每个元素并利用返回一个新数组',
        desc:
          '通过指定函数处理数组的每个元素，并返回处理后的数组。',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: '创建一个迭代器对象',
        desc:
          'entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。迭代器有很多用途，还有其他与之结合使用的方法，如<code>values</code> 和 <code>keys</code>方法',
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
          shortDesc: '某个元素是否存在',
          desc:
            '确定数组是否包含某个元素，并根据需要返回true或false。',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: '给定元素的第一个索引',
          desc:
            '返回数组中可以找到给定元素的第一个索引，如果不存在则返回-1。',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: '给定元素的最后一个索引',
          desc:
            '返回一个给定元素最后出现的位置，如果不存在则返回-1。',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: '满足条件的第一个元素',
          desc:
            '如果数组中的元素满足提供的回调函数，则返回数组中找到的值。如果未找到，则返回undefined。类似于<code>findIndex()</code>，但它返回的是项目而不是索引。',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: '满足条件的第一个元素的索引',
          desc:
            '返回数组中满足提供的回调函数的第一个元素的索引，否则返回-1，与<code> find() </ code>类似，但它返回索引而不是项目。',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: '从头到尾将数组元素计算为一个值',
          desc:
            '接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: '从尾到头将数组元素计算为一个值。',
          desc:
            '接收一个函数作为累加器，数组中的每个值（从右到左）开始缩减，最终计算为一个值。',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: '返回符合条件所有元素的数组',
          desc:
            '创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: '每个元素是否都符合条件',
          desc:
            '如果数组中的每个元素满足指定函数，则返回true。',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: '至少有一个元素符合指定条件',
          desc:
            '如果数组中的至少一个元素满足指定函数，则返回true。',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
