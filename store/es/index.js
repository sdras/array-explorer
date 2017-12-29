export default {
    state: {
        selectedMethod: '',
        adding: [{
                name: 'splice',
                shortDesc: 'elemento/s en un array',
                desc: 'Añade y/o elimina elementos de un array.',
                example: `arr.splice(2, 0, 'tacos');<br>
        console.log(arr);`,
                output: `[5, 1, 'tacos', 8]`
            },
            {
                name: 'push',
                shortDesc: 'elementos al final de un array',
                desc: 'Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.',
                example: `arr.push(2);<br>
        console.log(arr);`,
                output: '[5, 1, 8, 2]'
            },
            {
                name: 'unshift',
                shortDesc: 'elementos al principio de un array',
                desc: 'Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.',
                example: `arr.unshift(2, 7);<br>
        console.log(arr);`,
                output: '[2, 7, 5, 1, 8]'
            },
            {
                name: 'concat',
                shortDesc: 'este array con otro(s) array(s) y/o valor(es)',
                desc: 'Devuelve un nuevo array compuesto por este array unido a otro(s) array(s) y/o valor(es).',
                example: `let arr2 = ['a', 'b', 'c'];<br>
        let arr3 = arr.concat(arr2);<br>
        console.log(arr);`,
                output: `[5, 1, 8, 'a', 'b', 'c']`
            }
        ],
        removing: [{
                name: 'splice',
                shortDesc: 'elemento/s en un array',
                desc: 'Añade y/o elimina elementos de un array.',
                example: `arr.splice(2, 1);<br>
        console.log(arr);`,
                output: `[5, 1]`
            },
            {
                name: 'pop',
                shortDesc: 'el último elemento del array',
                desc: 'Elimina el último elemento de un array y lo devuelve.',
                example: `arr.pop();<br>
        console.log(arr);`,
                output: `[5, 1]`
            },
            {
                name: 'shift',
                shortDesc: 'el primer elemento del array',
                desc: 'Elimina el primer elemento de un array y lo devuelve.',
                example: `arr.shift();<br>
        console.log(arr);`,
                output: `[1, 8]`
            },
            {
                name: 'slice',
                shortDesc: 'uno o más elementos en orden de uso, dejando el array como está',
                desc: 'El método <code>slice()</code> devuelve una copia de una parte del array dentro de un nuevo array. Puede especificar sólo el elemento final (donde el inicio será cero) o el principio y el final separados por comas. El array original no se modificará.',
                example: `let slicedArr = arr.slice(1);<br>
        console.log(arr);<br>
        console.log(slicedArr);`,
                output: `[5, 1, 8]<br>
        [1, 8]`
            }
        ],
        string: [{
                name: 'join',
                shortDesc: 'unir todos los elementos del array en una cadena',
                desc: `Une todos los elementos de un array en una cadena. Puede unirlo como está o con algo intermedio (un separador), <code>elements.join(' - ')</code> le da <code>foo - bar</code>`,
                example: `arr.join();<br>
        console.log(arr);`,
                output: `"5,1,8"`
            },
            {
                name: 'toString',
                shortDesc: 'devolver una cadena de caracteres representando el array.',
                desc: 'Devuelve una cadena de caracteres que representa el array y sus elementos.',
                example: `arr.toString();<br>
        console.log(arr);`,
                output: `"5,1,8"`
            },
            {
                name: 'toLocaleString',
                shortDesc: 'devolver la representación del array como una cadena utilizando la configuración regional.',
                desc: 'Este es un poco loco. Devuelve la representación del array como una cadena utilizando la configuración regional. Esto es muy útil para fechas y moneda y tiene algunas extrañas abstracciones nativas, por lo que es mejor consultar los documentos al utilizarlo.',
                example: `let date = [new Date()];<br>
        const arrString = arr.toLocaleString();<br>
        const dateString = date.toLocaleString();<br>
        console.log(arrString, dateString);`,
                output: `"5,1,8 12/26/2017, 6:54:49 PM"`
            }
        ],
        ordering: [{
                name: 'reverse',
                shortDesc: 'invertir el orden del array',
                desc: 'Invierte el orden de los elementos de un array - el primero se convierte en el último, y el último en el primero.',
                example: `arr.reverse();<br>
        console.log(arr);`,
                output: `[8, 1, 5]`
            },
            {
                name: 'sort',
                shortDesc: 'ordenar los elementos del array',
                desc: 'Ordena los elementos de un array y lo devuelve.',
                example: `arr.sort();<br>
        console.log(arr);`,
                output: `[1, 5, 8]`
            }
        ],
        other: [{
                name: 'length',
                shortDesc: 'encontrar la longitud del array',
                desc: 'Devuelve el número de elementos en ese array.',
                example: `console.log(arr.length);`,
                output: `3`
            },
            {
                name: 'fill',
                shortDesc: 'llenar todos los elementos del array con un valor estático',
                desc: 'Llena todos los elementos de un array desde un índice inicial hasta un índice final con un valor estático.',
                example: `arr.fill(2);<br>
        console.log(arr);`,
                output: `[2, 2, 2]`
            },
            {
                name: 'copyWithin',
                shortDesc: 'copiar una secuencia de elementos del array dentro del array.',
                desc: 'Copia una secuencia de elementos del array dentro del array. Puede especificar sólo el elemento final (donde el inicio será cero) o el principio y el final separados por comas.',
                example: `arr.copyWithin(1);<br>
        console.log(arr);`,
                output: `[5, 5, 8]`
            }
        ],
        iterate: [{
                name: 'forEach',
                shortDesc: 'ejecutar una función creada para cada elemento',
                desc: 'El método forEach() ejecuta una función determinada para cada elemento del array.',
                example: `arr.forEach((element) => {<br>
        &nbsp;&nbsp;console.log(element)<br>
        });`,
                output: `5<br>
        1<br>
        8`
            },
            {
                name: 'map',
                shortDesc: 'crear un nuevo array a partir de cada elemento con una función creada por el usuario',
                desc: 'Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.',
                example: `let map = arr.map(x => x + 1);<br>
        console.log(map);`,
                output: `[6, 2, 9]`
            },
            {
                name: 'entries',
                shortDesc: 'crear un objeto iterador',
                desc: 'Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz. Hay muchos usos para los iteradores, así como otros métodos utilizados con ellos en conjunto, como <code>values</code> y <code>keys</code>.',
                example: `let iterator = arr.entries();<br>
        console.log(iterator.next().value);`,
                output: `[0, 5]<br>
        <span class="comment">// the 0 is the index,</span><br>
        <span class="comment">// the 5 is the first number</span>`
            }
        ],
        find: {
            single: [{
                    name: 'includes',
                    shortDesc: 'si existe un elemento determinado',
                    desc: 'Determina si un array contiene un elemento determinado, devolviendo verdadero o falso según corresponda.',
                    example: `console.log(arr.includes(1));`,
                    output: `true`
                },
                {
                    name: 'indexOf',
                    shortDesc: 'el primer índice en el que se puede encontrar un elemento',
                    desc: 'Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.',
                    example: `console.log(arr.indexOf(5));`,
                    output: `0`
                },
                {
                    name: 'lastIndexOf',
                    shortDesc: 'el ultimo índice en el que se puede encontrar un elemento',
                    desc: 'Devuelve el último índice (máximo) de un elemento dentro del array igual al valor especificado, o -1 si no se encuentra ninguno.',
                    example: `console.log(arr.indexOf(5));`,
                    output: `0`
                },
                {
                    name: 'find',
                    shortDesc: 'el primer elemento que satisface una condición',
                    desc: 'Devuelve el valor encontrado en el array, si un elemento del array satisface la función de prueba provista o undefined si no se encuentra. Similar a <code>findIndex()</code>, pero devuelve el ítem en lugar del índice.',
                    example: `let isTiny = (el) => el < 2;<br>
          console.log(arr.find(isTiny));`,
                    output: `1`
                },
                {
                    name: 'findIndex',
                    shortDesc: 'el primer índice de un artículo que satisface una condición',
                    desc: 'Devuelve el índice del primer elemento del array que satisface la función de prueba proporcionada. De lo contrario, se devuelve -1. Similar a <code>find()</code>, pero devuelve el índice en lugar del elemento.',
                    example: `let isBig = (el) => el > 6;<br>
          console.log(arr.findIndex(isBig));`,
                    output: `2`
                },
                {
                    name: 'reduce',
                    shortDesc: 'a value by reducing the Array, start to finish',
                    desc: 'Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.',
                    example: `let reducer = (a, b) => a + b;<br>
          &#9;console.log(arr.reduce(reducer));`,
                    output: `14`
                },
                {
                    name: 'reduceRight',
                    shortDesc: 'un valor para reducir el Array, de principio a fin',
                    desc: 'Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.',
                    example: `[arr, [0, 1]].reduceRight((a, b) => {<br>
          &#9;return a.concat(b)<br>
          }, [])`,
                    output: `[0, 1, 5, 1, 8]`
                }
            ],
            many: [{
                    name: 'filter',
                    shortDesc: 'valores basados en una condición que usted crea',
                    desc: 'Crea un nuevo array con todos los elementos de este array para el cual la función de filtrado proporcionada devuelve true.',
                    example: `let filtered = arr.filter(el => el > 4);<br>
          console.log(filtered)`,
                    output: `[5, 8]`
                },
                {
                    name: 'every',
                    shortDesc: 'si cada elemento satisface o no una condición',
                    desc: 'Devuelve true si cada elemento de este array satisface la función de prueba proporcionada.',
                    example: `let isSmall = (el) => el < 10;<br>
          console.log(arr.every(isSmall));`,
                    output: `true`
                },
                {
                    name: 'some',
                    shortDesc: 'si un elemento cumple o no al menos una condición',
                    desc: 'Devuelve true si al menos un elemento de este array satisface la función de prueba proporcionada.',
                    example: `let biggerThan4 = (el) => el > 4;<br>
          console.log(arr.some(biggerThan4));`,
                    output: `true`
                }
            ]
        }
    }
}
