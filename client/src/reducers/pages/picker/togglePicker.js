export default (state, action) => {
  return {
    pages: {
      picker: {
        working: !state.pages.picker.working
      }
    }
  }
}