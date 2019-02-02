<template>
  <section class="section">
    <label>Git name: </label>
    <input v-model="name" class="input" type="text" placeholder="Name">
    <a class="button is-primary" @click="changeName">
      Set Name
    </a>
    <p>
      Name: {{ name }}
    </p>
    <section />
  </section>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    ...mapMutations(['SET_NAME']),
    changeName() {
      this.$store.commit('SET_NAME', this.name)
    }
  }
}
</script>
