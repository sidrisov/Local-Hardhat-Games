# Local Hardhat Games

Let's work on our solidity skills while deploying against a local hardhat blockchain! Inside this repository you'll find 5 smart contracts labled `Game1` to `Game5`. The goal of each smart contract is to:

1. Deploy it to our local hardhat network
2. Send some transaction(s) to emit the Winner event!

If you see the Winner event in the transaction receipt: congratulations, you're a winner! Let's talk about how to setup and run each game.

## 1. Install Depedencies

Install all depedencies with `npm i`. This will install everything you need, including `hardhat`.

## 2. Run the Hardhat Node

Next, take a look at the `hardhat.config.js` file. Specifically this line:

```javascript
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'localhost' // <-- this one!
};
```

The `defaultNetwork` is going to set our scripts to run, by default, against our local node. 

Let's go ahead and run our local node. You can do so by running `npx hardhat node`. This will spin up a local, persistent hardhat blockchain on your port 8545. 

## 3. Deploy a Contract

In this new terminal run `npx hardhat run scripts/deploy.js`. If you do this successfully you should see a `contractAddresses.json` file in root directory which includes successfully deployed contract addresses.

## 4. Win the Game

Now run `npx hardhat run scripts/win.js`, this will go ahead and call `win` on all contract games. If you're successful you should see a transaction receipt with a `Winner` event inside of the `events` array.
