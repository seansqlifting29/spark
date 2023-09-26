import React from 'react';
import videoFile from './assets/pexels_videos_4097 (1080p).mp4'; // Adjust the import path as needed


const VideoPlayer = () => {
    return (
      <div className="video-player">
        <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
