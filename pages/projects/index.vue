<template>
  <section class="section">
    <h1 class="title is-4 is-spaced">
      My Projects
    </h1>
    <h1 class="subtitle is-6 is-spaced">
      List of my repositories from github, just to use it on this Vue+Nuxt+Buefy example.
      Images are randomly charged by calling a methods that generate urls with a random number path.
      We pass the random url to each card component to have a unique image for each one. </br></br>
      To open detail card click on one. Nuxt will generate a nested route "projects/{id}" to charge
      his specific details page. Also we must pass data from parent to child by using params attribute.
    </h1>
    <div class="columns is-multiline">
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="column is-one-quarter"
      >
        <card :repo="repo" :image="getRandomImageUrl()">
          <nuxt-link :to="'/projects/'+repo.id">
            Details
          </nuxt-link>
          <!-- <nuxt-child :to="{name:'Porjects-id', params:{repo}}">
            Details
          </nuxt-child> -->
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
