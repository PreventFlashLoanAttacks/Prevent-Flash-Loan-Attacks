(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{qs05:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return i}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r={},s={_frontmatter:r};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Types of attacks"),Object(o.b)("h2",null,"Oracle Manipulation"),Object(o.b)("p",null,"This seems to be the #1 cause of attacks at the moment, by far. What is important to note, is that decentralized exchanges are not decentralized oracles. Using Uniswap, Sushiswap, or Curve to get pricing information to execute trades is pulling data from potocols whose price depends soley on liquidity. Looking at the infamous ground zero bZx attack that sparked this wave of attacks, we can see exactly what happens. These flash loans are used to crash and manipulate the price of these decentralized exchanges, which most projects deemed safe to use. The issue here relies in the fact that these protocols prices depend entirely on liquidity."),Object(o.b)("p",null,"See the above section for what something like this would look like."),Object(o.b)("h3",null,"Prevention"),Object(o.b)("p",null,"The easiest way to solve this is to use ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://blog.chain.link/flash-loans-and-the-importance-of-tamper-proof-oracles/"}),"decentralized oracles"),". ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://feeds.chain.link/"}),"Chainlink Price Feeds")," are the leading decentralized oracle provider, and you can see that the vast majority of the protocols end up adding Chainlink to fix these attacks. If the data (price or otherwise) you're looking for isn't there yet, you can always request new decentralized networks or ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://docs.chain.link/docs/make-a-http-get-request"}),"build your own"),"."),Object(o.b)("h3",null,"Prevention Example"),Object(o.b)("p",null,"Let's take a look at some malicious pseudo-code, pretend these are each ERC20s."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"uint256 priceOfMyGovernanceTokenInETH = dexTokenETHPairPrice;\nmyGovernanceToken.transfer(msg.sender, priceOfMyGovernanceTokenInETH)\n")),Object(o.b)("p",null,"This right here should be the easiest red flag on the planet. If you ever do a transfer based on a centralized price oracle, you're asking to get owned. One way or another."),Object(o.b)("p",null,"Check the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://docs.chain.link/docs/get-the-latest-price"}),"Chainlink documentation for decentralized price feeds")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";\n// constructor and getLatestPrice function truncated\nuint256 priceOfMyGovernanceTokenInETH = getLatestChainlinkPrice();\nmyGovernanceToken.transfer(msg.sender, priceOfMyGovernanceTokenInETH)\n')),Object(o.b)("h2",null,"Reentrancy"),Object(o.b)("p",null,"A reentrancy attack can occur when you create a function that makes an external call to another untrusted contract before it resolves any effects. If the attacker can control the untrusted contract, they can make a recursive call back to the original function, repeating interactions that would have otherwise not run after the effects were resolved."),Object(o.b)("h3",null,"Prevention"),Object(o.b)("p",null,"Leave external transactions to the last parameter. These are the harder ones to prevent, but below is a simple example of what should be done."),Object(o.b)("p",null,"Whenever possible, use the built-in ",Object(o.b)("inlineCode",{parentName:"p"},"transfer()")," function. It only sends ",Object(o.b)("inlineCode",{parentName:"p"},"2300")," gas with the external call, making reentrancy almost impossible. Since that will give you just enough gas to write to a log."),Object(o.b)("p",null,"You could alternativly add a mutex, or a variable that puts a lock on calling the function or working with the variables until the work with them is done. You don't need to do all of these tips, but you do need to do at least one of these tips."),Object(o.b)("h3",null,"Prevention Example"),Object(o.b)("p",null,"This code:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"function withdraw() external {\n    uint256 amount = balances[msg.sender];\n    require(token.transfer(msg.sender, amount)());\n    balances[msg.sender] = 0;\n}\n")),Object(o.b)("p",null,"Should be changed so that the external token transfer call happens ",Object(o.b)("strong",{parentName:"p"},"after")," the balance is updated to 0."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"function withdraw() external {\n    uint256 amount = balances[msg.sender];\n    balances[msg.sender] = 0;\n    require(token.transfer(msg.sender, amount)());\n}\n")),Object(o.b)("p",null,"Additionally, you could do something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bool public mutex = false;\n\nfunction withdraw() external {\n    require(!mutex);\n    mutex = true;\n    uint256 amount = balances[msg.sender];\n    balances[msg.sender] = 0;\n    require(token.transfer(msg.sender, amount)());\n    mutex = false;\n}\n")),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/The_DAO_(organization)"}),"The DAO attack")," is an example of the reentrancy attack as well, and is also considered the mother of not just defi, but decentralized attacks in general on the ETH chain."),Object(o.b)("h2",null,"Race Conditions / Front Running"),Object(o.b)("p",null,'Since everything on-chain is public information, an attacker can watch transactions on-chain and look for those that would be detrimentalto the atacker, and make a transaciton with a higher gas price to occur before that transaction goes through. For example, they notice a whale is about to dump a token that the attacker holds, so the attacker pays extra gas to dump theirs first. This is known as "front running" in traditional finance, you could also think of it as a race condition because there can be scenarios where it\'s more complicated than this exmaple, but still boiled down to this.\nReentrancy technical falls under this category.'),Object(o.b)("h3",null,"Prevention"),Object(o.b)("p",null,"The best way to prevent against these is with a ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Commitment_scheme"}),"commit-reveal scheme"),'. This is when a project sends a transaction that goes through and is accepted, but is hashed or encrypted. Only after the transaction has concluded that they send a "reveal" phrase that decodes the transaction. This method prevents both miners and users from frontrunning transactions as they cannot determine the contents of the transaction. Transactional value however, cannot be commit-revealed, making this far less effective in the defi world. This is another very difficult type of attack to prevent.'),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://hackernoon.com/front-running-bancor-in-150-lines-of-python-with-ethereum-api-d5e2bfd0d798"}),"Bancor had run into this issue")," but fixed it before it was exploited."),Object(o.b)("p",null,"#TODO looking for projects that use commit-reveal."),Object(o.b)("h2",null,"Pump and Arbitrage"),Object(o.b)("p",null,'Pump and arbitrage attacks are difficult to find, some even saying they are less "attacks" and more "the system working as intended". Liquidity is an important part of any and all processes, so when a whale spikes or crashes a price, does that really reflect the true value of that crash/spike? It\'s hard to say.'),Object(o.b)("h3",null,"Prevention"),Object(o.b)("p",null,"Prevention at the moment hangs around preventing ",Object(o.b)("em",{parentName:"p"},"anyone")," from being able to cause these spikes. Sometimes, coordinated attacks from social groups can be enough to pump and dump a price of an asset."),Object(o.b)("h3",null,"Additional Important Notes"),Object(o.b)("p",null,"It's important to note that their are a LOT more vulnerabilities than what we are covering here. These are just the major issues we've seen in defi. This blog does a great job of outlining many of these attacks, and showing how to prevent them. ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://blog.sigmaprime.io/solidity-security.html#reentrancy"}),"Various Known Attacks")),Object(o.b)("p",null,"Anther great resource that goes over ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://solidity-by-example.org/0.6/"}),"additional attacks"),".\n",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://docs.soliditylang.org/en/v0.7.4/security-considerations.html"}),"Additional security considerations.")),Object(o.b)("p",null,'It\'s unclear if auditors should be catching these, or if developers and orgainizations are taking shortcuts, or if people are just "apeing" into projects before thinking. We are all leanring'))}i.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-types-of-attacks-mdx-5e4b0fb072daf27fefc4.js.map