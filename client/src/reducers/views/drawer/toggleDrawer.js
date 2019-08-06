export default (state, action) => {
  return {
    views: {
      drawer: {
        open: !state.views.drawer.open
      }
    }
  }
}