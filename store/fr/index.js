export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'un ou des éléments à un tableau',
        desc:
          "Modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments.",
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: "un ou des éléments à la fin d'un tableau",
        desc:
          "Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.",
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: "un ou des éléments au début d'un tableau",
        desc:
          "Ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.",
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: "ce tableau à d'autre(s) tableau(x) et/ou valeur(s)",
        desc:
          "Renvoie un nouveau tableau qui est le résultat de la concaténation d'un ou plusieurs tableaux.",
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'un ou des éléments à un tableau',
        desc:
          "Modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments.",
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: "le dernier élément d'un tableau",
        desc:
          "Supprime le dernier élément d'un tableau et retourne cet élément.",
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: "le premier élément d'un tableau",
        desc:
          "Supprime le premier élément d'un tableau et retourne cet élément.",
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          "un ou plusieurs éléments successifs, sans modifier le tableau d'origine",
        desc:
          "Renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.",
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
        shortDesc:
          "de concaténer tous les éléments d'un tableau dans une chaine de caractères",
        desc: `Concaténe tous les éléments d'un tableau dans une chaine de caractères et renvoie cette nouvelle chaîne de caractères. Il est possible de concaténer tel quel ou avec un séparateur, <code>elements.join(' - ')</code> renvoie <code>foo - bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc:
          'de retourner une chaine de caractères représantant le tableau',
        desc:
          'Renvoie une chaine de caractères représentant le tableau spécifié et ses éléments.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc:
          'de retourner une chaine de caractères localisée représantant le tableau',
        desc:
          "Cette méthode est un peu touchy. Renvoie une chaine de caractères localisée représentant le tableau spécifié et ses éléments. C'est vraiment utile pour les dates et les devises ! Le mieux est de consulter la documentation quand on souhaite l'utiliser car certains comportements sont étranges.",
        example: `let date = [new Date()];<br>
        arr.toLocaleString();<br>
        date.toLocaleString();<br>
        console.log(arr, date);`,
        output: `"5,1,8 12/26/2017, 6:54:49 PM"`
      }
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: "d'inverser l'ordre d'un tableau",
        desc:
          "Inverse l'ordre d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.",
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: "de trier les éléments d'un tableau",
        desc:
          "Trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.",
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: "de trouver la taille d'un tableau",
        desc: "Retourne le nombre d'éléments présents dans le tableau.",
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc:
          "de remplir tous les éléments d'un tableau avec une valeur statique",
        desc:
          "Remplit tous les éléments d'un tableau entre deux indices avec une valeur statique.",
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: "de copier une partie d'un tableau",
        desc:
          "Effectue une copie superficielle (shallow copy) d'une partie d'un tableau sur ce même tableau et le renvoie, sans modifier sa taille.",
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'exécutant une fonction sur chaque élément',
        desc: 'Exécute une fonction donnée sur chaque élément du tableau.',
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
          'créant un nouveau tableau depuis chaque élément via une fonction',
        desc:
          "Crée un nouveau tableau composé des résultats d'une fonction donnée en argument sur chaque élément du tableau.",
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'créant un objet Array Iterator',
        desc:
          "Renvoie un nouvel objet de type Array Iterator qui contient le couple clef/valeur pour chaque élément du tableau. Il y a beaucoup de cas d'utilisation des iterators, mais aussi les autres méthodes à utiliser comme <code>values</code> et <code>keys</code>",
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
          shortDesc: 'si un élément existe',
          desc:
            "Permet de déterminer si un tableau contient un élément et renvoie true si c'est le cas, false sinon.",
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: "le premier indice d'un élément en particulier",
          desc:
            "Renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.",
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: "le dernier indice d'un élément en particulier",
          desc:
            "Permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur recherchée n'est pas présente, le résultat sera -1.",
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'find',
          shortDesc: 'le premier élément qui respecte une condition',
          desc:
            "Renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée. Similaire à <code>findIndex()</code>, mais retourne l'élément au lieu de l'indice.",
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'le premier indice qui respecte une condition',
          desc:
            "Renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1. Similaire à <code>find()</code>, mais retourne l'indice au lieu de l'élément",
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'une valeur en réduisant le tableau, du début à la fin',
          desc:
            "Applique une fonction qui est un accumulateur et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.",
          example: `let reducer = (a, b) => a + b;<br>
          <span>&nbsp;&nbsp;</span>console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'une valeur en réduisant le tableau, de la fin au début',
          desc:
            "Applique une fonction qui est un accumulateur et qui traite chaque valeur d'une liste (de la droite vers la gauche) afin de la réduire à une seule valeur.",
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'des éléments basés sur une condition',
          desc:
            "Crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.",
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'si oui ou non tous les éléments respectent une condition',
          desc:
            "Permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument.",
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'si oui ou non au moins un élément respecte une condition',
          desc:
            'Teste si au moins un élément du tableau passe le test implémenté par la fonction fournie.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
