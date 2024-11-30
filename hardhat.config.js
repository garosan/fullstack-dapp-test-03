require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SEPOLIA_API_URL = process.env.SEPOLIA_API_URL;
const BASE_SEPOLIA_API_URL = process.env.BASE_SEPOLIA_API_URL;
const ARBITRUM_SEPOLIA_API_URL = process.env.ARBITRUM_SEPOLIA_API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  paths: {
    sources: "./src/backend/contracts",
    artifacts: "./src/backend/artifacts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
  networks: {
    ethereumSepolia: {
      url: SEPOLIA_API_URL,
      accounts: [PRIVATE_KEY],
    },
    baseSepolia: {
      url: BASE_SEPOLIA_API_URL,
      accounts: [PRIVATE_KEY],
    },
    arbitrumSepolia: {
      url: ARBITRUM_SEPOLIA_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
