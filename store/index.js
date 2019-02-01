import Vuex from 'vuex'
import axios from 'axios'

// initial state
const state = {
  repos: []
}

// getters
const getters = {
  getReposList(state) {
    return state.repos
  }
}

// mutations
const mutations = {
  SET_REPO(state, respos) {
    state.repos = respos
  }
}

// actions
const actions = {
  async getRepos({ commit }) {
    const { data } = await axios.get(
      `https://api.github.com/users/GorilaNaranja/repos`
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
