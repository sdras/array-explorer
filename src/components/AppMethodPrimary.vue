<template>
  <div>
    <label for="firstmethod">I have an array, I would like to</label>
    <select id="firstmethod" name="select" v-model="selectedFilter">
      <option value="" disabled selected>...</option>
      <option v-for="option in options" :key="option.name" :value="option">
        {{ option }}
      </option>
    </select>
    <div v-if="selectedFilter === 'find the length of the array'">
      <method-length />
    </div>
    <div v-else-if="selectedFilter === 'add items or other arrays'">
      <method-choice :options="adding" methodType="add"/>
    </div>
    <div v-else-if="selectedFilter === 'remove items'">
      <method-choice :options="removing" methodType="remove"/>
    </div>
    <div v-else-if="selectedFilter === 'return a string'">
      <method-choice :options="string"/>
    </div>
    <div v-else-if="selectedFilter === 'order an array'">
      <method-choice :options="ordering"/>
    </div>
    <div v-else-if="selectedFilter === 'something else'">
      <method-choice :options="other"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
        'something else'
      ]
    }
  },
  computed: {
    ...mapState(['adding', 'removing', 'string', 'ordering', 'other'])
  },
  watch: {
    selectedFilter() {
      this.$store.commit('resetSelection')
    }
  }
}
</script>

<style scoped>

</style>