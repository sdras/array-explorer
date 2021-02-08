export default {
  state: {
    selectedMethod: '',
    adding: [
      {
        name: 'splice',
        shortDesc: 'στοιχείο/α σε έναν πίνακα',
        desc: 'Προσθέτει ή αφαιρεί στοιχεία σε έναν πίνακα.',
        example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'στοιχεία στο τέλος του πίνακα',
        desc:
          'Προσθέτει ένα ή περισσότερα στοιχεία στο τέλος του πίνακα και επιστρέφει το νέο μήκος του.',
        example: `arr.push(2);<br>
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'στοιχεία στην αρχή του πίνακα',
        desc:
          'Προσθέτει ένα ή περισσότερα στοιχεία στην αρχή του πίνακα και επιστρέφει το νέο μήκος του.',
        example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'αυτόν τον πίνακα σε άλλον(ους) πίνακα(ες) ή/και τιμή(ες)',
        desc:
          'Επιστρέφει έναν νέο πίνακα που αποτελείται από τον τρέχοντα και άλλον(ους) πίνακα(ες) ή/και τιμή(ες).',
        example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'στοιχείο/α απο τον πίνακα',
        desc: 'Προσθέτει ή αφερεί στοιχεία απο τον πίνακα.',
        example: `arr.splice(2, 1);<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'το τελευταίο στοιχείο του πίνακα',
        desc:
          'Αφαιρεί και επιστρέφει το τελευταίο στοιχείο του πίνακα.',
        example: `arr.pop();<br>
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'το πρώτο στοιχείο του πίνακα',
        desc:
          'Αφαιρεί και επιστρέφει το πρώτο στοιχείο του πίνακα.',
        example: `arr.shift();<br>
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'ένα ή παραπάνω στοιχεία, αφήνοντας τον αρχικό πίνακα αμετάβλητο',
        desc:
          'Η μεθοδος <code>slice()</code> επιστέφει ένα "ρηχό" αντίγραφο τμήματος του αρχικού πίνακα, σαν έναν νέο. Μπορείτε να θέσετε την αρχή μόνο (οπότε το τέλος θα είναι το μήκος του πίνακα), είτε την αρχή και το τέλος, χωρισμένα με κόμμα.',
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
        shortDesc: 'ενώσω όλα τα στοιχεία του πίνακα σε ένα αλφαριθμητικό',
        desc: `Ενώνει όλα τα στοιχεία του πίνακα σε ένα αλφαριθμητικό. Μπορείτε να θέσετε και κάποιο συνδετικό ανάμεσα, <code>elements.join(' -
          ')</code> επιστρέφει <code>foo-bar</code>`,
        example: `console.log(arr.join());`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'επιστρέψω τον πίνακα σαν ένα αλφαριθμητικό.',
        desc: 'Επιστρέφει τον πίνακα και τα στοιχεία του σαν ένα αλφαριθμητικό.',
        example: `console.log(arr.toString());`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'επιστρέψω τον πίνακα σαν ένα μεταφρασμένο αλφαριθμητικό.',
        desc:
          'Επιστρέφει ένα μεταφρασμένο αλφαρηθμητικό που αναπαριστά τον πίνακα και τις τιμές του. Αυτή η μέθοδος είναι χρήσιμη για ημερομηνίες και νομίσματα, αλλά επειδή η υλοποίησή της ποικίλει, καλύτερα να συμβουλεύεστε τα κείμενα όταν την χρησιμοποιείται.',
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
        shortDesc: 'αντιστρέψω τον πίνακα',
        desc:
          'Αντιστέφει την σειρά των στοιχέιων του πίνακα — το πρώτο γίνεται τελευταίο και αντίστροφα.',
        example: `arr.reverse();<br>
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'ταξινομεί τα στοιχέια του πίνακα',
        desc: `Ταξινομεί τα στοιχεία μέσα στον πίνακα και τον επιστρέφει.<br>
        <br>
        <strong>Σημαντική Σημείωση:</strong> Αν δεν παρέχετε την μέθοδο compareFunction, τα στοιχεία μετατρέπονται σε Unicode αλφαριθμητικά και ταξινομούνται. Για παράδειγμα, το "Banana" θα προηγείται του "cherry". Σε αριθμητική σειρά, το 9 προηγείται του 80, αλλά επειδή τα νούμερα μετατρέπονται σε αλφαριθμητικά, το "80" θα προηγείται του "9" σε σειρά Unicode. Ανατρέξτε στα κείμενα για περισσότερες διευκρινύσεις.`,
        example: `arr.sort();<br>
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'length',
        shortDesc: 'επιστρέψω το μέγεθος του πίνακα',
        desc: 'Επιτρέφει το πλήθος των στοιχείων του πίνακα.',
        example: `console.log(arr.length);`,
        output: `3`
      },
      {
        name: 'fill',
        shortDesc: 'αναθέσω μια στατική τιμή σε όλα τα στοιχεία του πίνακα',
        desc:
          'Γεμίζει όλα τα στοιχεία του πίνακα, απο μία αρχική θέση έως μία τελική θέση, αναθέτοντας μία συγκεκριμένη στατική τιμή.',
        example: `arr.fill(2);<br>
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'αντιγράψω μέρος του πίνακα σε άλλη θέση.',
        desc:
          'Αντιγράφει μέρος του πίνακα σε άλλη θέση, χωρίς να μεταβάλει το μέγεθός του. Μπορείτε να θέσετε είτε την τελική θέση στον πίνακα (οπότε αρχική ειναι η μηδενική), είτε την αρχική και την τελική χωρισμένες με κόμμα.',
        example: `arr.copyWithin(1);<br>
        console.log(arr);`,
        output: `[5, 5, 1]`
      }
    ],
    iterate: [
      {
        name: 'forEach',
        shortDesc: 'εκτελέσω μια μέθοδο για κάθε στοιχείο του πίνακα',
        desc:
          'Η μέθοδος forEach(), εκτελεί την μέθοδο που παρέχετε, μια φορά για κάθε στοιχείο στον πίνακα.',
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
          'δημιουργήσω ένα νέο πίνακα, για κάθε στοιχείο του πίνακα, εφαρμόζοντας την συνάρτηση που θέλω',
        desc:
          'Εφαρμόζοντας την δοθείσα συνάρτηση σε κάθε στοιχείο του πίνακα, δημιουργείται ένας νέος.',
        example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: 'entries',
        shortDesc: 'δημιουργήσω ένα iterator αντικείμενο (επανάληψης)',
        desc:
          'Επιστρέφει ένα αντικείμενο iterator (επανάληψης), το οποίο επιστρέφει τα ζεύγη κλειδιού/τιμής για κάθε θέση του πίνακα. Οι iterators έχουν πολλές χρήσεις, όπως και άλλες μεθόδοι που μπορούν να χρησιμοποιηθούν μαζί, όπως τα <code>values</code> και τα <code>keys</code>',
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
          shortDesc: 'αν περιέχει ένα συγκεκριμένο στοιχείο',
          desc:
            'Επιστρέφει αληθής (true) ή ψευδής (false), αν ο πίνακας περιέχει την συγκεκριμένη τιμή.',
          example: `console.log(arr.includes(1));`,
          output: `true`
        },
        {
          name: 'indexOf',
          shortDesc: 'την πρώτη θέση στην οποία υπάρχει ένα συγκεκριμένο στοιχείο',
          desc:
            'Επιστρέφει την πρώτη θέση στην οποία βρίσκεται ένα συγκριμένο στοιχείο. Αν το στοιχείο δεν βρίσκεται στον πίνακα, τότε επιστρέφει -1.',
          example: `console.log(arr.indexOf(5));`,
          output: `0`
        },
        {
          name: 'indexOf',
          shortDesc: 'ο πρώτος δείκτης ενός συγκεκριμένου στοιχείου μετά από έναν συγκεκριμένο δείκτη',
          desc:
            `Η συνάρτηση <code> indexOf </ code> παίρνει μια δεύτερη παράμετρο <code> fromIndex </ code> που μπορεί να χρησιμοποιηθεί για την παροχή του ευρετηρίου για να ξεκινήσει η αναζήτηση.
            Επιστρέφει τον πρώτο ευρετήριο στον οποίο μπορεί να βρεθεί ένα δεδομένο στοιχείο στη συστοιχία μετά από <code> fromIndex </ code> ή -1 αν δεν υπάρχει.
            Σημείωση: Επιστρέφει -1 εάν το δεδομένο στοιχείο υπάρχει μόνο πριν από το <code> fromIndex </ code> μόνο`,
          example: `console.log(arr.indexOf(5, 0));<br>
          arr = [5, 1, 8, 5, 4, 5];<br>
          console.log(arr.indexOf(5, 2));`,
          output: `0<br>
          3`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'την τελευταία θέση στην οποία υπάρχει ένα συγκεκριμένο στοιχείο',
          desc:
            'Επιστρέφει την τελευταία θέση στην οποία βρίσκεται ένα συγκριμένο στοιχείο. Αν το στοιχείο δεν βρίσκεται στον πίνακα, τότε επιστρέφει -1.',
          example: `console.log(arr.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: 'lastIndexOf',
          shortDesc: 'τον τελευταίο δείκτη ενός συγκεκριμένου στοιχείου πριν από ένα συγκεκριμένο δείκτη',
          desc:
            `Η συνάρτηση <code> lastIndexOf </ code> λαμβάνει μια δεύτερη παράμετρο <code> fromIndex </ code> που μπορεί να χρησιμοποιηθεί για την παροχή του ευρετηρίου για να ξεκινήσει η αναζήτηση προς τα πίσω από.
            Επιστρέφει το τελευταίο ευρετήριο στο οποίο ένα δεδομένο στοιχείο μπορεί να βρεθεί στον πίνακα πριν το <code> fromIndex </ code>, ή το -1 αν δεν υπάρχει.
            Σημείωση: Επιστρέφει -1 εάν το δεδομένο στοιχείο υπάρχει μόνο μετά από <code> fromIndex </ code> μόνο`,
          example: `console.log(arr.lastIndexOf(8, 2));<br>
          arr = [8, 1, 8];<br>
          console.log(arr.lastIndexOf(8, 1));`,
          output: `2<br>
          0</span>`
        },
        {
          name: 'find',
          shortDesc: 'το πρώτο στοιχείο που ικανοποιεί μια συνθήκη',
          desc:
            'Επιστρέφει την τιμή που βρίσκει στον πίνακα, εφόσον ικανοποιεί την συνάρτηση που έχετε δώσει. Διαφορετικά, επιστρέφει undefined. Παρόμοια με το <code>findIndex()</code>, απλά επιστρέφει την τιμή αντί για την θέση.',
          example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
          output: `1`
        },
        {
          name: 'findIndex',
          shortDesc: 'την πρώτη θέση στην οποία η τιμή του στοιχείου ικανοποιεί την συνθήκη',
          desc:
            'Επιστρέφει την θέση του πρώτου στοιχείου στον πίνακα, το οποίο ικανοποιεί την δοθείσα συνάρτηση. Διαφορετικά, επιστρέφει -1. Παρόμοια με την <code>find()</code>, αλλά επιστρέφει την θέση αντί για την τιμή.',
          example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
          output: `2`
        },
        {
          name: 'reduce',
          shortDesc: 'μια τιμή συρρικνώνοντας τα στοιχεία του πίνακα, απο την αρχή ως το τέλος',
          desc:
            'Εφαρμόζει μια συνάρτηση πάνω σε ένα συσσωρευτή (accumulator) και σε κάθε τιμή του πίνακα (από τα αριστερά προς τα δεξιά) μέχρι να μείνει μόνο μια τιμή.',
          example: `let reducer = (a, b) => a + b;<br>
          console.log(arr.reduce(reducer));`,
          output: `14`
        },
        {
          name: 'reduceRight',
          shortDesc: 'μια τιμή συρρικνώνοντας τα στοιχεία του πίνακα, απο το τέλος ως την αρχή',
          desc:
            'Εφαρμόζει μια συνάρτηση πάνω σε ένα συσσωρευτή (accumulator) και σε κάθε τιμή του πίνακα (από τα δεξιά προς τα αριστερά) μέχρι να μείνει μόνο μια τιμή.',
          example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          <span>&nbsp;&nbsp;</span>return a.concat(b)<br>
          }, [])`,
          output: `[0, 1, 5, 1, 8]`
        }
      ],
      many: [
        {
          name: 'filter',
          shortDesc: 'τιμές με βάση μια συνθήκη που θέτω',
          desc:
            'Φτιάχνει έναν καινούριο πίνακα, από τα στοιχεία του πίνακα τα οποία ικανονοποιούν την δοθείσα συνάρτηση φιλτραρίσματος.',
          example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
          output: `[5, 8]`
        },
        {
          name: 'every',
          shortDesc: 'εάν κάθε στοιχείο ικανοποιεί μια συνθήκη',
          desc:
            'Επιστρέφει αληθής (true) εάν κάθε στοιχείο στον πίνακα ικανοποιεί την δοθείσα συνάρτηση.',
          example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
          output: `true`
        },
        {
          name: 'some',
          shortDesc: 'εάν τουλάχιστον ένα στοιχείο ικανοποιεί μια συνθήκη',
          desc:
            'Επιστρέφει αληθής (true) εάν τουλάχιστον ένα στοιχείο στον πίνακα ικανοποιεί την δοθείσα συνάρτηση.',
          example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
          output: `true`
        }
      ]
    }
  }
}
