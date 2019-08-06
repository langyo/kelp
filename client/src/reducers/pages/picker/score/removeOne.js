export default (state, action) => {
  return {
    pages: {
      picker: {
        score: state.pages.picker.score - 1
      }
    }
  }
}