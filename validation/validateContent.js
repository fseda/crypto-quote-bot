const { currencies, cryptos } = require('../util/variables.json');

function contentIsValid(content) {
  console.log('Validanting content: ' + content);

  return !(!content || content.length < 2 || content.length > 3);
}

function currencyAndCryptoExists(currency, crypto) {
  return currencies.some(e => new RegExp(currency, 'i').test(e)) 
  && cryptos.some(e => new RegExp(crypto, 'i').test(e))
}

module.exports.contentIsValid = contentIsValid;
module.exports.currencyAndCryptoExists = currencyAndCryptoExists 