<template>
  <div>
    <label for="firstmethod">I have an array, I would like to</label>
    <select id="firstmethod" name="select" v-model="selectedFilter">
      <option value="" disabled selected>...</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <div v-if="selectedFilter === 'find the length of the array'">
      <method-length />
    </div>
    <div v-else-if="selectedFilter === 'add items or other arrays'">
      <options-base :options="addOptions"/>
    </div>
  </div>
</template>

<script>
import OptionsBase from './options/OptionsBase.vue'
import MethodLength from './methods/MethodLength.vue'

export default {
  components: {
    OptionsBase,
    MethodLength
  },
  data() {
    return {
      selectedFilter: '',
      options: [
        'add items or other arrays',
        'remove items',
        'find items',
        'walk over items',
        'return a string',
        'order an array',
        'find the length of the array',
        'other'
      ],
      addOptions: [
        'add elements to an array',
        'add elements to the end of an array.',
        'add elements to the front of an array.',
        'add this array to other array(s) and/or value(s)'
      ]
    }
  }
}
</script>

<style scoped>

</style>