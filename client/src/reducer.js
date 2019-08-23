import initStore from './initStore';

const requireFunc = require.context('./reducers', true, /\.js$/);
let reducers = {};

requireFunc.keys().forEach(key => {
  let path = /^\.\/(.*)\.js$/.exec(key)[1].split('/');
  const dfs = obj => {
    let head = path.shift();
    if (path.length > 0) {
      if (obj[head]) obj[head] = dfs(obj[head]);
      else obj[head] = dfs({});
    } else {
      obj[head] = requireFunc(key);
    }
    return obj;
  }
  reducers = dfs(reducers);
});

const merge = (left, right) => {
  if (typeof left === 'object' && typeof right === 'object') {
    for (let i of Object.keys(right)) left[i] = merge(left[i], right[i]);
  }
  else left = right;
  return left;
};

const get = (obj, path) => {
  if (path.length <= 0) return obj;
  else if (!obj[path[0]]) return;
  let next = path.shift();
  return get(obj[next], path);
}

export default (state, action) => {
  // Initialize the state.
  if (!state) return initStore;
  state = Object.assign(new Object(), state);

  // Parse the action path.
  let path = action.type.split('.');

  // Get the reducer.
  let reducer = get(reducers, path);

  // Run the reducer.
  console.log(reducer);
  if (reducer) return merge(state, reducer.default(state, action));
  else return state;
};