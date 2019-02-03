<template>
  <div class="card shadow-card">
    <div class="card-image">
      <figure class="image is-5by4">
        <img :src="image">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <a class="title is-4 box" :href="repo.html_url">
          {{ repo.name }}
        </a>
        <div class="content">
          <p class="subtitle is-7">
            {{ repo.description }}
          </p>
        </div>
      </div>
      <div class="media">
        <!-- <div class="media-left">
          <figure class="image is-48x48">
            <img :src="repo.owner.avatar_url">
          </figure>
        </div> -->

        <div class="content">
          <p class="subtitle is-7">
            By <i>{{ repo.owner.login }}</i> </br>
            Language <i>  <strong>{{ repo.language }}</strong></i>
          </p>
        </div>
      </div>


      <div class="content-content">
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              See <a>
                <slot />
              </a>
            </span>
          </p>
        </footer>
      </div>
    </div>
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

<style>
.shadow-card {
  width: 250px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2),
    16px 16px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
</style>
