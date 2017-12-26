<template>
  <pre class="language-js">
    <code>
      let arr = [5, 1, 8];
    </code>
  </pre>
</template>

<script>
export default {}
</script>

<style>
pre {
  margin: 0;
  padding: 0;
}

code {
  background: #333;
  border: 1px solid white;
  color: white;
  transition: 0.2s all ease;
  display: block;
  border-radius: 5px;
}

/* custom syntax highlighting */
.keyword {
  color: #fa927d;
}

.punctuation {
  color: #f8ecb8;
}

.number {
  color: #a3f5bc;
}
</style>