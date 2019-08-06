export default (state, action) => {
  return {
    views: {
      dialog: {
        show: action.name
      },
      drawer: {
        open: false
      }
    }
  }
}