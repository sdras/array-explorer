export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'satu atau lebih elemen ke sebuah array',
        desc: 'Menambah dan/atau menghilangkan satu atau lebih elemen dari sebuah array.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'satu atau lebih elemen pada posisi akhir dari sebuah array',
        desc:
          'Menambah satu atau lebih elemen pada posisi akhir dari sebuah array dan mengembalikan panjang array yang baru.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'satu atau lebih elemen pada posisi awal dari sebuah array',
        desc:
          'Menambah satu atau lebih elemen pada posisi awal dari sebuah array dan mengembalikan panjang array yang baru.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'array yang dipanggil ke satu atau lebih array dan/atau nilai lain',
        desc:
          'Mengembalikan sebuah array yang terdiri dari array yang dipanggil dan digabung dengan satu atau lebih array dan/atau nilai lain.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'satu atau lebih elemen dari sebuah array',
        desc: 'Menambah dan/atau menghapus satu atau lebih elemen dari sebuah array.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'elemen terakhir dari array',
        desc:
          'Menghapus elemen terakhir dari sebuah array dan mengembalikan elemen tersebut.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'elemen pertama dari array',
        desc:
          'Menghapus elemen pertama dari sebuah array dan mengembalikan elemen tersebut.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'satu atau lebih elemen secara berurutan untuk digunakan, tanpa memodifikasi array asli',
        desc:
          'Metode <code>slice()</code> mengembalikan shallow copy dari suatu bagian array ke sebuah objek array baru. Anda dapat memberi spesifikasi elemen akhirnya saja (di mana posisi awal akan dimulai dari nol) atau kedua posisi awal dan akhir, dengan koma sebagai pemisahnya. Array yang asli tidak akan dimodifikasi.',
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
        shortDesc: 'menggabungkan semua elemen dari sebuah array menjadi sebuah string',
        desc: `menggabungkan semua elemen dari sebuah array menjadi sebuah string. Anda juga dapat menggabungkannya dengan menggunakan sebuah pemisah di antara elemen-elemen tersebut. Sebagai contoh, <code>elements.join(' -
          ')</code> akan menghasilkan <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'mengembalikan sebuah string yang merepresentasikan array',
        desc: 'Mengembalikan sebuah string yang merepresentasikan array dan elemen-elemen array tersebut.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'mengembalikan sebuah string yang telah dilokalisasi yang merepresentasikan array',
        desc:
          'Mengembalikan sebuah string yang telah dilokalisasi yang merepresentasikan array beserta elemen-elemennya. Metode ini berguna untuk tanggal-tanggal dan mata uang, serta memiliki abstraksi native yang cukup aneh, sehingga sebaiknya Anda membaca dokumentasinya ketika menggunakannya.',
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
        shortDesc: 'membalikkan urutan dari array',
        desc:
          'Mengembalikan urutan dari elemen-elemen yang ada pada array di tempat — elemen pertama menjadi yang terakhir, dan elemen yang terakhir menjadi yang pertama.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'mengurutkan item-item pada array',
        desc: 'Mengurutkan elemen-elemen dari sebuah array di tempat dan mengembalikan array tersebut.',
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'menemukan panjang dari array',
        desc: 'Mengembalikan jumlah elemen pada array.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'mengisi semua elemen dari array dengan sebuah nilai statis',
        desc:
          'Mengisi semua elemen dari sebuah array mulai dari indeks awal sampai indeks terakhir dengan sebuah nilai statis.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'menyalin sebuah urutan dari elemen-elemen array di dalam array',
        desc:
          'Menyalin sebuah urutan dari elemen-elemen array di dalam array. Anda dapat memberi spesifikasi elemen akhirnya saja (di mana posisi awal akan dimulai dari nol) atau kedua posisi awal dan akhir, dengan koma sebagai pemisahnya.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'mengeksekusi sebuah fungsi yang saya buat untuk masing-masing elemen',
        desc:
          'Metode forEach() mengeksekusi fungsi yang diberikan, satu kali untuk masing-masing elemen pada array.',
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
          'membuat array baru dari masing-masing elemen dengan menggunakan fungsi yang saya buat',
        desc:
          'Membuat sebuah array baru. Array baru ini berisi hasil-hasil pemanggilan fungsi yang diberikan pada setiap elemen di dalam array.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'membuat sebuah objek iterator',
        desc:
          'Mengembalikan sebuah objek Array Iterator baru yang berisi pasangan-pasangan key/value untuk masing-masing indeks di dalam array. Ada banyak kegunaan iterator beserta metode-metode yang berhubungan dengan iterator, seperti <code>values</code> dan <code>keys</code>',
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
          shortDesc: 'apakah terdapat suatu elemen tertentu',
          desc:
            'Menentukan apakah sebuah array berisi suatu elemen tertentu. Apabila ada, ia akan mengembalikan true. Sebaliknya, ia akan mengembalikan false.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'indeks pertama dari sebuah item tertentu',
          desc:
            'Mengembalikan indeks pertama di mana suatu elemen yang diberikan dapat ditemukan di dalam array. Ia akan mengembalikan -1 apabila elemen tersebut tidak ada di dalam array.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'indeks terakhir dari sebuah item tertentu',
          desc:
            'Mengembalikan indeks terakhir (terbesar) dari sebuah elemen di dalam array yang sama dengan suatu nilai yang telah ditentukan. Ia akan mengembalikan -1 apabila tidak ada elemen dengan nilai tersebut yang ditemukan.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'elemen pertama yang memenuhi sebuah kondisi',
          desc:
            'Mengembalikan nilai yang ditemukan pada array, apabila elemen tersebut memenuhi fungsi testing yang diberikan atau undefined apabila tidak ditemukan. Serupa dengan <code>findIndex()</code>, namun metode ini mengembalikan item.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'indeks pertama dari sebuah item yang memenuhi sebuah kondisi',
          desc:
            'Mengembalikan indeks dari elemen pertama pada array yang memenuhi fungsi testing yang diberikan. Apabila tidak ada elemen yang memenuhi kondisi tersebut, maka metode ini akan mengembalikan nilai -1. Serupa dengan <code>find()</code>, namun metode ini mengembalikan indeks dari item.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'sebuah nilai dengan cara mereduksi array yang dipanggil, dari awal sampai akhir',
          desc:
            'Mengaplikasikan sebuah fungsi terhadap sebuah akumulator dan masing-masing nilai dari array (dari kiri ke kanan) untuk mereduksinya menjadi sebuah nilai.',
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'sebuah nilai dengan cara mereduksi array yang dipanggil, dari akhir sampai awal',
          desc:
            'Mengaplikasikan sebuah fungsi terhadap sebuah akumulator dan masing-masing nilai dari array (dari kanan ke kiri) untuk mereduksinya menjadi sebuah nilai.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'satu atau lebih nilai berdasarkan kondisi yang saya buat',
          desc:
            'Membuat sebuah array baru, di mana array baru tersebut terdiri dari seluruh elemen pada array yang memenuhi kondisi yang diberikan.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'apakah semua item memenuhi suatu kondisi atau tidak',
          desc:
            'Mengembalikan true apabila semua elemen pada array memenuhi fungsi testing yang diberikan.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'apakah setidaknya sebuah item memenuhi sebuah kondisi',
          desc:
            'Mengembalikan true apabila setidaknya sebuah elemen pada array memenuhi fungsi testing yang diberikan.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
