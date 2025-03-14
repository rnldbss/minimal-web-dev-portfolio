import React from "react";

interface VideoProps {
  src: {
    videoWebm?: {
      asset: {
        url: string;
      };
    };
    videoMp4?: {
      asset: {
        url: string;
      };
    };
  };
  className: string;
}

export default function Video({ src, className }: VideoProps) {
  const webmUrl = src.videoWebm?.asset?.url;
  const mp4Url = src.videoMp4?.asset?.url;
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      width="100%"
      height="auto"
      aria-label="Project showcase video"
      className={`rounded aspect-video w-full ${className}`}
    >
      {webmUrl && <source src={webmUrl} type="video/webm" />}
      {mp4Url && <source src={mp4Url} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
