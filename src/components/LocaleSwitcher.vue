<template>
  <div class="localization-dropdown">
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
    };
  },
  watch: {
    selectedLanguage(newLang) {
      console.log('new lang', newLang)
        this.$store.commit('changeLanguage', newLang);
    }
  }
}
</script>

<style scoped>

</style>
