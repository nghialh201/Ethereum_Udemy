import React, { Component } from "react";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import { Link, Router } from "../../../routes";
import { Form, Button, Input, Message, FormField } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";

class RequestNew extends Component {
  state = {
    description: "",
    value: "",
    recipient: "",
    errorMessage: "",
    loading: false,
  };

  static async getInitialProps(props) {
    const address = props.query.address;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    // console.log(this.props.address);
    this.setState({ loading: true, errorMessage: "" });

    const campaign = await Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();

      // console.log(accounts[0]);
      await campaign.methods
        .createRequest(
          this.state.description,
          web3.utils.toWei(this.state.value, "ether"),
          this.state.recipient
        )
        .send({ from: accounts[0] });

      Router.pushRoute("/campaigns/" + this.props.address + "/requests");
    } catch (err) {
      // console.log(err.message);
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Link route={"/campaigns/" + this.props.address + "/requests"}>
          <Button primary> Back</Button>
        </Link>
        <h1> Create a request</h1>
        <Form onSubmit={this.onSubmit} error={this.state.errorMessage}>
          <FormField>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={(event) => {
                this.setState({ description: event.target.value });
              }}
            ></Input>
          </FormField>

          <FormField>
            <label>Amount in Either</label>
            <Input
              value={this.state.value}
              onChange={(event) => {
                this.setState({ value: event.target.value });
              }}
            ></Input>
          </FormField>

          <FormField>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={(event) => {
                this.setState({ recipient: event.target.value });
              }}
            ></Input>
          </FormField>

          <Message
            error
            header="Error"
            content={this.state.errorMessage}
          ></Message>

          {/* <Link route={"/campaigns/" + this.props.address + "/requests/new"}> */}
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
          {/* </Link> */}
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
