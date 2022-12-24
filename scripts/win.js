const contractAddresses = require('../contractAddresses.json');

async function game1() {
  // attach to the game
  const game = await hre.ethers.getContractAt("Game1", contractAddresses["Game1"]);

  // do whatever you need to do to win the game here:
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

async function game2() {
  // attach to the game
  const game = await hre.ethers.getContractAt("Game2", contractAddresses["Game2"]);
  // condition: x > 0 && y > 0 && x + y == 50

  await game.setX(25);
  await game.setY(25);
  // do whatever you need to do to win the game here:
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

async function game3() {
  // attach to the game
  const game = await hre.ethers.getContractAt("Game3", contractAddresses["Game3"]);

  // condition y = 210, sum = 255, x = 45

  // do whatever you need to do to win the game here:
  const tx = await game.win(45);

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

async function game4() {
  // attach to the game
  const game = await hre.ethers.getContractAt("Game4", contractAddresses["Game4"]);

  // condition y = 210, sum = 10, x = 56 - to overflow

  // do whatever you need to do to win the game here:
  const tx = await game.win(56);

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

async function game5() {
  // attach to the game
  const game = await hre.ethers.getContractAt("Game5", contractAddresses["Game5"]);

  await game.giveMeAllowance(10000);
  await game.mint(10000);

  // do whatever you need to do to win the game here:
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

Promise.all([game1(), game2(), game3(), game4(), game5()])
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
