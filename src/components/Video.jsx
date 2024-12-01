import React from "react";

const Video = () => {
  return (
    <div className="video-container">
      <video width="200" height="210" controls>
        <source src="videos/Introducing_Nepal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video width="200" height="210" controls>
        <source src="/videos/Namche_Bazar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="200" height="210" controls>
        <source src="/videos/Kathmandu_Nepal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="200" height="210" controls>
        <source src="/videos/Lumbini.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="200" height="210" controls>
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="200" height="210" controls>
        <source src="/videos/paragliding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
