# crypto-public-balance
Get the balance of various crypto currencies based on given public addresses.

Installation

```
  npm --save install ericvrp/crypto-public-balance
```

Usage

```
  const cryptoPublicBalance = require('crypto-public-balance')

  const balance  = cryptoPublicBalance.get('ETH', '0x...')
  const balances = cryptoPublicBalance.get('ETH', ['0x...'])
```

Currently supported crypto currencies (pull requests are very welcome!)

```
  BTC (Bitcoin)
  ETH (Ethereum)
  IOT (IOTA)
```
