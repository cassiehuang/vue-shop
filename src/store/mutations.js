export default {
  isFixHeader(state, bool) {
    state.isFixHeader = bool
  },
  isShowSearchBar(state, bool) {
    state.isShowSearchBar = bool
  },
  isShowMask(state, bool) {
    state.isShowMask = bool
  },
  getSliders(state, data) {
    state.sliders = data
  },
  getHotShop(state, data) {
    state.hotShop = data
  },
  getProducts(state, data) {
    state.products = data
  },
  isLogin(state, data) {
    state.isLogin = true
    state.userName = data.userName
    state.userId = data.userId
  },
  logout(state) {
    state.isLogin = false
    state.userName = ''
    state.userId = ''
  }
}
