export default (state, action) => {
  return {
    views: {
      drawer: {
        show: action.name,
        open: false
      }
    }
  }
}