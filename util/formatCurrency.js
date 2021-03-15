function formatCurrency(v, multiplier = 1) {
  v = v * multiplier;
  v = Math.round(v * 10 ** 2) / 10 ** 2;

  return v.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

module.exports = { formatCurrency };
