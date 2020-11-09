export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'alkion tai alkioita taulukkoon',
        desc: 'Lisää ja/tai poistaa alkioita taulukosta.',
        example: `arr.splice(2, 0, 'tacoja');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacoja', 8]`,
      },
      {
        name: 'push',
        shortDesc: 'alkioita taulukon loppuun',
        desc:
          'Lisää yhden tai useamman alkion taulukon loppuun ja palauttaa taulukon uuden pituuden.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]',
      },
      {
        name: 'unshift',
        shortDesc: 'alkioita taulukon alkuun',
        desc:
          'Lisää yhden tai useamman alkion taulukon alkuun ja palauttaa taulukon uuden pituuden.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]',
      },
      {
        name: 'concat',
        shortDesc: 'tämän taulukon toiseen taulukkoon',
        desc:
          'Palauttaa uuden taulukon, johon on yhdistetty tämän ja toisen taulukon alkiot ja/tai muita arvoja.',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`,
      },
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'alkion/alkioita taulukosta',
        desc: 'Lisää ja/tai poistaa alkioita taulukosta',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`,
      },
      {
        name: 'pop',
        shortDesc: 'taulukon viimeisen alkion',
        desc:
          'Poistaa taulukon viimeisen alkion ja palauttaa poistetun alkion.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`,
      },
      {
        name: 'shift',
        shortDesc: 'taulukon ensimmäisen alkion',
        desc:
          'Poistaa taulukon ensimmäisen alkion ja palauttaa poistetun alkion.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`,
      },
      {
        name: 'slice',
        shortDesc:
          'yhden tai useamman alkion tietystä kohdasta, koskematta alkuperäiseen taulukkoon',
        desc: `<code>slice()</code>-metodi palauttaa typistetyn kopion alkuperäisestä taulukosta: kopioidusta taulukosta on poistettu tietyt elementit. Metodille voidaan antaa parametrinä joko vain kopioidun osataulukon alkuindeksi
          (joilloin osataulukon loppuideksi oletetaan alkuperäisen taulukon viimeinen alkio) tai pilkulla erotettuna osataulukon alkuindeksin ja loppuindeksin.
          Alkuperäinen taulukko säilyy ennallaan.`,
        example: `let slicedArr = arr.slice(1);<br>
        console.log(arr);<br>
        console.log(slicedArr);`,
        output: `[5, 1, 8]<br>
        [1, 8]`,
      },
    ],
    string: [
      {
        name: 'join',
        shortDesc: 'yhdistää kaikki alkiot yhdeksi merkkijonoksi',
        desc: `Yhdistää kaikki taulukon alkiot merkkijonoksi. Ilman parametriä metodi yhdistää alkiot sellaisenaan, mutta antamalla parametriksi esimerkiksi <code>elements.join(' -
          ')</code> saat lopputulokseksi <code>5 - 1 - 8</code>`,
        example: `console.log(arr.join());`,
        output: `'5,1,8'`,
      },
      {
        name: 'toString',
        shortDesc: 'palauttaa merkkijonon joka sisältää taulukon kaikki alkiot',
        desc:
          'Palauttaa merkkijonon joka sisältää taulukon ja kaikki sen alkiot.',
        example: `console.log(arr.toString());`,
        output: `'5,1,8'`,
      },
      {
        name: 'toLocaleString',
        shortDesc:
          'palauttaa lokalisoidun merkkijonon, joka sisältää taulukon kaikki alkiot.',
        desc: `Tämä on hieman omituinen funktio. Palauttaa lokalisoidun merkkijonon, johon on yhdistetty taulukon jokainen alkio lokalisoituna.
        Tämä on erittäin hyödyllinen päivämääräolioiden tai valuutan käsittelyssä. Tällä funktiolla on omituisia natiiveja abstraktioita, joten on parasta katsoa dokumentaatiota tätä käyttäessä.`,
        example: `let date = [new Date()];<br>
        const arrString = arr.toLocaleString();<br>
        const dateString = date.toLocaleString();<br>
        console.log(arrString, dateString);`,
        output: `'5,1,8 12/26/2017, 6:54:49 PM'`,
      },
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: 'muuttaa taulukon järjestyksen lopusta alkuun',
        desc:
          'Muuttaa taulukon järjestyksen lopusta alkuun - ensimmäisestä alkiosta tulee viimeinen, ja viimeisestä alkiosta ensimmäinen.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`,
      },
      {
        name: 'sort',
        shortDesc: 'järjestää taulukon alkiot',
        desc: `Järjestää taulukon alkiot ja palauttaa uudelleenjärjestyn taulukon. Sorts the elements of an array in place and returns the array.<br>
        <br>
        <strong>Tärkeä huomio:</strong> Jos tälle metodille ei anneta parametrina funktiota, jonka perusteella järjestäminen tapahtuu (<code>compareFunction</code>),
        alkiot järjestetään seuraavalla tavalla: muutetaan alkiot merkkijonoiksi ja verrataan niitä Unicode-merkkeinä toisiinsa.
        Esimerkiksi, 'banaani' järjestetään ennen 'kirsikka':a. Mutta numeroiden kanssa, vaikka 9 pitäisi järjestää ennen 80, kun numerot muutetaan merkkijonoiksi,
        '80' laitetaan ennen '9'. MDN-dokumentaatiossa tarkentavia lisätietoja.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`,
      },
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'tietää taulukon pituuden',
        desc:
          'Palauttaa taulukon pituuden, eli sen kuinka monta alkiota taulukossa on.',
        example: `console.log(arr.length);`,
        output: `3`,
      },
      {
        name: 'fill',
        shortDesc:
          'täyttää taulukon kaikki alkiot samalla staattisella arvolla',
        desc:
          'Täyttää kaikki taulukon määritellyt alkiot samalla staattisella arvolla. Parametrina annetaan täytettävien alkioiden aloitusindeksi, ja vapaavalintaisesti pilkulla erotettuna loppuideksi.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`,
      },
      {
        name: 'copyWithin',
        shortDesc: 'kopioida taulukon osan samaan taulukkoon',
        desc:
          'Kopioi taulukon osan samaan taulukkoon, muuttamatta taulukon pituutta. Voit antaa parametrinä kohdealkion indeksin, ja sen lisäksi kopioinnin alkuideksin ja loppuideksin.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`,
      },
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'kirjoittamani funktion jokaisella alkiolle',
        desc:
          '<code>forEach()</code>-metodi suorittaa annetun funktion taulukon jokaiselle alkiolle, ja muokkaa taulukkoa.',
        example: `arr.forEach((element) => {<br>
        <span>&nbsp;&nbsp;</span>console.log(element)<br>
        });`,
        output: `5<br>
        1<br>
        8`,
      },
      {
        name: 'map',
        shortDesc:
          'uuden taulukon vanhoista alkioista, joita on käsitelty funktiolla',
        desc:
          'Luo uuden taulukon, jonka alkiot ovat vanhan taulukon alkioiden ja parametrina annetun funktion tulos.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`,
      },
      {
        name: 'entries',
        shortDesc: 'iteraatio-oliolla',
        desc: `Palauttaa iteraatio-olion, joka sisältää avain/arvo-parit taulukon jokaisesta alkiosta.
          Iteraatio-olioille on paljon käyttötapauksia, kuten samankaltaisille esimerkiksi <code>values</code> and <code>keys</code>-metodeille.`,
        example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
        output: `[0, 5]<br>
        <span class='comment'>// the 0 is the index,</span><br>
        <span class='comment'>// the 5 is the first number</span>`,
      },
    ],
    find: {
      single: [
        {
          name: 'includes',
          shortDesc: 'sisältääkö taulukko tietyn alkion',
          desc:
            'Selvittää sisältääkö taulukko tietyn alkion, palauttaa boolean-arvon.',
          example: `console.log(arr.includes(1));`,
          output: `true`,
        },
        {
          name: 'indexOf',
          shortDesc: 'alkion ensimmäisen esiintymän indeksin',
          desc:
            'Palauttaa sen indeksin, jossa sijaitsee parametrina annettu alkio. Palauttaa -1, jos parametrina annettua alkiota ei löydy.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`,
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'alkion viimeisen esiintymän indeksin',
          desc:
            'Palauttaa viimeisen (tai suurimman) indeksin, josta etsitty alkio löytyy. Palauttaa -1 jos alkiota ei löydy taulukosta.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`,
        },
        {
          name: 'find',
          shortDesc: 'ensimmäisen alkion, joka toteuttaa ehdon',
          desc: `Palauttaa alkion, joka toteuttaa annetun funktion ehdon. Palauttaa <code>undefined</code>, jos tällaista alkiota ei löydy.
            Samanlainen kuin <code>findIndex()</code>-metodi, mutta palauttaa alkion, eikä alkion indeksiä.`,
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`,
        },
        {
          name: 'findIndex',
          shortDesc: 'ensimmäisen alkion indeksin, joka toteuttaa ehdon',
          desc: `Palauttaa alkion, joka toteuttaa annetun funktion ehdon. Palauttaa -1, jos tällaista alkiota ei löydy.
            Samanlainen kuin <code>find()</code>-metodi, mutta palauttaa alkion indeksi, ei alkiota..`,
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`,
        },
        {
          name: 'reduce',
          shortDesc:
            'mihin arvoon taulukon arvot kertyvät kertymäfunktiolla, alusta loppuun',
          desc:
            'Tällä metodille annetaan parametrinä kertymäfunktio, jolle puolestaan annetaan parametrinä taulukon jokainen alkio kerrallaan (vasemmalta oikealle). Metodi palauttaa yhden arvon, johon kertymäfunktio on supennut.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`,
        },
        {
          name: 'reduceRight',
          shortDesc:
            'mihin arvoon taulukon arvot kertyvät kertymäfunktiolla, loppusta alkuun',
          desc:
            'Tällä metodille annetaan parametrinä kertymäfunktio, jolle puolestaan annetaan parametrinä taulukon jokainen alkio kerrallaan (oikealta vasemmalle). Metodi palauttaa yhden arvon, johon kertymäfunktio on supennut.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`,
        },
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'ne alkiot jotka toteuttavat annetun ehdon',
          desc:
            'Luo uuden taulukon niistä alkioista, jotka toteuttavat annetun ehtofunktion.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`,
        },
        {
          name: 'every',
          shortDesc: 'toteuttavatko kaikki alkiot annetun ehdon',
          desc:
            'Palauttaa <code>true</code> jos kaikki taulukon alkiot toteuttavat annetun ehtofunktion.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`,
        },
        {
          name: 'some',
          shortDesc: 'toteuttaako yksikään alkio annettua ehtoa',
          desc:
            'Palauttaa <code>true</code> jos ainakin yksi alkio toteuttaa annetun ehtofunktion.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`,
        },
      ],
    },
  },
};
