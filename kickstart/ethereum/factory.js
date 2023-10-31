import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x57e5CDd1e11aa14112DDbe79Cd7770c22A35a9a8"
);

export default instance;
