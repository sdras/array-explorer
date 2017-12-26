import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    adding: [
      {
        name: 'splice',
        shortDesc: 'elements to an array.',
        desc: 'Adds and/or removes elements from an array.',
        example: `arr.splice(2, 0, 'tacos');
        console.log(arr);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: 'push',
        shortDesc: 'elements to the end of an array.',
        desc:
          'Adds one or more elements to the end of an array and returns the new length of the array.',
        example: `arr.push(2);
        console.log(arr);`,
        output: '[5, 1, 8, 2]'
      },
      {
        name: 'unshift',
        shortDesc: 'elements to the front of an array.',
        desc:
          'Adds one or more elements to the front of an array and returns the new length of the array.',
        example: `arr.unshift(2, 7);
        console.log(arr);`,
        output: '[2, 7, 5, 1, 8]'
      },
      {
        name: 'concat',
        shortDesc: 'this array to other array(s) and/or value(s)',
        desc:
          'Returns a new array comprised of this array joined with other array(s) and/or value(s).',
        example: `let arr2 = ['a', 'b', 'c'];
        let arr3 = arr.concat(arr2);
        console.log(arr);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ]
  }
})
