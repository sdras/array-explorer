<template>
  <div class="localization-dropdown">
    Language: 
    <select v-model="selectedLanguage">
      <option v-for="(val, key) in languages" :value="key">{{val.long}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: this.$store.state.curLanguage,
      languages: this.$store.state.languages
    }
  },
  watch: {
    selectedLanguage(newLang) {
      console.log('new lang', newLang)
      this.$store.commit('changeLanguage', newLang)
      this.$store.commit('resetSelection')
    }
  }
}
</script>

<style scoped>
.localization-dropdown {
  float: right;
  margin-right: 5%;
}
</style>
