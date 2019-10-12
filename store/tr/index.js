export default {
  state: {
    selectedMethod: "",
    adding: [
      {
        name: "splice",
        shortDesc: "dizideki elemanlar",
        desc: "Dizideki elemanlardan ekle ya da sil.",
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: "push",
        shortDesc: "dizinin sonundaki elemanlar",
        desc:
          "Bir dizinin sonuna bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür",
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: "[5, 1, 8, 2]"
      },
      {
        name: "unshift",
        shortDesc: "bir dizinin önündeki öğeler",
        desc:
          "Bir dizinin önüne bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür",
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: "[2, 7, 5, 1, 8]"
      },
      {
        name: "concat",
        shortDesc: "dizi başka bir dizi(ler) / değer(ler)",
        desc:
          "Diğer dizi (ler) ve / veya değer (ler) ile birleştirilen bu diziden oluşan yeni bir dizi döndürür.",
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: "splice",
        shortDesc: "dizideki elemanlar",
        desc: "Dizideki elemanlardan ekle ya da sil.",
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: "pop",
        shortDesc: "dizinin son elemanı",
        desc: "Dizinin son elemanını siler ve silinen elemanı geri döndürür.",
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: "shift",
        shortDesc: "dizinin ilk elemanı",
        desc: "Dizinin ilk elemanını siler ve silinen elemanı geri döndürür",
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: "slice",
        shortDesc:
          "diziyi olduğu bırakmak için bir ya da daha fazla elemanın kullanımı",
        desc:
          "<code> slice () </ code> yöntemi, bir dizinin bir bölümünün bir kopyasını yeni bir dizi nesnesine döndürür .Yalnızca başlangıç öğesini (dizinin sonuna kadar sonlanacağı nokta) veya virgülle ayrılmış hem başlangıç hem de son ögesini belirtebilirsiniz. Bununla yeni bir dizi elde edersiniz, bu orijinal diziyi değişmeyecektir.",
        example: `let slicedArr = arr.slice(1);<br>
        console.log(arr);<br>
        console.log(slicedArr);`,
        output: `[5, 1, 8]<br>
        [1, 8]`
      }
    ],
    string: [
      {
        name: "join",
        shortDesc: "dizinin tüm elemanlarını bir string haline getir",
        desc: `Dizinin tüm elemanlarını bir string haline getirir.
         <code>elements.join(' - ')</code> kodu çıktı olarak <code>foo-bar</code> kodunu verir.`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: "toString",
        shortDesc: "bir diziyi temsil eden bir string döndür",
        desc: "Geriye diziyi ve öğelerini temsil eden bir string döndürür.",
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: "toLocaleString",
        shortDesc: "bir diziyi temsil eden yerelleştirilmiş bir string döndür",
        desc:
          "Bu biraz delice. Diziyi temsil eden yerelleştirilmiş bir string döndürür. Bu string, tarihler, para birimleri gibi durumlar için çok kullanışlıdır.",
        example: `let date = [new Date()];<br>
        const arrString = arr.toLocaleString();<br>
        const dateString = date.toLocaleString();<br>
        console.log(arrString, dateString);`,
        output: `"5,1,8 12/26/2017, 6:54:49 PM"`
      }
    ],
    ordering: [
      {
        name: "reverse",
        shortDesc: "dizinin sıralamasını tersine çevir",
        desc:
          "Bir dizinin elemanlarının sırasını tersine çevirir - ilki sonuncu olur ve sonuncu ilk olur.",
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: "sort",
        shortDesc: "dizinin elemanlarını sırala",
        desc: `Bir dizinin elemanlarını sıralar ve geriye sıralanan diziyi döndürür.<br>
        <br>
        <strong>Önemli Not:</strong> Eğer compareFunction desteklenmiyorsa, elemanlar stringe dönüştürülüp Unicode kod sırasına göre sıralanır. Örneğin, 'Banana' elemanı 'cherry' elemanından önce gelir.  Sayısal bir sıralamada 9, 80'den önce gelir ancak Unicode düzeninde 80, 9'dan önce gelir. Dökümanlarda daha fazla bilgiye ulaşabilirsiniz.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: "length",
        shortDesc: "dizinin uzunluğunu bul",
        desc: "Geriye dizinin eleman sayısını döndürür.",
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: "fill",
        shortDesc: "dizinin tüm öğelerini statik bir değerle doldur",
        desc:
          "Bir dizinin tüm öğelerini bir başlangıç noktasından bir bitiş noktasına kadar statik değer ile doldurur.",
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: "copyWithin",
        shortDesc: "dizi içindeki dizi elemanlarının bir dizisini kopyala",
        desc:
          "Dizideki dizi öğelerinin bir dizisini kopyalar. Yalnızca bitiş öğesinin (başlangıçta sıfıra varsayılan olarak sıfır) veya hem başlangıç hem de son, virgülle ayrılmış olarak belirtebilirsiniz.",
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: "forEach",
        shortDesc: "her eleman için yapılacak bir işlevi yürüt",
        desc:
          "ForEach () yöntemi, her dizi elemanı için bir kez sağlanan bir işlevi yürütür.",
        example: `arr.forEach((element) => {<br>
        <span>&nbsp;&nbsp;</span>console.log(element)<br>
        });`,
        output: `5<br>
        1<br>
        8`
      },
      {
        name: "map",
        shortDesc: "bir fonksiyon ile her ögeden yeni bir dizi oluştur",
        desc:
          "Bu dizideki her öğede sağlanan bir fonksiyon çağırmanın sonuçlarıyla yeni bir dizi oluşturur.",
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: "entries",
        shortDesc: "bir yineleyici obje oluştur",
        desc:
          "Dizideki her dizinin anahtar / değer çiftlerini içeren yeni bir Array Iterator nesnesi döndürür. Yineleyiciler için, bununla birlikte kullanılan diğer yöntemlerin yanı sıra <code> values </ code> ve <code> keys </ code> gibi birçok kullanım alanı vardır.",
        example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
        output: `[0, 5]<br>
        <span class="comment">// 0, sırası</span><br>
        <span class="comment">// 5, ilk eleman</span>`
      }
    ],
    find: {
      single: [
        {
          name: "includes",
          shortDesc: "belli bir element var ise",
          desc:
            "Bir dizinin belirli bir öğeyi içerip içermediğini, uygun olduğunda true veya false döndürüp döndürmeyeceğini belirler.",
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: "indexOf",
          shortDesc: "bir elemanın ilk indeksini bulur",
          desc:
            "Belirli bir öğenin dizide bulunabileceği ilk dizini bulur veya mevcut değilse -1 değerini döndürür.",
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: "lastIndexOf",
          shortDesc: "bir elemanın son indeksini bulur",
          desc:
            "Dizideki bir öğenin belirtilen değere eşit olan son (en büyük) indeksini veya hiçbiri bulunamazsa -1 değerini döndürür.",
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: "find",
          shortDesc: "bir koşulu karşılayan ilk durum",
          desc:
            "Dizideki bir öğe sağlanan test işlevini karşılarsa veya bulunmazsa tanımlanmamışsa dizideki bulunan değeri döndürür. <Code> findIndex () </ code> öğesine benzer, ancak indeks yerine öğeyi döndürür.",
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: "findIndex",
          shortDesc: "bir koşulu karşılayan bir elemanın ilk indeksi",
          desc:
            "Sağlanan test işlevini karşılayan dizideki ilk öğenin dizinini döndürür. Aksi takdirde -1 iade edilir. <Code> find () </ code> öğesine benzer, ancak öğenin yerine dizini döndürür..",
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: "reduce",
          shortDesc: "diziden bir değeri indirge (Soldan sağa)",
          desc:
            "Bir akümülatöre ve dizinin her bir değerine (soldan sağa) bir işlevi tek bir değere indirgemek için uygulayın.",
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: "reduceRight",
          shortDesc: "diziden bir değeri indirge (Sağdan sola)",
          desc:
            "Bir akümülatöre ve dizinin her bir değerine (sağdan sola) bir işlevi tek bir değere indirgemek için uygulayın.",
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: "filter",
          shortDesc: "bir koşula göre filtreleme yap",
          desc:
            "Sağlanan filtreleme işlevinin doğru olarak döndüğü bu dizinin tüm öğelerini içeren yeni bir dizi oluşturur.",
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: "every",
          shortDesc: "her eleman için bir koşulu kontrol et",
          desc:
            "Bu dizideki her öğe sağlanan test işlevini karşılarsa true değerini döndürür.",
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: "some",
          shortDesc: "en az bir eleman için koşulu kontrol et",
          desc:
            "Bu dizideki en az bir eleman sağlanan sınama işlevini karşılarsa true değerini döndürür.",
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
};
