<template>
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <a class="button is-danger" href="/">
            <strong>
              {{ getName }}
            </strong>
          </a>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">
            Home
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/projects">
            Projects
          </nuxt-link>


          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns">
      <aside class="column is-2 is-danger">
        <ul class="menu-list is-link">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <section class="column">
        <nuxt />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Projects',
          icon: 'lightbulb',
          to: { name: 'projects' }
        }
      ]
    }
  },
  computed: {
    getName() {
      return this.$store.state.name
    }
  }
}
</script>
