import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xAdb792519Cb6c27fE26FEc540eDA92b0eE488aFd"
);

export default instance;
