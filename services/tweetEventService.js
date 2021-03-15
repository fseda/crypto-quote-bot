const config = require('../config.json');
const Twit = require('twit');
const { username } = require('../util/variables.json');
const { generateReply } = require('../util/generateReply');
const { 
  tweeted, 
  isOwnUser, 
  generateRegex 
} = require('../util/util');

const T = new Twit(config);

async function tweetEvent(tweet) {
  const { screen_name, id_str } = tweet;

  if (isOwnUser(screen_name)) return;

  const replyText = await generateReply(tweet);

  const params = { status: replyText, in_reply_to_status_id: id_str };

  T.post('statuses/update', params, tweeted);
}

module.exports = tweetEvent;