const { ethers } = require("hardhat");

async function main() {
    // Retrieve the UniswapV2Factory contract
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    console.log("Deploying UniswapV2Factory contract...");

    // Deploy the contract
    const uniswapV2Factory = await UniswapV2Factory.deploy();

    // Wait until the contract is fully deployed
    await uniswapV2Factory.waitForDeployment();
    console.log("UniswapV2Factory deployed to:", uniswapV2Factory.target);

    // Retrieve the Utils contract
    const Utils = await ethers.getContractFactory("Utils");
    console.log("Deploying Utils contract...");

    // Deploy the contract
    const utils = await Utils.deploy();

    // Wait until the contract is fully deployed
    await utils.waitForDeployment();
    console.log("Utils deployed to:", utils.target);
}

// Execute the main function and handle errors appropriately
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
