import Vuex from 'vuex'
import axios from 'axios'

// initial state
const state = {
  repos: [],
  name: 'GorilaNaranja'
}

// getters
const getters = {
  getRepos(state) {
    return state.repos
  }
}

// mutations
const mutations = {
  SET_REPO(state, respos) {
    state.repos = respos
  },
  SET_NAME(state, name) {
    state.name = name
  }
}

// actions
const actions = {
  async getRepos({ commit, state }) {
    const { data } = await axios.get(
      `https://api.github.com/users/${state.name}/repos`
    )
    commit('SET_REPO', data)
  }
}

export default () =>
  new Vuex.Store({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  })
