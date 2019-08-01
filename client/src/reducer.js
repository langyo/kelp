import initStore from './initStore';

export default (state = initStore, action) => {
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
            show: action.name,
            open: false
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
            show: action.name,
            open: false
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
    /* pages.picker */
    case 'pages.picker.togglePicker':
      return {
        ...state,
        pages: {
          ...state.pages,
          picker: {
            ...state.pages.picker,
            working: !state.pages.picker.working
          }
        }
      };
    case 'pages.picker.score.addOne':
      return {
        ...state,
        pages: {
          ...state.pages,
          picker: {
            ...state.pages.picker,
            score: state.pages.picker.score + 1
          }
        }
      };
    case 'pages.picker.score.removeOne':
      return {
        ...state,
        pages: {
          ...state.pages,
          picker: {
            ...state.pages.picker,
            score: state.pages.picker.score - 1
          }
        }
      };
    default:
      return state;
  }
};