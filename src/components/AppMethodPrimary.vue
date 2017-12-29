<template>
  <div>
    <label for="firstmethod">{{$t('firstMethod', 'I have an array, I would like to')}}</label>
    <select id="firstmethod" name="select" v-model="selectedFilter">
      <option value="" disabled selected>...</option>
      <option v-for="option in options" :key="option.name" :value="option">
        {{ option }}
      </option>
    </select>
    <div v-if="selectedFilter === options[0]">
      <method-choice :options="adding" methodType="add"/>
    </div>
    <div v-else-if="selectedFilter === options[1]">
      <method-choice :options="removing" methodType="remove"/>
    </div>
    <div v-else-if="selectedFilter === options[3]">
      <method-choice :options="iterate" methodType="iterate by"/>
    </div>
    <div v-else-if="selectedFilter === options[2]">

      <p>
        <label for="findmethod">{{$t('findMethod', "I'm trying to find")}}</label>
        <select id="findMethod" name="select" v-model="selectedFind">
          <option value="" disabled selected>...</option>
          <option value="single">{{$t('singleItem', 'one item')}}</option>
          <option value="many">{{$t('manyItems', 'one or many items')}}</option>
        </select>
      </p>

      <div v-if="selectedFind === 'single'">
        <method-choice :options="find.single" methodType="find"/>
      </div>

      <div v-else-if="selectedFind === 'many'">
        <method-choice :options="find.many" methodType="find"/>
      </div>

    </div>
    <div v-else-if="selectedFilter === options[5]">
      <method-choice :options="ordering"/>
    </div>
    <div v-else-if="selectedFilter === options[4]">
      <method-choice :options="string"/>
    </div>
    <div v-else-if="selectedFilter === options[6]">
      <method-choice :options="other"/>
    </div>
  </div>
</template>

<script>
import {store} from '../../store/index'
import { mapState } from 'vuex'
import MethodChoice from './methods/MethodChoice.vue'

/*function localizedState({$store}, prop) {
  const curLang = $store.state.curLanguage
  console.log('state', curLang);
  return $store.state[curLang][prop];
}*/

function mapLocalizedState(props) {
  let res = {};
  props.forEach(prop => res[prop] = (state) => {
    const {curLanguage} = state.$store.state;
    return state.$store.state[curLanguage][prop];
  });
  return res;
}

// const primaryOptionsDefault = [ // default fallback
//   'add items or other arrays',
//   'remove items',
//   'find items',
//   'walk over items',
//   'return a string',
//   'order an array',
//   'something else'
// ];

export default {
  components: {
    MethodChoice
  },
  data() {
    return {
      selectedFilter: '',
      selectedFind: '',
    }
  },
  computed: {
    ...mapLocalizedState([
      'adding', //: state => localizedState(state, 'adding'),
      'removing',
      'iterate',
      'string',
      'ordering',
      'other',
      'find'
    ]),
    options: function() {
      return this.$t('primaryOptions');
    }
  },
    /*...mapState([
      'adding',
      'removing',
      'iterate',
      'string',
      'ordering',
      'other',
      'find'
    ].map(prop => `${store.getters.curLanguage}.${prop}`))*/
  // },
  watch: {
    selectedFilter() {
      this.$store.commit('resetSelection')
    },
    selectedFind() {
      this.$store.commit('resetSelection')
    }
  }
}
</script>

<style scoped>

</style>
