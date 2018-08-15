export default {
  getSortItem: state => url => {
    return state.tags.filter(item => {
      return item.url === url
    })[0]
  }
}
