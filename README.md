# UniswapV2Core Mockup Contract

This repository contains the UniswapV2Core mockup contract, providing the core functionalities of the Eduswap decentralized exchange.

### Deployment Address

- UniswapV2Factory: [0xe745f43775B760958cd34ee83B3ab0c088F74630](https://sepolia.arbiscan.io/address/0xe745f43775B760958cd34ee83B3ab0c088F74630)
- Utils: [0x7aFB87aE9E37c365955012527f8a9039D6F2CA30](https://sepolia.arbiscan.io/address/0x7aFB87aE9E37c365955012527f8a9039D6F2CA30)

## Prerequisites

- Node.js v12+ LTS and npm (comes with Node)
- Hardhat

## Installation

### Clone the repository:

```bash
git clone https://github.com/ScumAgent/v2-core
```

### Navigate to the project folder:

```bash
cd v2-core
```

### Install dependencies:

```bash
npm istall
```

## Set Up Configuration

1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

### For Linux or macOS:

```bash
cp .example.env .env
```

### Windows:

```bash
copy .example.env .env
```

## Compilation

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

## Quick Start Guide

### 1. Testing

Run the following command to execute the contract tests. Ensure you've written the tests in your Hardhat project's test directory.

```bash
npx hardhat test
```

### 2. Deployment

Run the following command to compile the contracts using the Solidity compiler and deploy the UniswapV2Factory.

```bash
npx hardhat run scripts/deploy.js --network arbtest
```

## Conclusion

If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!
