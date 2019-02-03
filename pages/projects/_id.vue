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
        <a class="button is-danger is-fullwidth" :href="repo.html_url">
          <img class="icon" src="https://image.flaticon.com/icons/svg/25/25231.svg">
          <p>Visit project</p>
          </img>
        </a>
      </div>
      <div class="column">
        <p class="subtitle is-5 is-spaced">
          <i> Author: {{ repo.owner.login }}</i>
        </p>
        <i>Type: {{ repo.owner.type }}</i> <br>
        <i>Created at: {{ formatDate(repo.created_at) }}</i> <br>
        <i>Updated at: {{ formatDate(repo.updated_at) }}</i> <br>
        <i>Pushed at: {{ formatDate(repo.pushed_at) }}</i> <br>
        <i>Default branch: {{ repo.default_branch }}</i> <br>
        <i>Size: {{ repo.size }} MB</i> <br>
        <i v-if="repo.license && repo.license.name">
          License: {{ repo.license.name }}
        </i>
      </div>

      <div class="column is-one-quarter">
        <!-- <p class="title is-5">
          States Panel
        </p> -->
        <div class="columns box shadow-card">
          <div class="column column-gap">
            <a :class="repo.has_wiki ? 'button is-small is-success is-fullwidth' : 'button is-small is-danger is-fullwidth'">
              <p>Has wiki</p><br>
            </a><br>
            <a :class="repo.private ? 'button is-small is-success is-fullwidth' : 'button  is-small is-danger is-fullwidth'">
              <p>Is private</p><br>
            </a><br>
            <a :class="repo.has_wiki ? 'button is-small is-success is-fullwidth' : 'button is-small is-danger is-fullwidth'">
              <p>Fork</p><br>
            </a><br>
            <a :class="repo.has_projects ? 'button is-small is-success is-fullwidth' : 'button is-small is-danger is-fullwidth'">
              <p>Has projects</p><br>
            </a><br>
          </div>

          <div class="column column-gap">
            <a :class="repo.has_issues ? 'button is-small is-success is-fullwidth' : 'button is-small is-danger is-fullwidth'">
              <p>Has issues</p><br>
            </a><br>
            <a :class="repo.has_downloads ? 'button is-small is-success is-fullwidth' : 'button is-small is-danger is-fullwidth'">
              <p>Downloads</p><br>
            </a><br>
            <a :class="repo.has_pages ? 'button is-small is-success is-fullwidth' : 'button is-small is-danger is-fullwidth'">
              <p>Has pages</p><br>
            </a><br>
            <a :class="repo.archived ? 'button is-small is-success is-fullwidth' : 'button is-small is-danger is-fullwidth'">
              <p>Archived</p><br>
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="columns">
      <div class="column">
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
                Forks count
              </span>
              <span class="tag is-info">
                {{ repo.forks_count }}
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
                Open issues count
              </span>
              <span class="tag is-success">
                {{ repo.open_issues_count }}
              </span>
            </div>
          </div>
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                Subscribers
              </span>
              <span class="tag is-danger">
                {{ repo.subscribers_count }}
              </span>
            </div>
          </div>
        </div>
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
            {{ key }} : {{ Math.round(((language*100)/total)*100)/100 }}%
            <progress :class="colors[index]" :value="(language*100)/total" max="100" />
          </li>
        </ul>
      </div>
    </div>

    <hr>

    <div class="columns">
      <div class="column is-multiline">
        <div class="title is-4">
          Contributors
        </div>
        <div
          v-for="contributor in contributors"
          :key="contributor.id"
          class="column is-quarter-fifths"
        >
          <ContributorCard :contributor="contributor" :image="contributor.avatar_url" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import ContributorCard from '~/components/ContributorCard'

export default {
  components: {
    ContributorCard
  },
  data() {
    return {
      colors: [
        'progress is-danger',
        'progress is-primary',
        'progress is.info',
        'progress is-success',
        'progress is-dark',
        'progress is-warning',
        'progress is-danger',
        'progress is-primary',
        'progress is.info',
        'progress is-success',
        'progress is-dark',
        'progress is-warning',
        'progress is-danger',
        'progress is-primary',
        'progress is.info',
        'progress is-success',
        'progress is-dark',
        'progress is-warning'
      ]
    }
  },
  async asyncData({ params }) {
    const { data: repo } = await axios.get(
      `https://api.github.com/repositories/${params.id}`
    )
    const { data: languages } = await axios.get(repo.languages_url)
    const { data: contributors } = await axios.get(repo.contributors_url)

    return { repo, languages, contributors }
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
