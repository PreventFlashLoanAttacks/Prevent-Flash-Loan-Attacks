# Prevent Flash Loan Attacks

# Purpose and Summary

This site is dedicated to information about flash loan attacks (which are usually just [price oracle attacks](https://blog.chain.link/flash-loans-and-the-importance-of-tamper-proof-oracles/)) and how to stop them. 

For a study done by the Imperial College London, check out this deep dive on the [historic bZx flash loan (oracle manipulation) attack](https://arxiv.org/pdf/2003.03810.pdf) for more information. 

The first step you can take, is to use [decentralized oracles](https://docs.chain.link/docs/architecture-decentralized-model) when working with data, a number of the projects that had issues moved themselves to Chainlink Price Feeds and are now secure. 

This is an open sourced project. If you'd like to help fund gitcoin grants for research, please consider donating. ETH Wallet Address: 0xb14B375f47ebf34BCDB9b914d1Ce28f775440778
# Table of Contents1. [Purpose and Summary](#purpose-and-summary)
1. [Purpose and Summary](#purpose-and-summary)
2. [Historic Attacks](#Historic-Attacks)
   1. [Post Mortems](#post-mortem)
   2. [Malicous Wallets](#malicous-wallets)
3. [What is a flash loan?](#what-is-a-flash-loan)
4. [Types of attacks](#types-of-attacks)
   1. [Oracle Manipulation](#oracle-manipulation)
      1. [Prevention](#prevention)
      2. [Prevention Example](#prevention-example)
   2. [Reentrancy](#Reentrancy)
      1. [Prevention](#prevention)
      2. [Prevention Example](#prevention-example)
   3. [Pump and Arbitrage](#Pump-and-Arbitrage)

# Historic Attacks

| Protocol | Reference | Date | Value | Transaction  | Cause | Fix |
|------|------|------|------|---|
| bZx (1) | [QuantStamp](https://quantstamp.com/blog/market-dynamics-of-the-1st-bzx-hack-part-1) | Feb-15-2020 01:38:57 AM +UTC | $300,000 | [Etherscan](https://etherscan.io/tx/0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838) | Pump and Arbitrage  | -- |
| bZx (2)      | [QuantStamp](https://quantstamp.com/blog/10-quick-and-dirty-facts-about-the-bzx-hacks)                                  | Feb-15-2020 01:38:57 AM +UTC | $645,000                   | [Etherscan](https://etherscan.io/tx/0x762881b07feb63c436dee38edd4ff1f7a74c33091e534af56c9f7d49b5ecac15) | Oracle Attack | [Chainlink Integration](https://bzx.network/blog/chainlink-oracles) |
| Origin Protocol | [CoinDesk](https://www.coindesk.com/origin-protocol-loses-3-25m-in-latest-flash-loan-attack-reports)          | Nov-17-2020 12:47:19 AM +UTC | $7 M                   | [Etherscan](https://etherscan.io/tx/0xe1c76241dda7c5fcf1988454c621142495640e708e3f8377982f55f8cf2a8401) | Re-entrancy Attack | XX |
| Harvest.Finance | [CoinDesk](https://www.coindesk.com/harvest-finance-24m-attack-triggers-570m-bank-run-in-latest-defi-exploit) | Oct-26-2020 02:58:16 AM +UTC | $24 M                  | [Etherscan](https://etherscan.io/tx/0xb460b70f11a93364fecf1f3c3ec49f053aecd2d6d9912c012170aa7a0de2d526) | Oracle Attack | XX |
| Value Defi      | [CoinDesk](https://www.coindesk.com/value-defi-suffers-6m-flash-loan-attack)                                  | Nov-14-2020 03:36:30 PM +UTC | $6 M                   | [Etherscan](https://etherscan.io/tx/0x46a03488247425f845e444b9c10b52ba3c14927c687d38287c0faddc7471150a) | Oracle Attack | [Chainlink Integration](https://decrypt.co/48892/value-defi-hacked-chainlink) |
| Akropolis      | [CoinDesk](https://www.coindesk.com/defi-project-akropolis-token-pool-drained)                                  | Nov-12-2020 12:04:41 PM +UTC | $2 M                   | [Etherscan](https://etherscan.io/tx/0xf15623567231c67df2b8bcc5540236fbda2c3ac11ecbec427048f11b582cb869) | Re-Entrancy | Re-Entry Check added |
| Cheese Bank      | [CoinTeleGraph](https://cointelegraph.com/news/value-defi-protocol-suffers-6-million-flash-loan-exploit)                                  | Nov-14-2020 03:36:30 PM +UTC | $6 M                   | [Etherscan](https://etherscan.io/tx/0x46a03488247425f845e444b9c10b52ba3c14927c687d38287c0faddc7471150a) | Oracle Attack |


## Post Mortems

- [bZx](https://bzx.network/blog/postmortem-ethdenver)
- [Arkopolis](https://www.notion.so/Akropolis-Hack-Update-10f48dfa44a544e5a7b24f298c759c6d)
- [Harvest.Finance](https://medium.com/harvest-finance/harvest-flashloan-economic-attack-post-mortem-3cf900d65217)
<!-- ## Malicious wallets / Users
Not really important, can find easily from the txs above

- [Etherscan](https://etherscan.io/address/0xb77f7bbac3264ae7abc8aedf2ec5f4e7ca079f83)
- [Harvest.Fiance](https://etherscan.io/address/0xf224ab004461540778a914ea397c589b677e27bb) 
- [Etherscan](https://etherscan.io/address/0xa773603b139ae1c52d05b35796df3ee76d8a9a2f) -->

# What is a flash loan?

A flash loan is a loan that is only valid within one blockchain transaction. Flash loans fail, if the borrower does not repay its debt before the end of the transaction borrowing the loan. That is, because a blockchain transaction can be reverted during its execution, if the condition of a repayment is not satisfied.

We can then see some easy attack vectors using this tool.

1. Take out a massive loan (token A) from a protocol supporting flash loans
2. Swap token A for token B on a DEX, dumping the price of A
3. Deposit the purchased token B as collateral on a DeFi protocol that uses the above DEX as its sole price feed, and borrow even more with this manipulated price
4. Use a portion of borrowed token A to fully pay back the original flash loan and keep the remaining tokens, (profiting here)

# Types of attacks

## Oracle Manipulation
### Also known as "Price Oracle Attacks"

This seems to be the #1 cause of attacks at the moment, by far. What is important to note, is that decentralized exchanges are not decentralized oracles. Using Uniswap, Sushiswap, or Curve to get pricing information to execute trades is pulling data from potocols whose price depends soley on liquidity. Looking at the infamous ground zero bZx attack that sparked this wave of attacks, we can see exactly what happens. These flash loans are used to crash and manipulate the price of these decentralized exchanges, which most projects deemed safe to use. The issue here relies in the fact that these protocols prices depend entirely on liquidity. 

See the above section for what something like this would look like. 

### Prevention

The easiest way to solve this is to use [decentralized oracles](https://blog.chain.link/flash-loans-and-the-importance-of-tamper-proof-oracles/). [Chainlink Price Feeds](https://feeds.chain.link/) are the leading decentralized oracle provider, and you can see that the vast majority of the protocols end up adding Chainlink to fix these attacks. If the data (price or otherwise) you're looking for isn't there yet, you can always request new decentralized networks or [build your own](https://docs.chain.link/docs/make-a-http-get-request). 

### Prevention Example 

Let's take a look at some malicious pseudo-code, pretend these are each ERC20s. 

```
uint256 priceOfMyGovernanceTokenInETH = dexTokenETHPairPrice;
myGovernanceToken.transfer(msg.sender, priceOfMyGovernanceTokenInETH)
```

This right here should be the easiest red flag on the planet. If you ever do a transfer based on a centralized price oracle, you're asking to get owned. One way or another. 

Check the [Chainlink documentation for decentralized price feeds](https://docs.chain.link/docs/get-the-latest-price)

```javascript
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";
// constructor and getLatestPrice function truncated
uint256 priceOfMyGovernanceTokenInETH = getLatestChainlinkPrice();
myGovernanceToken.transfer(msg.sender, priceOfMyGovernanceTokenInETH)
```

## Reentrancy

A reentrancy attack can occur when you create a function that makes an external call to another untrusted contract before it resolves any effects. If the attacker can control the untrusted contract, they can make a recursive call back to the original function, repeating interactions that would have otherwise not run after the effects were resolved.

### Prevention

`Send, Transfer, and Call`

### Prevention Example

```
function withdraw() external {
    uint256 amount = balances[msg.sender];
    require(msg.sender.call.value(amount)());
    balances[msg.sender] = 0;
}
```

## Pump and Arbitrage

### Prevention

## Safe Integer use and basic audits

Everything that applies to basic contract safety applies to flash loan attack safety. Such as:

```
using SafeMath for uint256;
```

Watch out for integer overflows, etc. 

# More details, notes threads

This will be a work in progress for us to get better at standards here. At the moment, I'm not sure how to address some of the liquidity issues. If you have a protocol that depends heavily on liquidity of another platform, you could very well be vulnerable. 

[Akropolis Hack Tweet Thread](https://twitter.com/Dogetoshi/status/1326963117356625931)
[bZx First attack](https://quantstamp.com/blog/market-dynamics-of-the-1st-bzx-hack-part-1)
[bZx Both attacks](https://academy.ivanontech.com/blog/defi-deep-dive-what-is-the-bzx-protocol#:~:text=bZx%20Hack%20%231&text=At%20an%20afterparty%2C%20they%20noticed,Bitcoin%20(WBTC)%20from%20Compound.)
[Reentry attacks](https://medium.com/coinmonks/protect-your-solidity-smart-contracts-from-reentrancy-attacks-9972c3af7c21)
[Using `call` over `transfer` or `send`](https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/)

