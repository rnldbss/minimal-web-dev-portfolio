import ButtonSecondary from "./ButtonSecondary";
import MyPortableText from "./portable-text/MyPortableText";
import Video from "./Video";

export default function PortfolioCard({
  cardHeading,
  cardBody,
  cardImage,
  cardImageAlt,
  projectSlug,
  videoSrc,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="w-full">
        {videoSrc ? (
          <Video src={videoSrc} />
        ) : (
          <img
            src={cardImage}
            alt={cardImageAlt}
            className="object-contain w-full h-full"
          />
        )}
      </div>
      <div className="w-full my-auto space-y-2">
        <h3>{cardHeading}</h3>
        <MyPortableText content={cardBody} />
        <ButtonSecondary
          buttonText="Read details"
          buttonHref={`/portfolio/${projectSlug}`}
        />
      </div>
    </div>
  );
}
