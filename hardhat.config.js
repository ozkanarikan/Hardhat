require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  network: {
    hardhat: {
      chainId:1337
    },
    localhost:{
      chainId: 31337
    }


  }
};
