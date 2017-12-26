<template>
  <p>
    <label for="methodadd">I need to</label>
    <select id="methodadd" name="select" v-model="addM">
      <option value="" disabled selected>...</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </p>
</template>

<script>
export default {
  data() {
    return {
      addM: '',
      options: [
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