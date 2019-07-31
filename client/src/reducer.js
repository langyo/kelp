import initStore from './initStore';

export default (state = initStore, action) => {
  console.log("Redux state:", state);
  switch (action.type) {
    /* views.dialog */
    case 'views.dialog.reset':
      return {
        ...state,
        views: {
          ...state.views,
          dialog: {
            ...state.views.dialog,
            show: ''
          }
        }
      };
    /* views.drawer */
    case 'views.drawer.togglePage':
      return {
        ...state,
        views: {
          ...state.views,
          drawer: {
            ...state.views.drawer,
            show: action.name
          }
        }
      };
    case 'views.drawer.toggleDialog':
      return {
        ...state,
        views: {
          ...state.views,
          dialog: {
            ...state.views.dialog,
            show: action.name
          }
        }
      };
    case 'views.drawer.toggleDrawer':
      return {
        ...state,
        views: {
          ...state.views,
          drawer: {
            ...state.views.drawer,
            open: !state.views.drawer.open
          }
        }
      };
    default:
      return state;
  }
};