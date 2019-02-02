<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <p class="title is-2">
          {{ repo.name }}
        </p>
        <p class="subtitle is-7 is-spaced">
          ID: {{ repo.id }}
        </p>
      </div>
      <div class="column">
        <p class="title is-5 is-spaced">
          <i>{{ repo.description }}</i>
        </p>
      </div>
    </div>

    <hr>

    <div class="columns">
      <div class="column is-one-quarter">
        <img :src="repo.owner.avatar_url"></img>
      </div>
      <div class="column">
        <p class="subtitle is-5 is-spaced">
          Author: <i>{{ repo.owner.login }}</i> <br>
          Type: <i>{{ repo.owner.type }}</i> <br>
          Created at: <i>{{ formatDate(repo.created_at) }}</i> <br>
          Updated at: <i>{{ formatDate(repo.updated_at) }}</i> <br>
          Pushed at: <i>{{ formatDate(repo.pushed_at) }}</i> <br>
          Default branch: <i>{{ repo.default_branch }}</i> <br>
          Size: <i>{{ repo.size }} MB</i> <br>
          <!-- License: <i>{{ repo.license }}</i> <br> -->
        </p>
      </div>
      <div
        class="column is-one-fifth text-right"
      >
        Has wiki:
        <a :class="repo.has_wiki ? 'button is-small is-success' : 'button is-small is-danger'">
          <span class="icon is-small">
            <i class="fas fa-bold">
              W
            </i>
          </span>
        </a>
        <br>

        Is private:
        <a :class="repo.private ? 'button is-small is-success' : 'button  is-small is-danger'">
          <span class="icon is-small">
            <i class="fas fa-bold">
              P
            </i>
          </span>
        </a>
        <br>
        </p>
      </div>
    </div>

    <hr>

    <div class="columns">
      <div class="column is-half">
        <ul>
          <p class="subtitle is-6">
            Bytes of code written in that language:
          </p>
          <li v-for="(language, key, index) in languages" :key="language">
            {{ key }} : {{ Math.floor((language*100)/total) }}%
            <progress :class="colors[index]" :value="(language*100)/total" max="100" />
          </li>
        </ul>
      </div>
      <div class="column is-half text-center">
        <div class="field is-grouped is-grouped-multiline text-center">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                Forks
              </span>
              <span class="tag is-info" :href="repo.html_url">
                {{ repo.forks }}
              </span>
            </div>
          </div>
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                Open issues
              </span>
              <span class="tag is-success">
                {{ repo.open_issues }}
              </span>
            </div>
          </div>
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                Watchers
              </span>
              <span class="tag is-primary">
                {{ repo.watchers }}
              </span>
            </div>
          </div>
        </div>
        <hr>
        <a class="button is-info" :href="repo.html_url">
          Visit project
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data() {
    return {
      colors: [
        'progress is-primary',
        'progress is.info',
        'progress is-success',
        'progress is-dark',
        'progress is-warning',
        'progress is-danger'
      ]
    }
  },
  async asyncData({ params }) {
    // TODO DELETE TOKEN
    const { data: repo } = await axios.get(
      `https://api.github.com/repositories/${params.id}`,
      {
        headers: { Authorization: `f300956df3c28fdef2f08a30844d17057cd4a86f` }
      }
    )
    const { data: languages } = await axios.get(repo.languages_url)
    return { repo, languages }
  },
  computed: {
    total() {
      const cosa = Object.entries(this.languages)
        .map(([key, val]) => val)
        .reduce((total, val) => total + val)
      return cosa
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>
<style>
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>
