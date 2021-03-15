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
  const { user: { screen_name }, id_str, text } = { ...tweet };

  if (isOwnUser(screen_name)) return;

  const content = generateRegex(username, text);

  const replyText = await generateReply(screen_name, content);

  const params = { status: replyText, in_reply_to_status_id: id_str };

  T.post('statuses/update', params, tweeted);
}

module.exports = tweetEvent;