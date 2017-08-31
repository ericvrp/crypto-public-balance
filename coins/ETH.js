var rp = require('request-promise') // https://github.com/request/request-promise


const get = (publicAddresses, balances) => {
  // console.log('crypto-public-balance.ETH.get', publicAddresses)
  let promises = []

  for (const address of publicAddresses) {
    const getAddressInfoURL = `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`
    // console.log('URL ===>', getAddressInfoURL)

    const newPromise = rp(getAddressInfoURL)
    promises = promises.concat(newPromise)
    newPromise.then(html => {
      // console.log(html)
      const json = JSON.parse(html) // convert to internal data structures to make sure we received valid data

      balances.push([json.ETH.balance, 'ETH'])
      // console.log('   ETH)', json.ETH.balance, 'ETH')
      if (json.tokens) { // output ERC20 tokens information
        for (const token of json.tokens) {
          const { tokenInfo } = token
          const balance = token.balance / 10**tokenInfo.decimals
          balances.push([balance, tokenInfo.symbol])
          // console.log('      ERC20)', balance, tokenInfo.symbol)
        }
      }
      // console.log('   balances)', balances)
    }).catch(err => console.error(err))
  } // next address

  return promises
} // end of get(...)


module.exports = {
  get
}
