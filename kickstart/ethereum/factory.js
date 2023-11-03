import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4245179eb1Ea03920fEE4278D88d2b7CcC48ce61"
);

export default instance;
