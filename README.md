<br>


<img src="cover_img.png">
<br>


| EVOProtocol | Embededd Volumetric Optionality Protocol | v1.0.0+0 |
| ----------- | ---------------------------------------- | ----- |


## Embedded Volumetric Optionality

EVO tokens are minted and burned on-demand by deposit and withdraw operations directly via the contract.

> Initiated Protocol Operations

Deposit <br>
Withdraw <br>
Transfer <br>

These operations contribute to transfer rates. 
Transfer rates are tracked both in aggregate and individually (i.e. per address).
The `period of time` for tracking is the last 25 days

### Time and Period 

> [V2 Upgrade will include upgrading the time and date to a new libray](https://github.com/bokkypoobah/BokkyPooBahsDateTimeLibrary)

Multiples of 4,6, etc are suggested 

* For Example
    `25` days has` 36000 minutes`, which divided by `block_time=4` gives `9000`

GasEVO is determined both in aggregate (dynamically) and individually for each address based on transactional (i.e. volumetric transactional information) stored and updated through the smart contract during the previous transactions.
 <br>

All three operations such as deposit, `withdraw` and transfer can equally contribute to the transfer rates that are tracked totally and individually(as per holder) by the smart contract for the period of the last `25 days`.  <br>
The token price is determined dynamically(and individually for each holder) based on the information stored or updated in the smart contract during previous transactions:


![](https://raw.githubusercontent.com/gist/sambacha/2cd97b61b0a29dd18f0d12fb0029ee73/raw/67c4785230a544558263beb4ede534ad2b3a0bc4/equation.svg)


## Utility

Given enough liquidity (assuming frequent transactions) GasEVO has a way to compute the `exchange rate` towards the base instrument (ETH). <br>
Like this, movements of the bigger or significant volumes can be interpreted as market trends (i.e. higher gwei pricing.) <br>

By utilizing small volume movements and disincentivizing the larger ones without compensation to holders every exceeding unusual trade of the token is tracked by the smart contract and higher "interest" fees are applied (re: withdraw, or 'consumption').

Transference of funds _below_ daily volume threshold does not impose any interest fee. <br>

When the threshold has been exceeded some percentage of tokens gets burned, for the transfer, for `deposit` or for `withdraw` of the base instrument (ETH). <br>

Thresholds are tracked individually per address as the average rate and have a function by which they operate on. <br>

## Architecture & Engineering 

Discussed in **chapter 2**

## Safeguards and Tooling

Discussed in **chapter 3**

## Security

please contact: `<mailto: sam@freighttrust.com> `for bugs/security issues, thank you.

## License

SPDX-License-Identifier: SSPL-1.0