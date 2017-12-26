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
      <method-choice :options="addOptions" methodType="add"/>
    </div>
  </div>
</template>

<script>
import MethodChoice from './methods/MethodChoice.vue'
import MethodLength from './methods/MethodLength.vue'

export default {
  components: {
    MethodChoice,
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
      ]
    }
  },
  computed: {
    addOptions() {
      return this.$store.state.adding
    }
  }
}
</script>

<style scoped>

</style>