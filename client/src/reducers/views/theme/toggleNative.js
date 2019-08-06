export default (state, action) => {
  return {
    views: {
      theme: {
        native: !state.views.theme.native
      }
    }
  }
}