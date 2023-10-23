import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAj7wkT0hCb5_2gAGYKRy-NvI2OsbrPUBk";

//some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    // YTSearch({ key: API_KEY, term: "Shape of you" }, (data) => {
    //   this.setState({ videos: data, selectedVideo: data[0] });
    //   // console.log(data);
    // });
    this.searchVideo("Shape of you");
  }

  searchVideo(term) {
    YTSearch({ key: API_KEY, term: { term } }, (data) => {
      this.setState({ videos: data, selectedVideo: data[0] });
      // console.log(data);
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchVideo={(term) => {
            this.searchVideo(term);
          }}
        ></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList
          videos={this.state.videos}
          selectVideo={(selectedVideo) => {
            this.setState({ selectedVideo });
          }}
        ></VideoList>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector(".container"));
