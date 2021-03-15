const { 
  cryptos, 
  currencies, 
  usernameWithoutAt 
} = require('./variables.json');

function formatCrypto(v) {
  v = 1 / v;
  const exp = 8;
  const div = 10 ** exp;
  
  return Math.round(v * div) / div;
}

// function isValid(currency, crypto) {
//   console.log('Validanting input...');
//   return currencies.some(e => new RegExp(currency, 'i').test(e)) 
//   && cryptos.some(e => new RegExp(crypto, 'i').test(e));
// }

function isOwnUser(screen_name) {
  return screen_name === usernameWithoutAt;
}

function tweeted(err, data, res) {
  return err ? console.log(err) : console.log('Tweeted: ' + data.text);
}

function generateRegex(username, data) {
  console.log('Generating regex', data);

  return data
    .replace(new RegExp(
      username + '\\s+', 'g'), ''
    ).split(/\s+/);
}

module.exports.formatCrypto = formatCrypto;
// module.exports.isValid = isValid;
module.exports.isOwnUser = isOwnUser;
module.exports.tweeted = tweeted;
module.exports.generateRegex = generateRegex;