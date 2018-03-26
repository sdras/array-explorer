<template>
  <div>
    <h2><slot name="title" /></h2>
    <p class="desc"><slot name="desc" /></p>
    <p class="link"><em><a :href="`https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/${urlPath}`" target="_blank">문서 보기 &#8594;</a></em></p>
  </div>
</template>

<script>
export default {
  name: 'method-base',
  props: {
    urlPath: {
      type: String,
      default: 'length'
    }
  }
}
</script>


<style scoped>
div {
  border: 1px solid #ccc;
  margin-top: 30px;
  padding: 0 20px;
  background: white;
  border-radius: 5px;
}

h2 {
  color: #ce371a;
}

p.desc {
  margin-bottom: 0;
}

p.link {
  margin-top: 5px;
}
</style>
