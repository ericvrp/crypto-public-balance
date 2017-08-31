var bitcoinBlockchainInfoBlockExplorer = require('blockchain.info/blockexplorer') // https://github.com/blockchain/api-v1-client-node


const get = (publicAddresses) => {
  return bitcoinBlockchainInfoBlockExplorer.getBalance(publicAddresses).then(response => {
    // console.log(response)
    const balances = []
    for (const address of publicAddresses) {
      balances.push([response[address].final_balance / 10**8, 'BTC'])
    }
    return balances
  })
} // end of get(...)


module.exports = {
  get
}
