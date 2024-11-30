const { ethers } = require("hardhat");
const toWei = (num) => ethers.parseEther(num.toString());
const fromWei = (num) => ethers.formatEther(num);

module.exports = { toWei, fromWei };
