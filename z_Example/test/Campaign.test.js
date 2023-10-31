const assert = require("assert");
const { access } = require("fs");
const ganache = require("ganache");
const { beforeEach } = require("mocha");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let acounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  acounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: acounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: acounts[0],
    gas: "1000000",
  });

  [campaignAddress] = await factory.methods.getCampaign().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("factory and campain", () => {
  it("Deploys factory and campain", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
});
