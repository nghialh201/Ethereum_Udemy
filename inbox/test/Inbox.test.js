const ganache = require("ganache");
const { Web3 } = require("web3");
const assert = require("assert");
const web3 = new Web3(ganache.provider()); //ganache mạng local cung cấp một vài tài khoản để test tại local
// const { interface, bytecode } = require("../compile");
const { abi, evm } = require("../compile");
// updated ganache and web3 imports added for convenience

// contract test code will go here

let acounts;
let inbox;

beforeEach(async () => {
  // console.log(interface);
  acounts = await web3.eth.getAccounts();

  // inbox = await new web3.eth.Contract(JSON.parse(interface))
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ["Say Hi, Now!"],
    })
    .send({
      from: acounts[1],
      gas: "1000000",
    });
});

describe("Can run", () => {
  it("Data list acounts:", () => {
    console.log(inbox);
    // assert.ok(inbox.options.address);
  });

  it("HEHe:", async () => {
    const mess = await inbox.methods.mess().call();
    console.log(mess);
  });

  it("change value", async () => {
    inbox.methods.setMess("Bye Bye :>");
  });
});
