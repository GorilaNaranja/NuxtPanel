<template>
  <section class="section">
    <article class="message is-primary">
      <div class="message-header">
        <p>Git Museum</p>
      </div>
      <div class="message-body">
        Welcome to <strong>Git Museum</strong>, introduce your git username and go to projects.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </article>
    <label class="title is-6">
      VISIT A GIT NAME: {{ name }}
    </label>
    <div class="field">
      <input v-model="name" class="input" type="text" placeholder="Name">
    </div>
    <div class="field">
      <a class="button is-danger" @click="changeName">
        Set Name
      </a>
    </div>
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
