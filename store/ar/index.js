export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'عنصر أو أكثر للمصفوفة',
        desc: 'تضيف و/أو تحذف عناصر من المصفوفة.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'عناصر إلى نهاية المصفوفة',
        desc:
          'إضافة عنصر أو أكثر إلى نهاية المصفوفة وتعيد الطول الجديد للمصفوفة.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'عناصر إلى بداية المصفوفة',
        desc:
          'إضافة عنصر أو أكثر إلى بداية المصفوفة وتعيد الطول الجديد للمصفوفة.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'هذه المصفوفة إلى مصفوفة أو أكثر و/أو قيمة أو أكثر',
        desc:
          'تعيد المصفوفة المكونة من هذه المصوفة مع مصفوفة أو أكثر و/أو قيمة أكثر الأخرى.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'عنصر أو أكثر من المصفوفة',
        desc: 'تضيف و/أو تحذف عناصر من المصفوفة.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'العنصر الأخير في المصفوفة',
        desc: 'تحذف العنصر الأخير في المصفوفة وتعيد هذا العنصر.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'العنصر الأول من المصفوفة',
        desc: 'تحذف العنصر الأول من المصفوفة وتعيد هذا العنصر.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'عنصر أو أكثر من المصفوفة للاستخدام ، تاركة المصفوفة الأصلية كما هي',
        desc:
          'الدالة <code>slice()</code> تعيد نسخة مصغرة لجزء من مصفوفة إلى عنصر مصفوفة جديد . بإمكانك إما تحديد العنصر الأخير ( حيث أن العنصر الأول الافتراضي سيكون صفر ) أو بإمكانك تحديد البداية والنهاية, مفصولين بفاصلة , comma-separated. المصفوفة الأصلية لن يتم تعديلها.',
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
        shortDesc: 'دمج جميع عناصر المصفوفة في سلسلة نصية واحدة',
        desc: `دمج جميع عناصر المصفوفة في سلسلة نصية . بإمكانك دمجهم مع بعض كماهم أو مع فاصل بينهم, <code>elements.join(' -
          ')</code> تعطيك <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'تعيد سلسلة نصية تمثل هذه المصفوفة.',
        desc: 'تعيد سلسلة نصية تمثل المصفوفة وعناصرها.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'تعيد سلسلة نصية (محلية- تمثل البلد الحالي ) تمثل المصفوفة.',
        desc:
          'هذه الدالة فيها قليل من الجنون. تعيد سلسلة نصية (محلية- تمثل البلد الحالي ) تمثل المصفوفة وعناصرها. هذه الدالة مفيدة للتواريخ والعملات وكذلك بعض الاختصارات المحلية الغريبة, لذلك يستحسن مراجعة التوثيق الخاص بها',
        example: `let date = [new Date()];<br>
        arr.toLocaleString();<br>
        date.toLocaleString();<br>
        console.log(arr, date);`,
        output: `"5,1,8 12/26/2017, 6:54:49 م"`
      }
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: 'تعكس ترتيب عناصر المصفوفة',
        desc:
          'تعكس ترتيب عناصر المصفوفة بمكانهم - بحيث الأول يصبح الأخير والأخير يصبح الأول.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'ترتيب عناصر المصفوفة',

          desc: `ترتب عناصر المصفوفة المحددة وترجع مصفوفة مرتبة.<br>
        <br>
        <strong>ملاحطة مهمة:</strong> إذا لم يتم كتابة دالة الترتيب ، سيتم ترتيب العناصر عن طريق تحويلهم إلى سلاسل ومقارنة على أساس ترتيبهم ضمن الـ Unicode الخاص بهم.على سبيل المثال، "Banana" تأتي قبل "cherry". في الترتيب بالنسبة للأرقام، فإن 9 تأتي قبل 80 ، وذلك لأنه تم تحويل الأرقام إلى سلاسل نصية ، و "80" تأتي قبل "9"  في ترتيب الرموز ضمن الـ Unicode . التوثيق في الكثير من المعلومات للتوضيح.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'معرفة طول المصفوفة',
        desc: 'تعيد عدد العناصر في هذه المصفوفة.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'تعبية جميع عناصر المصفوفة بقيمة ثابتة',
        desc:
          'تقوم بتعبئة جميع عناصر المصفوفة ابتداءً من عنوان البداية إلى عنوان النهاية بقيم .',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'نسخ سلسلة من عناصر المصفوفة ضمن المصفوفة.',
        desc:
          'تقوم بنسخ سلسلة من عناصر المصوفة ضمن المصفوفة نفسها . بإمكانك تحديد العنصر الأخير فقط ( حيث العنصر الأول سيكون الافتراضي صفر ) أو بإمكانك تحديد العنصر الأول والأ×ير مفصولين بفاصلة , comma-separated.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'تنفيذ دالة سأقوم بإنشاء (for each) للعنصر',
        desc:
          'دالة الـ forEach() تقوم بتنفيذ دالة معينة مرة واحد لكل من عناصر المصفوفة.',
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
          ' تقوم بإنشاء مصفوفة جديدة من كل عنصر بإستخدام دالة أقوم بإنشاءها',
        desc:
          'تقوم بإنشاء مصفوفة جديدة بإستخدام النتيجة  الراجعة من استدعاء دالة معينة على جميع العناصر في هذه المصفوفة.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'تنش عنصر تكرار  (iterator object)',
        desc:
          'تعيد عنصر تكرار جديد للمصفوفة والذي يحتوي على أزواج الـ key/value لكل عنوان (index) في هذه المصفوفة. توجد استخدامات كثيرة للتكرارات (iterators), وكذلك دوال أخرى تستخدم معها, مثل <code>values</code> و <code>keys</code>',
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
          shortDesc: 'تعيد إذا كان عنصر معين موجود',
          desc:
            'تقرر فيما إذا كانت مصفوفة معينة تحتوي على عنصر معين ، وتعيد true أو false بما يناسب الحالة.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'العنوان الأول لعنصر معين',
          desc:
            'تعيد أول عنوان حيث يمكن العثور على عنصر معين في مصفوفة, أو -1 إذا لم يتم العثور عليه.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'indexOf',
          shortDesc: 'الفهرس الأول لعنصر معين بعد فهرس معين',
          desc:
            `تأخذ الدالة <code>indexOf</code> معلمة <code>fromIndex</code> ثانية يمكن استخدامها لتوفير الفهرس لبدء البحث في.<br>
            تُرجع أول فهرس يمكن العثور على عنصر محدد به في الصفيف بعد <code>fromIndex</code> ، أو -1 إذا لم يكن موجودًا.<br>
            ملاحظة: يتم إرجاع -1 إذا كان العنصر المحدد موجودًا قبل <code>fromIndex</code> فقط<br>`,
          example: `console.log(arr.indexOf(5, 0));<br>
          arr = [5, 1, 8, 5, 4, 5];<br>
          console.log(arr.indexOf(5, 2));`,
          output: `0<br>
          3`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'العنوان الأخير لعنصر معين',
          desc:
            'تعيد آخر ( أكبر ) عنوان لعنصر معين ضمن مصفوفة مساوي للقيمة المحددة , أو -1 إذا كان غير موجود.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'الفهرس الأخير لعنصر معين قبل فهرس معين',
          desc:
            `تأخذ الدالة <code>lastIndexOf</code> معلمة <code>fromIndex</code> ثانية يمكن استخدامها لتوفير الفهرس لبدء البحث للخلف.
            تُرجع آخر فهرس يمكن العثور على عنصر محدد به في الصفيف قبل <code>fromIndex</code>، أو -1 إذا لم يكن موجودًا.
            ملاحظة: يتم إرجاع -1 إذا كان العنصر المحدد موجودًا بعد <code>fromIndex</code> فقط`,
          example: `console.log(arr.lastIndexOf(8, 2));<br>
          arr = [8, 1, 8];<br>
          console.log(arr.lastIndexOf(8, 1));`,
          output: `2<br>
          0</span>`
        },
        {
          name: 'find',
          shortDesc: 'أول عنصر يطابق شرط معين',
          desc:
            'تعيد القيمة التي تم العثور عليها في المصوفة ، إذا وجد عنصر يطابق  لدالة الفحص المعينة أو غير معرف ( undefined ) إذا لم يتم العثور عليه. مشابهة لـ <code>findIndex()</code>, ولكنها تعيد العنصر عوضا عن العنوان (index).',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'أول عنوان (index) للعصر الذي يطابق شرط معين',
          desc:
            'تعيد أول عنوان (index) لعنصر معين في مصفوفة إذا طابق دالة الفحص المعينة . أو  -1 إذا لم يطابق. مماثلة لـ <code>find()</code>, ولكنها تعيد العنوان (index) عوضا عن العنصر.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'قيمة بواسطة تصغير المصفوفة ، من البداية للنهاية',
          desc:
            'تنفيذ دالة على مراكم وكل قيمة في المصفوفة ( من اليسار إلى اليمين ) لتقليصها إلى قيمة واحدة.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'قيمة بواسطة تصغير المصفوفة ، من النهاية إلى البداية',
          desc:
            'تنفيذ دالة على مراكم وكل قيمة في المصفوفة ( من اليمين إلى اليسار ) لتقليصها إلى قيمة واحدة.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'قيم بناء على شرط أقوم بتحديده',
          desc:
            'تعيد مصفوفة جديد تحتوى على جميع عناصر هذه المصفوفة التي نتيجة دالة الترشيح true.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'فيما إذا  كانت جميع العناصر تطابق شرط معين أو لا',
          desc: 'تعيد (true) إذا كانت جميع القيم تطابق دالة الفحص.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'فيما إذا طابق عنصر واحد على الأقل شرط معين أو لا',
          desc:
            'تعيد (true) إذا طابق على الأقل عنصر واحد من هذه المصفوفة لدالة الفحص.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
