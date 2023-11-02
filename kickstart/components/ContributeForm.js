import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state() {
    value: "";
    errorMessage: "";
    loading: false;
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const campaign = Campaign(this.props.address);

      const accounts = await web3.eth.getAccounts();
      // console.log(accounts[0], this.state.minimumContribution);
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });

      Router.pushRoute("/campaigns/" + this.props.address);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      //   <Form onSubmit={this.onSubmit} error={this.state.errorMessage}>
      <Form onSubmit={this.onSubmit} error={this.state.errorMessage}>
        <Form.Field>
          <label>Amount Contribution</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={(event) => {
              this.setState({
                value: event.target.value,
              });
            }}
          ></Input>
        </Form.Field>
        <Message
          error
          header="Error"
          content={this.state.errorMessage}
        ></Message>
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
