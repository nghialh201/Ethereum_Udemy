import React from "react";

const VideoListItem = ({ video, selectVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  // console.log(video);
  // console.log(selectVideo);
  return (
    <li className="list-group-item" onClick={() => selectVideo(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}></img>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
