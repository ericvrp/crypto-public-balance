var bitcoinBlockchainInfoBlockExplorer = require('blockchain.info/blockexplorer') // https://github.com/blockchain/api-v1-client-node


const get = (publicAddresses, balances) => {
  const newPromise = bitcoinBlockchainInfoBlockExplorer.getBalance(publicAddresses)
  newPromise.then(response => {
    // console.log(response)
    for (const address of publicAddresses) {
      balances.push([response[address].final_balance / 10**8, 'BTC'])
    }
  })
  return newPromise
} // end of get(...)


module.exports = {
  get
}
