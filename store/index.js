import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedMethod: '',
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
    ],
    removing: [
      {
        name: 'splice',
        shortDesc: 'elements from an array.',
        desc: 'Adds and/or removes elements from an array.',
        example: `arr.splice(2, 1);;
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'pop',
        shortDesc: 'the last element of the array',
        desc:
          'Removes the last element from an array and returns that element.',
        example: `arr.pop();
        console.log(arr);`,
        output: `[5, 1]`
      },
      {
        name: 'shift',
        shortDesc: 'the first element of the array',
        desc:
          'Removes the first element from an array and returns that element.',
        example: `arr.shift();
        console.log(arr);`,
        output: `[1, 8]`
      },
      {
        name: 'slice',
        shortDesc:
          'one or more elements in order for use, leaving the array as is',
        desc:
          'The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array object. You can specify either just the ending element (where begin will default to zero) or both the beginning and the end, comma-separated. The original array will not be modified.',
        example: `let slicedArr = arr.slice(1);
        console.log(arr);
        console.log(slicedArr);`,
        output: `[5, 1, 8]
        [1, 8]`
      }
    ]
  },
  mutations: {
    selectionMethod(state, selected) {
      state.selectedMethod = selected
    }
  }
})
