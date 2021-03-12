const config = require('../config.json');
const Twit = require('twit');
const { username } = require('../util/variables.json');
const getQuote = require('./GetQuoteService');
const { tweeted } = require('../util/util');

const T = new Twit(config);

async function tweetEvent(tweet) {
  const screenName = tweet.user.screen_name;
  const name = tweet.user.name;
  const tweetId = tweet.id_str;
  const txt = tweet.text;

  const re = new RegExp(username + '\\s+', 'g');

  const content = txt // replace 'text' with 'tweet.text'
    .replace(re, '')
    .split(/\s+/);

  const quote = await getQuote(content);
  console.log(quote);

  const replyText = `@${screenName} ${quote}`

  const params = { 
    status: replyText, 
    in_reply_to_status_id: tweetId 
  };

  T.post('statuses/update', params, tweeted);
}

module.exports = tweetEvent;