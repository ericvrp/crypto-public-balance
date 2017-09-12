var bitcoinBlockchainInfoBlockExplorer = require('blockchain.info/blockexplorer') // https://github.com/blockchain/api-v1-client-node


const get = (publicAddresses) => {
  return bitcoinBlockchainInfoBlockExplorer.getBalance(publicAddresses).then(response => {
    // console.log(response)
    const balances = []
    for (const address of publicAddresses) {
      const { final_balance } = response[address]
      // if (final_balance <= 0.00000) continue
      // console.log(final_balance)
      balances.push([final_balance / 10**8, 'BTC'])
    }
    return balances
  }).catch(console.error)
} // end of get(...)


module.exports = {
  get
}
