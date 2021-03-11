const currencyArray = ['brl', 'usd', 'eur', 'gbp'];
const cryptoArray = ['btc', 'eth', 'ltc', 'xmr', 'doge'];

function isValid(currency, crypto) {
  return currencyArray.some(e => new RegExp(currency, 'i').test(e)) 
  && cryptoArray.some(e => new RegExp(crypto, 'i').test(e));
}

function formatCurrency(v) {
  const exp = 2;
  const div = 10 ** exp

  return Math.round(v * div) / div;
}

function formatCrypto(v) {
  v = 1 / v;
  const exp = 8;
  const div = 10 ** exp;

  return Math.round(v * div) / div;
}

function createMessage(obj, multiplier = 1) {
  const { base, target } = obj;
  const price = formatCurrency(obj.price);
  const change = formatCurrency(obj.change);
  const reverse = formatCrypto(obj.price);

  return `${base} ${multiplier} currently costs ${target} ${price * multiplier}

${target} 1 = ${base} ${reverse}
  
There was a ${target} ${change} price change since last update.`;
}

function contentIsValid(content) {
  return !content || content.length < 2 || content.length > 3;
}

module.exports.isValid = isValid;
module.exports.formatCurrency = formatCurrency;
module.exports.formatCrypto = formatCrypto;
module.exports.createMessage = createMessage;
module.exports.contentIsValid = contentIsValid;