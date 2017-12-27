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
    ],
    string: [
      {
        name: 'join',
        shortDesc: 'joins all elements of the array into a string',
        desc: `Joins all elements of an array into a string. You can join it together as is or with something in between, <code>elements.join(' -
          ')</code> gives you <code>foo-bar</code>`,
        example: `arr.join();
        console.log(arr);`,
        output: `"5,1,8"`
      },
      {
        name: 'toString',
        shortDesc: 'returns a string representing the array.',
        desc: 'Returns a string representing the array and its elements.',
        example: `arr.toString();
        console.log(arr);`,
        output: `"5,1,8"`
      },
      {
        name: 'toLocaleString',
        shortDesc: 'returns a localized string representing the array.',
        desc:
          'Returns a localized string representing the array and its elements. This is very useful for dates and currency and has some strange native abstractions, so best to consult the docs when using it',
        example: `let date = [new Date()];
        arr.toLocaleString();
        date.toLocaleString();
        console.log(arr, date);`,
        output: `"5,1,8 12/26/2017, 6:54:49 PM"`
      }
    ],
    ordering: [
      {
        name: 'reverse',
        shortDesc: 'reverses the order of the array',
        desc:
          'Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.',
        example: `arr.reverse();
        console.log(arr);`,
        output: `[8, 1, 5]`
      },
      {
        name: 'sort',
        shortDesc: 'sorts the items of the array',
        desc: 'Sorts the elements of an array in place and returns the array.',
        example: `arr.sort();
        console.log(arr);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: 'fill',
        shortDesc: 'fills all the elements of the array with a static value',
        desc:
          'Fills all the elements of an array from a start index to an end index with a static value.',
        example: `arr.fill(2);
        console.log(arr);`,
        output: `[2, 2, 2]`
      },
      {
        name: 'copyWithin',
        shortDesc: 'copies a sequence of array elements within the array.',
        desc:
          'Copies a sequence of array elements within the array. You can specify either just the ending element (where begin will default to zero) or both the beginning and the end, comma-separated.',
        example: `arr.copyWithin(1);
        console.log(arr);`,
        output: `[5, 5, 8]`
      }
    ]
  },
  mutations: {
    selectionMethod(state, selected) {
      state.selectedMethod = selected
    },
    resetSelection(state) {
      state.selectedMethod = ''
    }
  }
})
