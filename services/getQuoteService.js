const price = require('crypto-price');
const { username, currencies, cryptos } = require('../util/variables.json');
const { createMessage } = require('../util/createMessage');
const { contentIsValid, currencyAndCryptoExists } = require('../validation/validateContent');

const message = 
`Sorry, I don't quite understand :(

Usage:  ${username} [CURRENCY] [CRYPTO]`;

function getQuote(content) {
  if (contentIsValid(content)) {
    console.log('Getting quote...');

    const  [currency, crypto, multiplier]  = [...content];

    if (!currencyAndCryptoExists(currency, crypto)) return 
      `Current input is not yet supported.

Available inputs:

${currencies.toString().replace(/,/g, ', ')}

${cryptos.toString().replace(/,/g, ', ')}`;

    return price.getCryptoPrice(currency, crypto)
      .then(obj => createMessage(obj, multiplier))
      .catch(err => err);
  }
  
  return message;
}

module.exports = { getQuote };