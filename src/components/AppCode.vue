<template>
  <code>
    let arr = {{ arr1 }}
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
  width: 300px;
  background: white;
  padding: 20px;
  position: absolute;
  border: 1px solid #ccc;
  margin: 0;
  right: 200px;
  top: 60px;
}
</style>