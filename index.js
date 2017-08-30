// var bitcoinBlockchainInfoBlockExplorer = require('blockchain.info/blockexplorer') // https://github.com/blockchain/api-v1-client-node
//
// var IOTA = require('iota.lib.js') // https://github.com/iotaledger/iota.lib.js
// var iota = new IOTA({ provider: 'http://service.iotasupport.com:14265' })

// const fetch = require('node-fetch')




const coins = require('./coins')

const get = (cryptoCurrency, publicAddresses, balances) => {
  console.log('crypto-public-balance.get', cryptoCurrency, publicAddresses, balances)
  const promises = coins[cryptoCurrency].get(publicAddresses, balances)
  // console.log(promises)
  // return Promise.all(promises)
  return promises

  /*
  switch (sym) {
    case 'ETH':
      switch (type) {
        case 'address':
          const addresses = typeof value === 'string' ? [value] : value
          for (const address of addresses) {
            const getAddressInfoURL = `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`
            // console.log(getAddressInfoURL)

            fetch(getAddressInfoURL).then(res => res.text()).then(body => {
          		const result = JSON.parse(body) // convert to internal data structures to make sure we received valid data
              logInFiatCurrencies(result.ETH.balance, sym, fiatCurrencies, prices)
              if (result.tokens) { // output ERC20 tokens information
                // console.log( JSON.stringify(result, null, 1) ) // pretty-print
                for (const token of result.tokens) {
                  const { tokenInfo } = token
                  logInFiatCurrencies(token.balance / 10**tokenInfo.decimals, tokenInfo.symbol, fiatCurrencies, prices)
                }
              }
            }).catch(err => console.error(err))
          } // next address
          break

        default:
          console.warn('unknown', sym, 'type', type)
          break
      } // end of switch (type)
      break // end of case 'ETH'

    case 'BTC':
      switch (type) {
        case 'address':
          bitcoinBlockchainInfoBlockExplorer.getBalance(value).then(response => {
            logInFiatCurrencies(response[value].final_balance / 10**8, sym, fiatCurrencies, prices)
          })
          break

        default:
          console.warn('unknown', sym, 'type', type)
          break
      } // end of switch (type)
      break // end of case 'BTC'

    case 'IOT':
      switch (type) {
        case 'address':
          const addresses = typeof value === 'string' ? [value] : value
          iota.api.getBalances(addresses, 100, (error, result) => {
            if (error) {
              console.error(error)
            } else {
              // console.log('IOT', value)
              // console.log(result)
              for (const balance of result.balances) {
                // console.log(balance)
                logInFiatCurrencies(balance / 10**6, sym, fiatCurrencies, prices)
              }
            }
          })
          break

        default:
          console.warn('unknown', sym, 'type', type)
          break
      } // end of switch (type)
      break // end of case 'IOT'

    default:
      console.warn('unknown coin', sym)
      break
  } // end of switch (sym)

  return balances
  */
}

module.exports = {
  get
}
