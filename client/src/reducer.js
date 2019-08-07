import initStore from './initStore';
import reducers from './reducers';

const merge = (left, right) => {
	if(typeof left === 'object' && typeof right === 'object') {
		for(let i of Object.keys(right)) left[i] = merge(left[i], right[i]);
    }
  else left = right;
	return left;
};

const get = (obj, path) => {
  if(path.length <= 0) return obj;
  else if(!obj[path[0]]) return;
  let next = path.shift();
  return get(obj[next], path);
}

export default (state, action) => {
  // Initialize the state.
  if(!state) return initStore;
  state = Object.assign(new Object(), state);

  // Parse the action path.
  let path = action.type.split('.');

  // Get the reducer.
  let reducer = get(reducers, path);

  // Run the reducer.
  if(reducer) return merge(state, reducer(state, action));
  else return state;
};