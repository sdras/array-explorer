export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: '배열에 요소를 추가하기',
        desc: '배열에서 요소를 추가하거나 제거합니다.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: '배열의 끝에 요소 추가하기',
        desc:
          '배열 끝에 한가지 이상의 요소를 추가하고 배열의 새로운 길이를 반환합니다.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: '배열의 앞에 요소 추가하기',
        desc:
          '한가지 이상의 요소를 배열 앞에 추가하고 배열의 새로운 길이를 반환합니다.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: '해당 배열을 다른 배열 및 / 또는 값으로 반환하기',
        desc:
          '다른 배열 및 / 또는 값과 결합된 새로운 배열을 반환합니다.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: '배열에 요소를 제거하기',
        desc: '배열에서 요소를 추가하거나 제거합니다.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: '배열의 마지막 요소 제거하기',
        desc:
          '배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: '배열의 첫 번째 요소 제거하기',
        desc:
          '배열에서 첫 번째 요소를 제거하고 그 요소를 반환합니다.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          '한가지 이상의 요소를 순서대로 사용하여 제거하고 원본 배열을 그대로 두기.',
        desc:
          '<code>slice()</code> 메서드는 배열의 일부에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 시작 요소만 지정하거나 시작과 끝(여기서 끝은 배열 길이로 기본 설정됩니다) 모두 쉼표로 구분하여 지정할 수 있습니다. 원래 배열은 수정되지 않습니다.',
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
        shortDesc: '배열의 모든 요소를 결합하여 문자열로 나타내기',
        desc: `배열의 모든 요소를 문자열로 결합합니다. 있는 그대로 또는 요소 사이에 무언가를 넣어서 결합할 수 있습니다. <code>elements.join(' - ')</code>은 <code>foo-bar</code>를 제공합니다.`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: '배열을 나타내는 문자열을 반환하기',
        desc: '배열과 해당 요소들을 나타내는 문자열을 반환합니다.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: '배열을 나타내는 현지화된 문자열을 반환하기',
        desc:
          '이것은 좀 터무니없지만 배열 및 해당 요소들을 나타내는 지역화된 문자열을 반환합니다. 이것은 날짜와 통화에 매우 유용하며 약간 이상한 기본 추상화를 가지고 있기 때문에 사용할 때 문서를 참조하는 것이 좋습니다.',
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
        shortDesc: '배열의 순서 뒤집기',
        desc:
          '배열의 요소의 순서를 반대로 바꿉니다. 첫 번째 요소가 마지막 요소가 되고 마지막 요소가 첫 번째 요소가 됩니다.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: '배열의 요소를 정렬하기',
        desc: `배열의 요소를 정렬하고 배열을 반환합니다.<br>
        <br>
        <strong>중요 사항:</strong> compareFunction이 제공되지 않은 경우 문자열로 변환하고 유니코드에 코드 포인트 순서의 문자열을 비교하여 요소를 정렬합니다. 예를 들어 "Banana"는 "cherry"보다 앞에 옵니다. 숫자의 경우, 9는 80보다 먼저 나오지만 숫자가 문자열로 변환되기 때문에 "80"은 유니코드 순서로 "9"보다 앞에 옵니다. 문서에 명확한 정보를 가지고 있습니다.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: '배열의 길이 알아내기',
        desc: '해당 배열의 요소 수를 반환합니다.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: '배열의 모든 요소를 정적 값으로 채우기',
        desc:
          '정적 값을 사용하여 시작 인덱스에서 종료 인덱스까지 배열의 모든 요소를 정적 값으로 채웁니다.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: '배열 내의 배열 요소 시퀀스(배열 값들) 복사하기',
        desc:
          '배열 내의 배열 요소 시퀀스(배열 값들) 복사합니다. 시작 부분(begin은 0으로 기본 설정 됨)과 끝부분을 모두 쉼표로 구분하여 지정할 수 있습니다.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: '각 요소에 대해 실행할 함수를 생성하기',
        desc:
          'forEach() 메서드는 각 배열 요소마다 한 번씩 제공된 함수를 실행합니다.',
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
          '생성한 함수를 각 요소에서 사용하여 새로운 배열 만들기',
        desc:
          '배열의 모든 요소에 대해 제공된 함수를 호출한 결과를 통해 새로운 배열을 생성합니다.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: '이터레이터 객체 만들기',
        desc:
          '배열의 각 인덱스에 대한 키 / 값 쌍을 포함하는 새로운 배열 이터레이터 객체를 반환합니다. 반복자에는 물론 값과 <code>keys</code>와 <code>values</code> 같은 여러 메서드가 결합되어 사용됩니다.',
        example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
        output: `[0, 5]<br>
        <span class="comment">// 0은 인덱스,</span><br>
        <span class="comment">// 5는 첫번째 숫자입니다</span>`
      }
    ],
    find: {
      single: [
        {
          name: 'includes',
          shortDesc: '특정 요소가 존재하는 경우 출력하기',
          desc:
            '배열에 특정 요소가 포함되는지 판별하여 적절하게 true 또는 false를 반환합니다.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: '특정 항목의 첫 번째 인덱스 찾기',
          desc:
            '지정된 요소가 배열 내에 있는 최초의 인덱스를 돌려줍니다. 존재하지 않는 경우는 -1을 리턴합니다.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: '특정 항목의 마지막 인덱스 찾기',
          desc:
            '지정된 값과 동일한 배열 내의 요소의 마지막 (최대의) 인덱스를 돌려줍니다. 발견되지 않는 경우는 -1을 리턴합니다.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: '조건을 만족시키는 첫번째 요소 찾기',
          desc:
            '배열의 요소가 제공된 테스트 함수를 충족하거나 찾지 못한 경우 undefined를 반환하며 배열에 있는 경우 발견된 값을 반환합니다. <code>findIndex()</code>와 유사하지만 인덱스 대신 요소를 반환합니다.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: '조건을 만족시키는 항목의 첫번째 인덱스 찾기',
          desc:
            '제공된 테스트 함수를 만족하는 배열의 첫 번째 요소의 인덱스를 반환합니다. 그렇지 않으면 -1이 반환됩니다. <code>find()</code>와 유사하지만 요소 대신 인덱스를 반환합니다.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: '배열의 값을 시작점부터 마지막까지 줄여나가기',
          desc:
            '누적 계산 값과 배열의 각 값에 대해 (왼쪽에서 오른쪽으로) 함수를 적용하여 단일 값으로 줄입니다.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: '배열의 값을 마지막부터 시작점까지 줄여나가기',
          desc:
            '누적 계산 값과 배열의 각 값에 대해 (오른쪽에서 왼쪽으로) 함수를 적용하여 단일 값으로 줄입니다.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: '사용자 정의 조건을 기반으로 한 값',
          desc:
            '제공된 필터 함수 참으로 반환되는 배열의 모든 요소를 새로운 배열을 생성합니다.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: '모든 항목이 조건을 만족하는지 여부',
          desc:
            '이 배열의 모든 요소가 제공된 테스트 함수를 만족하면 true를 리턴합니다.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: '적어도 하나의 항목이 조건을 만족하는지 여부',
          desc:
            '배열에 적어도 하나의 구성 요소가 제공된 테스트 함수를 만족하는 경우에 true를 리턴합니다.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
