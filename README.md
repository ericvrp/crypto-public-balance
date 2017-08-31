# crypto-public-balance
Get the balance of various crypto currencies based on given public addresses.

Installation

```
  npm --save install ericvrp/crypto-public-balance
```

Usage
```
  const cryptoPublicBalance = require('crypto-public-balance')
  cryptoPublicBalance.get(cryptoCurrency, [publicAddresses], [])[0].then(balances => console.log(balances))
```

Currently supported crypto currencies (pull requests are very welcome!)
```
  BTC (Bitcoin)
  ETH (Ethereum)
  IOT (IOTA)
```

Work in progress crypto currencies (pull requests are very welcome!)
```
  DSH (Dash)
  ZEC (Z-Cash)
  BCH (Bitcoin Cash)
```
