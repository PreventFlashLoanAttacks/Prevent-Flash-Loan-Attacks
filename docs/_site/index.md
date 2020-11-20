# Prevent Flash Loan Attacks

# Table of Contents
1. [Purpose](#purpose)
2. [Historic Attacks](#Historic-Attacks)
   1. [Post Mortems](#post-mortem)
   2. [Malicous Wallets](#malicous-wallets)
3. [Types of attacks](#types-of-attacks)
   1. [Oracle Manipulation](#oracle-manipulation)
   2. [Reentrancy](#Reentrancy)
   3. [Slippage](#slippage)
4. [Prevention](#Prevention)
   1. [Decentralized Oracles](#decentralized-oracles)
   2. [send, transfer, and call](#send,-transfer,-and-call)

# Purpose

This site is dedicated to information about flash loan attacks (which are usually just [price oracle attacks](https://blog.chain.link/flash-loans-and-the-importance-of-tamper-proof-oracles/)) and how to stop them. 

For a study done by the Imperial College London, check out this deep dive on the [historic bZx flash loan (oracle manipulation) attack](https://arxiv.org/pdf/2003.03810.pdf) for more information. 

The first step you can take, is to use [decentralized oracles](https://docs.chain.link/docs/architecture-decentralized-model) when working with data, a number of the projects that had issues moved themselves to Chainlink Price Feeds and are now secure. 

# Historic Attacks

| Protocol | Reference | Date | Value | Transaction  | Cause |
|------|------|------|------|---|
| bZx (2)      | [QuantStamp](https://quantstamp.com/blog/10-quick-and-dirty-facts-about-the-bzx-hacks)                                  | Feb-15-2020 01:38:57 AM +UTC | $800,000                   | [Etherscan](https://etherscan.io/tx/0x762881b07feb63c436dee38edd4ff1f7a74c33091e534af56c9f7d49b5ecac15) | Oracle Attack & Slippage Attack |
| Origin Protocol | [CoinDesk](https://www.coindesk.com/origin-protocol-loses-3-25m-in-latest-flash-loan-attack-reports)          | Nov-17-2020 12:47:19 AM +UTC | $7 M                   | [Etherscan](https://etherscan.io/tx/0xe1c76241dda7c5fcf1988454c621142495640e708e3f8377982f55f8cf2a8401) | Re-entrancy Attack |
| Harvest.Finance | [CoinDesk](https://www.coindesk.com/harvest-finance-24m-attack-triggers-570m-bank-run-in-latest-defi-exploit) | Oct-26-2020 02:58:16 AM +UTC | $24 M                  | [Etherscan](https://etherscan.io/tx/0xb460b70f11a93364fecf1f3c3ec49f053aecd2d6d9912c012170aa7a0de2d526) | Oracle Attack |
| Value Defi      | [CoinDesk](https://www.coindesk.com/value-defi-suffers-6m-flash-loan-attack)                                  | Nov-14-2020 03:36:30 PM +UTC | $6 M                   | [Etherscan](https://etherscan.io/tx/0x46a03488247425f845e444b9c10b52ba3c14927c687d38287c0faddc7471150a) | Oracle Attack |
| Akropolis      | [CoinDesk](https://www.coindesk.com/defi-project-akropolis-token-pool-drained)                                  | Nov-12-2020 12:04:41 PM +UTC | $2 M                   | [Etherscan](https://etherscan.io/tx/0xf15623567231c67df2b8bcc5540236fbda2c3ac11ecbec427048f11b582cb869) | Re-Entrancy |
| Cheese Bank      | [CoinTeleGraph](https://cointelegraph.com/news/value-defi-protocol-suffers-6-million-flash-loan-exploit)                                  | Nov-14-2020 03:36:30 PM +UTC | $6 M                   | [Etherscan](https://etherscan.io/tx/0x46a03488247425f845e444b9c10b52ba3c14927c687d38287c0faddc7471150a) | Oracle Attack |


## Post Mortems
TODO
## Malicious wallets / Users
(TODO)

- [Etherscan](https://etherscan.io/address/0xb77f7bbac3264ae7abc8aedf2ec5f4e7ca079f83)
- [Etherscan](https://etherscan.io/address/0xf224ab004461540778a914ea397c589b677e27bb) 
- [Etherscan](https://etherscan.io/address/0xa773603b139ae1c52d05b35796df3ee76d8a9a2f)

# Types of attacks

## Oracle Manipulation
### Also known as "Price Oracle Attacks"

## Reentrancy

## Slippage

# Prevention

## Decentralized Oracles
### Fixes Oracle Manipulation

Let's take a look at some malicious pseudo-code, pretend these are each ERC20s. 

```
uint256 priceOfMyGovernanceTokenInETH = dexTokenETHPairPrice;
myGovernanceToken.transfer(msg.sender, priceOfMyGovernanceTokenInETH)
```

This right here should be the easiest red flag on the planet. If you ever do a transfer based on a centralized price oracle, you're asking to get owned. One way or another. 

### Solution

Check the [Chainlink documentation for decentralized price feeds](https://docs.chain.link/docs/get-the-latest-price)

```javascript
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";
// constructor and getLatestPrice function truncated
uint256 priceOfMyGovernanceTokenInETH = getLatestChainlinkPrice();
myGovernanceToken.transfer(msg.sender, priceOfMyGovernanceTokenInETH)
```

## send, transfer, and call

Todo

### Solution

TODO

## Safe Integer use and basic audits

Everything that applies to basic contract safety applies to flash loan attack safety. Such as:

```
using SafeMath for uint256;
```

Watch out for integer overflows, etc. 

# More details, notes threads

This will be a work in progress for us to get better at standards here. At the moment, I'm not sure how to address some of the liquidity issues. If you have a protocol that depends heavily on liquidity of another platform, you could very well be vulnerable. 

[Hack Tweet Thread](https://twitter.com/Dogetoshi/status/1326963117356625931)
[bZx First attack](https://quantstamp.com/blog/market-dynamics-of-the-1st-bzx-hack-part-1)
[Reentry attacks](https://medium.com/coinmonks/protect-your-solidity-smart-contracts-from-reentrancy-attacks-9972c3af7c21)
[Using `call` over `transfer` or `send`](https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/)

