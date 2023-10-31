import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";

import Layout from "../components/Layout";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaign = await factory.methods.getCampaign().call();

    return { campaign };
  }

  renderCampaign() {
    const items = this.props.campaign.map((address) => {
      return { header: address, description: <a>View detail</a>, fluid: true };
    });

    return <Card.Group items={items}></Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaign</h3>
          <Button
            floated="right"
            content="Create Campaign"
            icon="add"
            primary
          ></Button>
          {this.renderCampaign()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
