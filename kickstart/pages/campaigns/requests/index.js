import React, { Component } from "react";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import { Link } from "../../../routes";
import { Card, Grid, Button, GridRow, GridColumn } from "semantic-ui-react";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const address = props.query.address;

    return { address };
  }

  render() {
    return (
      <Layout>
        <h1> Request Index</h1>
        <Link route={"/campaigns/" + this.props.address + "/requests/new"}>
          <Button primary>Create a request</Button>
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
