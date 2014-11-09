var seneca = require('seneca')({index: { elastic: 'http://192.168.59.103:9200/'}})
  .use('../index.js')
  .listen();
