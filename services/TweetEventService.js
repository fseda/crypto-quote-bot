const config = require('../config.json');
const Twit = require('twit');
const { username } = require('../util/variables.json');
const getQuote = require('./GetQuoteService');

const T = new Twit(config);

async function tweetEvent(tweet) {
  const screenName = tweet.user.screen_name;
  const name = tweet.user.name;
  const tweetId = tweet.id_str;
  const txt = tweet.text;

  const re = new RegExp(username + '\\s+', 'g');

  const text = '@time_in_rio USD BTC'

  const content = text // replace 'text' with 'tweet.text'
    .replace(re, '')
    .split(/\s+/);

  const quote = await getQuote(content);
  console.log(quote);

  const params = { 
    status: quote, 
    in_reply_to_status_id: tweetId 
  };

  T.post('statuses/update', params, (err, data, response) => {
    !err ? console.log(err) : console.log('Tweeted', params.status);
  });
}

tweetEvent();

module.exports = tweetEvent;