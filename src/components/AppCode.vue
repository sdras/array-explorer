<template>
  <code>
    let arr = {{ arr1 }};
  </code>
</template>

<script>
export default {
  data() {
    return {
      arr1: [5, 1, 8]
    }
  }
}
</script>

<style scoped>
code {
  background: #333;
  padding: 20px;
  border: 1px solid white;
  color: white;
  transition: 0.2s all ease;
  display: block;
}
</style>