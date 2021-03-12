const price = require('crypto-price');
const { username } = require('../util/variables.json');
const { contentIsValid, isValid, createMessage } = require('../util/util');

const message = 
`Sorry, I don't quite understand :(

Usage:  ${username} [CURRENCY] [CRYPTO]`;

function getQuote(content) {
  if (contentIsValid(content)) return message;

  const  [currency, crypto, multiplier]  = [...content];

  if (isValid(currency, crypto)) {
    return price.getCryptoPrice(currency, crypto).then(obj => createMessage(obj, multiplier))
      .catch(err => err);
  }
  
  return message 
}


module.exports = getQuote;
