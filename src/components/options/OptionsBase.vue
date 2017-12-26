<template>
  <p>
    <label for="methodoptions">I need to</label>
    <select id="methodoptions" name="select" v-model="selected">
      <option value="" disabled selected>...</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </p>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: ''
    }
  }
}
</script>