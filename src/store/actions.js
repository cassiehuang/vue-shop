import axios from 'axios'
export default {
  handlerScroll({ commit, state }) {
    let _top = document.body.scrollTop
    if (_top > 50) {
      commit('isFixHeader', true)
    } else {
      commit('isFixHeader', false)
    }
  },
  getSliders({ commit, state }) {
    axios.get('/mock/sliders').then(
      response => {
        if (response.data.list) {
          commit('getSliders', response.data.list)
        }
      },
      response => {
        commit('getSliders', [])
      }
    )
  },
  getProducts({ commit, state }, sort) {
    if (!sort || !sort.name || sort.name === 'all') {
    } else {
    }
    if (!sort || !sort.sort || sort.sort === 'all') {
    } else {
    }
    if (!sort || !sort.type || sort.type === 'all') {
    } else {
    }
    axios.get('/mock/products').then(response => {
      if (response.data.list) {
        commit('getProducts', response.data.list)
      }
    })
  },
  getHotShop({ commit, state }) {
    axios.get('/mock/hotShop').then(response => {
      if (response.data.list) {
        commit('getHotShop', response.data.list)
      }
    })
  }
}
