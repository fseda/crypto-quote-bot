const { getQuote } = require('../services/getQuoteService');

async function generateReply(screen_name, content) {
  const quote = await getQuote(content);

  return `@${screen_name} ${quote}`
}

module.exports = { generateReply };