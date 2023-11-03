import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Link } from "../../../routes";
import { Button, Table } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const address = props.query.address;

    const campaign = Campaign(address);

    const requestCount = await campaign.methods.getRequestCount().call();
    // console.log("1111");
    // const approversCount = await campaign.methods.getSum().call();
    const summary = await campaign.methods.getSummary().call();
    const approversCount = summary[3];
    // console.log("2222");
    // console.log(approversCount);

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    return { address, requests, requestCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          id={index}
          key={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        ></RequestRow>
      );
    });
  }

  render() {
    return (
      <Layout>
        <h1> Request Index</h1>
        <Link route={"/campaigns/" + this.props.address + "/requests/new"}>
          <Button primary floated="right" style={{ marginBottom: "10px" }}>
            Create a request
          </Button>
        </Link>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Recipient</Table.HeaderCell>
              <Table.HeaderCell>Approval Count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderRows()}</Table.Body>
        </Table>
        <div>Found {this.props.requestCount} requests!</div>
      </Layout>
    );
  }
}

export default RequestIndex;
