const fs = require("fs");

// replace the name of the contract with which one you want to deploy!
const contractNames = ["Game1", "Game2", "Game3", "Game4", "Game5"];
var contractAddresses = {};

async function main() {
  console.log("!");
  for (let i = 0; i < contractNames.length; i++) {
    const Game = await hre.ethers.getContractFactory(contractNames[i]);
    // if you need to add constructor arguments for the particular game, add them here:
    const game = await Game.deploy();
    console.log(`${contractNames[i]} deployed to address: ${game.address}`);
    contractAddresses[contractNames[i]] = game.address;
  }
}

main()
  .then(() => {
    fs.writeFileSync('./contractAddresses.json', JSON.stringify(contractAddresses));
    console.log(`Successfully deployed contract addresses: ${JSON.stringify(contractAddresses)}`);
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
