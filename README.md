<br>

<img src="https://raw.githubusercontent.com/sambacha/evo-whitepaper/master/cover_img.png">
<br>

| EVOProtocol | Embededd Volumetric Optionality Protocol | v1.0.0+0 |
| ----------- | ---------------------------------------- | -------- |


## Embedded Volumetric Optionality Protocol

### Abstract

EVO Protocol is a dynamically adjusting ERC-compatible protocol that adjusts based on _volume_
<br>

EVO tokens are minted and burned on-demand by deposit and withdraw operations directly via the contract.

> Initiated Protocol Operations

-   Deposit <br>
-   Withdraw <br>
-   Transfer <br>

These operations contribute to `transfer rates`.
`Transfer rates` are tracked both in `aggregate` and `individually` (i.e. per address).
The `period of time` for tracking is the last `25 days`.

### Time and Period

> [V2 Upgrade will include upgrading the time and date to a new libray](https://github.com/bokkypoobah/BokkyPooBahsDateTimeLibrary)

Time and Period should be defined on a `per market` basis. Meaning you should choose what is computed to be the _optimal_ time period based on historical analysis.

Multiples of 4,6, etc are suggested

-   For Example
    `25` days has`36000 minutes`, which divided by `block_time=4` gives `9000`

GasEVO is determined both in `aggregate` (dynamically) and `individually` for each address based on transactional (i.e. volumetric transactional information) stored and updated through the smart contract during the previous transactions.
<br>

All three operations such as `deposit`, `withdraw` and `transfer` can equally contribute to the `transfer` rates that are tracked totally and individually(as per holder) by the smart contract for the period of the last `25 days`. <br>
The token price is determined dynamically(and individually for each holder) based on the information stored or updated in the smart contract during previous transactions:

![](https://raw.githubusercontent.com/gist/sambacha/2cd97b61b0a29dd18f0d12fb0029ee73/raw/67c4785230a544558263beb4ede534ad2b3a0bc4/equation.svg)

## Utility

<!-- EN: specifcaiton -->
<!-- DE: spezifikation -->

> Note: This is specific to the implementation based on the reference specification , as described in the whitepaper (./latex/\*_/_.tex)

Given enough liquidity, `GasEVO` has a way to compute the `exchange rate` towards the base instrument (ETH). <br>

Like this, movements of the bigger or significant volumes can be interpreted as market trends (i.e. `gwei` pricing.) <br>

By utilizing small volume movements and disincentivizing the larger ones without compensation to holders every exceeding `bulge bracket` trade of the token is tracked by the smart contract and higher "transactional" fees are applied (re: withdraw, or 'consumption').

> Note: We describe `transactional` fees sometimes as an `interest` fee. This language is marked as _depreciated_ as this confers and/or implies a rate of return that is somewhat deterministic, this however is not the case per se as it is entirely possible that all trades could be below the `transfer rate` during a period/epoch.

Transference of funds _below_ daily volume threshold does not impose any interest fee. <br>

When the threshold has been exceeded some percentage of tokens gets burned, for the transfer, for `deposit` or for `withdraw` of the base instrument (ETH). <br>

Thresholds are tracked individually per address as the average rate and have a function by which they operate on. <br>

## Architecture & Engineering

Discussed in **chapter 2**

## Safeguards and Tooling

Discussed in **chapter 3**

## Security

please contact: `<mailto: sam@freighttrust.com>`for bugs/security issues, thank you.

## License

SPDX-License-Identifier: SSPL-1.0
