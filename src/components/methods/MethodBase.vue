<template>
  <div>
    <h2><slot name="title" /></h2>
    <p class="desc"><slot name="desc" /></p>
    <p class="link"><em><a :href="`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/${urlPath}`" target="_blank">see the docs &#8594;</a></em></p>
  </div>
</template>

<<script>
export default {
  name: 'method-base',
  props: {
    urlPath: {
      type: String,
      default: 'length'
    },
  },
}
</script>


<style scoped>
h2 {
  color: #ce371a;
}

p.desc {
  margin-bottom: 0;
}

p.link {
  margin-top: 0;
}
</style>
