<template>
  <code>
    let arr = {{ arr1 }};
  </code>
</template>

<script>
export default {
  data() {
    return {
      arr1: [5, 1, 8, 0, 4]
    }
  }
}
</script>

<style scoped>
code {
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  transition: 0.2s all ease;
  display: block;
}
</style>