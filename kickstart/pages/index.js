import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";

import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaign = await factory.methods.getCampaign().call();

    return { campaign };
  }

  renderCampaign() {
    const items = this.props.campaign.map((address) => {
      return {
        header: address,
        description: (
          <Link
            // route={"/campaigns/${address}"}
            route={"/campaigns/" + address}
            // as={`/campaigns/${address}`}
            // href={{
            //   pathname: `/campaigns/show/`,
            //   query: { address },
            // }}
          >
            <a>View detail</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items}></Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaign</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add"
                primary
              ></Button>
            </a>
          </Link>
          {this.renderCampaign()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
