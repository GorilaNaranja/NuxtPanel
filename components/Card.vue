<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="repo.owner.avatar_url">
          </figure>
        </div>
        <div class="content">
          <p class="subtitle is-6">
            {{ repo.owner.login }}
          </p>
          <p class="subtitle is-7">
            (  {{ repo.language }})
          </p>
        </div>
      </div>

      <a class="title is-4" :href="repo.html_url">
        {{ repo.name }}
      </a>

      <div class="content-content">
        <p>{{ repo.description }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">
        See project
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>
