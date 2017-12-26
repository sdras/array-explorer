<template>
  <div>
    <label for="firstmethod">I have an array, I would like to</label>
    <select id="firstmethod" name="select" v-model="selectedFilter">
      <option value="" disabled selected>Select your option</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
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
        'find the length of an array',
        'other'
      ]
    }
  }
}
</script>

<style scoped>

</style>