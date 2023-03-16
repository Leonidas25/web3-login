# Web3 Login, Token Transfer and Voting

## Installation

This project consists of two main parts: the smart contract and the frontend. Follow these steps to set up the project on your local machine.

### Smart Contract

1. Open a new terminal.
2. Install the necessary dependencies by running:

```bash
npm install
```

3. Compile the smart contracts by running:

```bash
npx hardhat compile
```

4. Deploy the smart contracts to the local network by running:

```bash
npx hardhat run --network localhost scripts/deploy.js
```

5. Start a local Ethereum node by running:

```bash
npx hardhat node
```

### Frontend

1. Open a new terminal.
2. Navigate to the `frontend` directory by running:

```bash
cd frontend
```

3. Install the necessary dependencies by running:

```bash
npm install
```

4. Start the frontend development server by running:

```bash
npm run start
```

### Connect MetaMask Wallet to Localhost

1. Open MetaMask and sign in to your account.
2. Click on the network dropdown at the top of the MetaMask window (it will likely say "Ethereum Mainnet").
3. Select "Custom RPC" at the bottom of the list.
4. Enter the following information in the form:

   - Network Name: `Localhost 8545`
   - New RPC URL: `http://localhost:8545`
   - Chain ID: `1337`
   - Currency Symbol (optional): `TestCoin`
   - Block Explorer URL (optional): Leave this empty.

5. Click "Save" to add the custom network.

There is also an option to import a private key from the hardhat node terminal.

### Get Test Ether

1. Open a new terminal.
2. Request test Ether for a specific address by running:

```bash
npx hardhat --network localhost faucet 0xa637007886175f039aa59f22c509f5d446c8fcd9
```

Replace `0xa637007886175f039aa59f22c509f5d446c8fcd9` with the Ethereum address you want to fund with test Ether.

## Usage

After setting up the project, you can interact with the deployed smart contracts through the frontend.

## License

[MIT](https://choosealicense.com/licenses/mit/)


