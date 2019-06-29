export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: '配列へ要素を追加 かつ/または 削除',
        desc: '配列へ要素を追加する かつ/または 削除します。',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: '配列の末尾へ要素を追加',
        desc:
          '一つ以上の要素を配列の末尾へ追加し、新しい配列の長さを返します。',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: '配列の先頭へ要素を追加',
        desc:
          '一つ以上の要素を配列の先頭へ追加し、新しい配列の長さを返します。',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: '他の配列 および/または 値と結合された新しい配列を得る',
        desc:
          'この配列と、他の配列 および/または 値と結合された新しい配列を返します。',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: '配列へ要素を追加 かつ/または 削除',
        desc: '配列へ要素を追加する かつ/または 削除します。',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: '配列の最後の要素を取り出して削除',
        desc:
          '配列の最後の要素を返し、元の配列からはこの要素を削除します。',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: '配列の最初の要素を取り出して削除',
        desc:
          '配列の最初の要素を返し、元の配列からはこの要素を削除します。',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          '元の配列はそのままに、一つ以上の要素を削除した配列を得る',
        desc:
          '<code>slice()</code> メソッドは配列の一部のコピーから新しい配列を作成して返します。開始位置だけ指定しても、開始位置と終了位置の両方をカンマ区切りで指定しても構いません。元の配列に変化はありません。',
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
        shortDesc: '配列内の全ての要素を結合して文字列にする',
        desc: `配列の全ての要素を結合した文字列を返します。そのまま結合することもできますし、間に挟む文字を指定することもできます。<code>elements.join(' -
          ')</code> は <code>foo-bar</code> を返します。`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: '配列を表す文字列を返す',
        desc: '配列を表す文字列を返します。',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: '配列を表すローカライズされた文字列を返す',
        desc:
          'これはちょっと変わったやつです。配列とその要素を表すローカライズされた文字列を返します。日付や通貨を扱うのにとても便利ですが、独特なネイティブの抽象化があります。使用するときはドキュメントを参照してください。',
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
        shortDesc: '配列を逆順に並べ替える',
        desc:
          '配列をその場で逆順に並べ替えます — 最初の要素は最後に、最後の要素は最初になります。',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: '配列をソートする',
        desc: `配列の要素をその場でソートし、ソート済みの配列を返します。<br>
        <br>
        <strong>重要:</strong> 比較用の関数が指定されない場合、要素は文字列に変換された状態におけるUnicodeでの並び順にソートされます。たとえば "Banana" は "cherry" の前に来ます。数値のソートであれば 9 が 80 の前に来ますが、数値が文字列に変換されるとUnicode順になるので "80" は "9" よりも前に来ます。詳しくはドキュメントを参照してください。`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: '配列の長さを返す',
        desc: '配列内の要素の数を返します。',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: '静的な値で配列の全ての要素を埋める',
        desc:
          '配列内の開始インデックスから終了インデックスまでの全要素を、静的な値で置き換えます。',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: '配列内の連続した要素を同じ配列内にコピーする',
        desc:
          '配列内の連続した要素を同じ配列内にコピーします。終了位置の要素だけを指定してもよいですし (開始位置はデフォルト 0 になります) 、開始位置と終了位置の両方をカンマ区切りで指定しても構いません。',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: '各要素に対し関数を実行する',
        desc:
          'forEach() メソッドは、指定された関数を各要素に対し1回ずつ実行します。',
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
          '各要素を関数に通した結果から新しい配列を作成する',
        desc:
          '配列内の各要素に対し、与えられた関数を実行した結果をもとに、新しい配列を作成します。',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'イテレータオブジェクトを作成する',
        desc:
          '配列のインデックスに用いられるキー/バリューのペアを含む、新しい配列イテレータオブジェクトを返します。<code>values()</code> や <code>keys()</code> のような、一緒に使われるメソッドと同様に、イテレータの用途はさまざまです。',
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
          shortDesc: 'ある要素が含まれているかどうかを知る',
          desc:
            '配列が特定の要素を含んでいるかを判断し、true または false を返します。',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: '指定した要素の最初のインデックスを得る',
          desc:
            '指定された要素が配列内に現れる最初のインデックスを返します。もし存在しなければ、-1 を返します。',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: '指定した要素の最後のインデックスを得る',
          desc:
            '指定された要素が配列内に現れる最後の (最大の) インデックスを返します。もし存在しなければ、-1 を返します。',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: '条件に合致する最初の要素を得る',
          desc:
            '指定された関数の条件を満たす、配列内の最初の要素を返します。該当する要素がなければ undefined を返します。<code>findIndex()</code>に似ていますが、インデックスの代わりに要素そのものを返します。',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: '条件に合致する最初の要素のインデックスを得る',
          desc:
            '指定された関数の条件を満たす、配列内の最初の要素のインデックスを返します。該当する要素がなければ -1 を返します。<code>find()</code>に似ていますが、要素そのものの代わりにインデックスを返します。',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: '配列を最初から最後までreduceした値を得る',
          desc:
            '配列内の各値とアキュムレータに対し、関数を左から右へ適用して単一の値にします。',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: '配列を最後から最初までreduceした値を得る',
          desc:
            '配列内の各値とアキュムレータに対し、関数を右から左へ適用して単一の値にします。',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: '指定した条件に合致する値を得る',
          desc:
            '配列内の全要素のうち、フィルタ関数が true を返す要素を使って新しい配列を作成します。',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: '全ての要素が条件に合致するかどうかを知る',
          desc:
            '配列内の全ての要素が、指定された関数の条件に合致する場合、true を返します。',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: '一つでも条件に合致する要素が存在するかどうかを知る',
          desc:
            '配列内に、一つでも指定された関数の条件に合致する要素が存在する場合、true を返します。',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
