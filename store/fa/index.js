export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'آیتم (ها)ی به آرایه',
        desc: 'اضافه کردن یا حذف برخی از آیتم ها به آرایه',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'آیتم هایی به اخر آرایه',
        desc:
          'یک یا چند آیتم به آخر آرایه اضافه می کند و طول جدید آرایه رو بر میگرداند',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'آیتم هایی به اول آرایه',
        desc:
          'یک یا چند آیتم به اول آرایه اضافه می کند و طول جدید آرایه رو بر میگرداند',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'این آرایه به آریه (ها)ی دیگر یا / و مقدار های دیگر',
        desc:
          'یک آرایه متشکل از این آرایه و آریه (ها)ی دیگر یا مقادیر دیگر بر میگرداند',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'المان(ها)ی یم آرایه',
        desc: 'المان هایی به آرابه اضافه یا حدف می کنند',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'آخرین المان یک آرایه',
        desc:
          'آخرین المان یک آرایه را حذف میکند و المان را بر میگرداند',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'اولین المان یک آرایه',
        desc:
          'اولین المان یک آرایه را حذف میکند و المان را بر میگرداند',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'یک یا چند المان به ترتیب برای استفاده، آرایه را به همان شکل که هستند ترک می کنند',
        desc:
          'متد <code>slice()</code> یک کپی از بخشی از یک آرایه را به یک آرایه دیگر بر می گرداند.  شما میتونید تعین کنید که فقط اول آرایه (که در این شرایط خود به خود طول آرایه به عنوان نقطه ی شروع انتخاب می شود.) یا میتونید هم اول و هم اخرش با کاما از هم جدا کنید. آرایه ی اصلی تغیر داده نمی شود (where end will default to the arrays length) or both the beginning and the end, comma-separated. The original array will not be modified.',
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
        shortDesc: 'اضافه کردن تمام ایتم های آرایه به یک رشته',
        desc: `اضافه کردن تمام ایتم های آرایه به یک رشته. شما میتونید تمام آرایه را به همانی شکلی که هست اضافه کنید یا چیزی بین ایتم های قرار دهید، <code>elements.join()' -
          ')</code> gives you <code>foo - bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'بازگشت یک رشته به نمایندگی یک آرایه',
        desc: 'بازگشت یک رشته به نمایندگی یک آرایه و ایتم هایش',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'یک رشته محلی شد را به نمایندگی از آرایه برمی گرداند',
        desc:
        'این یکی کمی گیج کننده است. یک رشته محلی را که آرایه و المان آن را نشان می دهد برمی گرداند. این برای تاریخ و ارز بسیار مفید است و دارای رفتار های عجیبی است، بنابراین بهتر است هنگام استفاده از آن نگاهی هم به داکیومنتش کنید.',
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
        shortDesc: 'بلعکس کردن ترتیب ارایه',
        desc:
          'ترتیب ایتم های یک آرایه را بلعکس میکند. به طوری که ایتم اول اخر و ایتم اخر اول قرار میگیرد',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'آیتم های آرایه را مرتب میکند',
        desc: `آیتم های آرایه را مرتب میکند و ارایه مرتب شده را بر میگرداند<br>
        <br>
        <strong>نکته مهم:</strong> .اگر تابع برای مرتب کردن تعریف نشده باشد, المان ها با تفیرشان به رشته و مقایسه شان با کد یونیکد هر المان انجام میگیرد. برای اطلاعات بیشتر به داکیومنت مراجعه کنید`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'پیدا کردن طول آرایه',
        desc: 'تعداد المان های آرایه را برمی گرداند',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'تمام المان های آرایه را با یک مقدار ثابت پر میکند',
        desc:
          'تمام المان های یم آرایه را از شروع یک ایندکس تا پایان اندکسی دیگر با یک مقدار خاص  پر میشود.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'دنباله ای از المان ها آرایه را در آرایه کپی می کند.',
        desc:
          'دنباله ای از المان آرایه را در آرایه کپی می کند. شما می توانید فقط یا المان پایانی را مشخص کنید (که در آن ابتدا به طور پیش فرض صفر خواهد بود) و یا هر دو ابتدا و پایان را که با کاما از هم جدا شده اند.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'اجرای یک تابع روی تک تک المان های یک رشته',
        desc:
          'این متد، یک تابع را روی تک تک المان های یمک آرایه به ترتیب اجرا می کند',
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
          'با استفاده از تابعی که مشخص کردم، از هر المان یک ارایه جدید میسازد',
        desc:
          'ساخت یک ارایه جدید با استفاده از تابع مشخص شده برای هر المان از آرایه ی  اصلی',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'ساخت یک شی اشاره گر',
        desc:
          'یک شی آرایه شامل یک شی به ازای هر المان، به صورتی که کلید و مقدار برای هر المان آرایه است. موارد استفاده ی شی اشارگر زیاد است., همچنین متد های که با آن در اینجکشن استفاده میشود, مانند <code>values</code> و <code>keys</code>',
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
          shortDesc: 'بازگرداند درست اگر یک المان در آرایه موجود باشد',
          desc:
            'مشخض میکند که ایا یک آرایه داری یک المان است یا نه و درست یا نادرست را بر اساس ان باز میگرداند',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'اولین اندکس ایتم مورد نظر',
          desc:
            'اولین اندکسی که ایتم مورد نظز در آن پیدا شود را باز میگراند، اگر موجحود نباشد -1 را برمیگرداند',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'اخرین اندکس ایتم مورد نظر',
          desc:
          'اخرین اندکسی که ایتم مورد نظز در آن پیدا شود را باز میگراند، اگر موجحود نباشد -1 را برمیگرداند',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'اولین ایتمی که شرایط مورد نظر را دارد',
          desc:
            'مقدار پیدا شده در آرایه را بر میگرداند, به شرطی که مقدار مورد نظر دارای شروط لازم باشد. مانند <code>findIndex()</code>, ولی به جای ایندکس خود ایتم را بر میگرداند',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'ایندکس اولین ایتمی که با شرایط تطابق دارد',
          desc:
            'ایندکس اولین ایتمی در ارایه که داری شروط مورد نظر است را بر میگرداند. در غیر اینصورت مقدار -1 برگردانده می شود.همانند <code>find()</code>, ولی ایندکس را به جای خود ایتم برمیگرداند',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'مقداری از تمام المان های ارایه، از شروع به پایان',
          desc:
            'تابعی را در برابر یک انباشتگر و هر مقدار آرایه (از چپ به راست) اعمال کنید تا آن را به یک مقدار کاهش دهید.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'مقداری از تمام المان های ارایه، از پایان به شروع',
          desc:
            'تابعی را در برابر یک انباشتگر و هر مقدار آرایه (از راست به چپ) اعمال کنید تا آن را به یک مقدار کاهش دهید.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'مقدار ها بر اساس شروطی که من تعین میکنم',
          desc:
            'یک ارایه جدید میسازد با تمام المان هایی که در شرط تعین شده قابل قبول اند',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'که ایا تمام ایتم ها با شروط مورد نظر تطبق دارند یا نه',
          desc:
            'درست برمیگدارند اگر تک تک ایتم های آرایه شرط مورد نظر را داشته باشند.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'ایا یک ایتم شرایط مورد نظر دارد یا نه',
          desc:
            'درست را بر میگراند اگر حداقل یک ایتم با شرایط مورد نظر پیدا شود',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
