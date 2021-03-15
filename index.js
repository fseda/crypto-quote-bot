console.log('Up and running...');

const config = require('./config.json');
const Twit = require('twit');
const tweetEvent = require('./services/tweetEventService');

const { username } = require('./util/variables.json');

const T = new Twit(config);

const stream = T.stream('statuses/filter', { track: username });

console.log('Streaming statuses...');

stream.on('tweet', tweetEvent);

