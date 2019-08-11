let databasePromise = require('./databaseDriver');
let socketServerPromise = require('./socketServerDriver');

databasePromise.then(db => {
  socketServerPromise.then(server => {

  });
});