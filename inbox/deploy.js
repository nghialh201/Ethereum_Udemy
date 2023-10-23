const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
// const { interface, bytecode } = require("./compile");
const { abi, evm } = require("./compile");
//updated web3 and hdwallet-provider imports added for convenience
const provider = new HDWalletProvider(
  "5f8fd9e92d8d530534722cb4db846224c974533d42afe258cbe4586292f35ac4",
  "https://sepolia.infura.io/v3/0d35c34371ae4b158ff4a7a2cc76fbfc"
);
const web3 = new Web3(provider);

// deploy code will go here
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("My account:", accounts[0]);

  // const result = await new web3.eth.Contract(JSON.parse(interface))
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hello Everyone"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to: ", result.options.address);

  provider.engine.stop();
};

deploy();
