'use strict';

require('seneca')({index: { elastic: 'http://' + process.env.ES_IP + ':9200/'}})
  .use('../index.js')
  .use('beanstalk-transport')
  .listen({host: process.env.BEANSTALK_IP, port: 1130, type: 'beanstalk', pin: 'role:search,cmd:*'});
