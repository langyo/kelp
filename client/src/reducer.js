import initStore from './initStore';

export default (state = initStore, action) => {
  switch (action.type) {
    case 'views.drawer.onTogglePage':
      return Object.assign({}, state, {
        views: {
          drawer: {
            show: action.name
          }
        }
      });
    case 'views.drawer.onToggleDialog':
      return Object.assign({}, state, {
        views: {
          dialog: {
            show: action.name
          }
        }
      });
    case 'views.drawer.onToggleDrawer':
      return Object.assign({}, state, {
        views: {
          drawer: {
            open: !state.views.drawer.open
          }
        }
      });
    default:
      return state;
  }
};