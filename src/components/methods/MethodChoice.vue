<template>
  <div>
    <p>
      <label for="methodoptions">I need to {{ methodType }}</label>
      <select id="methodoptions" name="select" v-model="selected">
        <option value="" disabled selected>...</option>
        <option v-for="option in options" :key="option.desc" :value="option">
          {{ option.shortDesc }}
        </option>
      </select>
    </p>
    <method-base v-show="isSelected" :urlPath="selected.name">
      <span v-if="selected.name === 'length'" slot="title">Array.{{selected.name}}</span>
      <span v-else slot="title">Array.{{selected.name}}()</span>
      <span slot="desc" v-html="selected.desc"></span>
    </method-base>
  </div>
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
  },
  computed: {
    isSelected() {
      return this.$store.state.selectedMethod
    }
  },
  watch: {
    selected() {
      this.$store.commit('selectionMethod', this.selected)
    }
  }
}
</script>

<style scoped>
code {
  background: #eee;
  padding: 3px 6px;
  font-size: 16px;
  border-radius: 5px;
  color: #666;
}
</style>
