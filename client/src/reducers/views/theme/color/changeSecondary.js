export default (state, action) => {
  return {
    views: {
      theme: {
        color: {
          secondary: action.color
        }
      }
    }
  }
}