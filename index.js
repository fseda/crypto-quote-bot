const config = require('./config.json');
const Twit = require('twit');
const tweetEvent = require('./services/tweetEventService');

const { username } = require('./util/variables.json');

const T = new Twit(config);

const stream = T.stream('statuses/filter', { track: username });

stream.on('tweet', tweetEvent);
