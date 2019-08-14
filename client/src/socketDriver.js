import SocketClient from 'wsbash-h5-client';

import url from 'url-parse';

let port = url(location.href, true).query.port;

let client = new SocketClient('ws://localhost:' + port);

export default client;