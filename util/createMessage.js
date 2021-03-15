const { formatCurrency } = require("./formatCurrency");
const { formatCrypto } = require("./util");

function createMessage(obj, multiplier = 1) {
  const { base, target } = obj;
  const price = formatCurrency(obj.price, multiplier);
  const change = formatCurrency(obj.change);
  const reverse = formatCrypto(obj.price);
  
  return `${multiplier} ${base} = ${price} ${target}
  
1 ${target} = ${reverse} ${base}
 
There was a ${change} ${target} price change since last update.`;
}

module.exports = { createMessage };
