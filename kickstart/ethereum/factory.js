import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xFe87FeEcCd7DcA3Db6278bEEdB569ffDF2ba1547"
);

export default instance;
