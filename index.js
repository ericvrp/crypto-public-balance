const coins = require('./coins')

const get = (cryptoCurrency, publicAddresses, balances) => {
  const coin = coins[cryptoCurrency]

  if (!coin) {
    console.warn('crypto-public-balance.get: undefined', cryptoCurrency, publicAddresses, balances)
    return []
  }

  if (!coin.get) {
    console.warn('crypto-public-balance.get: not implemented', cryptoCurrency, publicAddresses, balances)
    return []
  }

  // console.log('crypto-public-balance.get', cryptoCurrency, publicAddresses, balances)
  return coin.get(publicAddresses, balances)
}

module.exports = {
  get
}
