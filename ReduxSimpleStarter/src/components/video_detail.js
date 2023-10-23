import React from "react";

const VideoDetail = ({ video }) => {
  // console.log(video);
  if (!video) {
    return <div>inloading...</div>;
  }
  const VideoId = video.id.videoId;
  // const url = "https://www.youtube.com/embed/${VideoId}";
  const url = `https://www.youtube.com/embed/${VideoId}`;

  return (
    // <div>{url}</div>
    <div className="Video-ditail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
