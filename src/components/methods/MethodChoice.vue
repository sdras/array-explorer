<template>
  <p>
    <label for="methodoptions">I need to {{ methodType }}</label>
    <select id="methodoptions" name="select" v-model="selected">
      <option value="" disabled selected>...</option>
      <option v-for="option in options" :key="option.name" :value="option">
        {{ option.shortDesc }}
      </option>
    </select>
    <method-base v-if="selected" urlPath="selected.name">
      <span slot="title">Array.{{selected.name}}()</span>
      <span slot="desc">{{selected.desc}}</span>
    </method-base>
  </p>
</template>

<script>
import MethodBase from './MethodBase.vue'

export default {
  components: {
    MethodBase
  },
  props: {
    methodType: {
      type: String,
      required: false
    },
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