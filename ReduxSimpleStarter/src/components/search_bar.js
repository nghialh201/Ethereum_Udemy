import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => {
            this.onChangeValue(event.target.value);
          }}
        ></input>
      </div>
    );
  }

  onChangeValue = (term) => {
    this.setState({ term });
    this.props.searchVideo(term);
  };
}

export default SearchBar;
