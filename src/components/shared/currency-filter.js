export default function (amount, symbol) {
  return `${symbol}${amount.toFixed(2)}`;
}

// we can make a directive global by adding it to the main.js file
// and calling it Vue.filter('name', importedFilter)
