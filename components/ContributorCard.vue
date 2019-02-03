<template>
  <div class="card">
    <div class="card-image">
      <div class="columns">
        <div class="column box shadow-card">
          <div class="card-content box">
            <div class="columns">
              <div class="columns">
                <div class="columns">
                  <a class="button is-small is-danger is-rounded">
                    Visit
                  </a>
                </div>
              </div>
              <div class="column is-two-fifths">
                <figure class="image">
                  <img class="image is-48x48" :src="image">
                </figure>
              </div>
              <div class="column">
                <a class="title is-4" :href="contributor.html_url">
                  {{ contributor.login }}
                </a><br>
                <p class="subtitle is-6">
                  Contributions: {{ contributor.contributions }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    contributor: {
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
