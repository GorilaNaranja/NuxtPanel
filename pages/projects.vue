<template>
  <section class="section">
    <div class="columns is-multiline">
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="column is-one-quarter"
      >
        <card :repo="repo" :image="getRandomImageUrl()">
          {{ repo.name }}
        </card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProjectsPage',
  components: {
    Card
  },
  data() {
    return {}
  },
  computed: mapState({
    repos: state => state.repos
  }),
  mounted() {
    // eslint-disable-next-line
    // debugger
    this.getRepos()
  },
  methods: {
    ...mapActions(['getRepos']),
    getRandomImageUrl() {
      return `https://picsum.photos/200/300/?random&token=${Math.random()}`
    }
  }
}
</script>
