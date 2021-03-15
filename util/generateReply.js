const { getQuote } = require('../services/getQuoteService');
const { username } = require('../util/variables.json');
const { generateRegex } = require('./util');

async function generateReply(tweet) {
  const { user: { screen_name }, text } = { ...tweet };

  const content = generateRegex(username, text);

  const message = await getQuote(content);

  return `@${screen_name} ${message}`;
}

module.exports = { generateReply };