# crypto-public-balance
Get the balance of various crypto currencies based on given public addresses.

Installation

```
  npm --save install ericvrp/crypto-public-balance
```

Usage
```
  const cryptoPublicBalance = require('crypto-public-balance')

  console.log(cryptoPublicBalance.coins)

  const promises = cryptoPublicBalance.get(cryptoCurrency, [publicAddresses])
  Promise.all(promises).then(console.log)
```

Currently supported crypto currencies (pull requests are very welcome!)
```
  BTC (Bitcoin)
  ETH (Ethereum)
  IOT (IOTA)
```
