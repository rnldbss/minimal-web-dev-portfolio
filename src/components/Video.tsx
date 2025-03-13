interface VideoProps {
  src: string;
}

export default function Video({ src }: VideoProps) {
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
      className="rounded aspect-video w-full"
    >
      <source src={src.videoWebm.asset.url} type="video/webm" />
      <source src={src.videoMp4.asset.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
