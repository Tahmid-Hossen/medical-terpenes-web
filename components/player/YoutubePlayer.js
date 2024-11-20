import React from 'react'
import YouTube from 'react-youtube';

export default function YoutubePlayer({videoId}) {
  // Set up event handlers
  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    // player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };
  const opts = {
    height: "390",
    width: "640",
    borderRadius: "20px",
    playerVars: {
      autoplay: 0
    }
  };

  return (
    <YouTube
      className="text-center"
      iframeClassName={'rounded-4 shadow-custom'}
      borderRadius={5}
      opts={opts}
      videoId={videoId}
      onReady={onReady}
      onError={onError}
      
    />
  );
}
