
const get = (cryptoCurrency, publicAddress) => {
  const publicAddresses = typeof publicAddress === 'string' ? [publicAddress] : publicAddress
  let   balances = []

  console.log('TODO: crypto-public-balance', cryptoCurrency, publicAddresses)

  for (const address of publicAddresses) {
    balances.push(42)
  }

  return typeof publicAddress === 'string' ? balances[0] : balances
}

module.exports = {
  get
}
