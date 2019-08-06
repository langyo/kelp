export default (state, action) => {
  return {
    views: {
      theme: {
        color: {
          primary: action.color
        }
      }
    }
  }
}