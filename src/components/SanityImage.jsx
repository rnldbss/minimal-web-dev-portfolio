import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../sanityClient";
const builder = imageUrlBuilder(sanityClient);

export default function SanityImage({
  image,
  width,
  height,
  alt = "Sorry, someone missed this alt text.",
  className = "",
  priority = false,
  loading = "lazy",
  fill = false,
}) {
  const imageUrl = builder.image(image).width(width).height(height).url();

  const style = fill
    ? { objectFit: "cover", width: "100%", height: "100%" }
    : undefined;

  return (
    <img
      src={imageUrl}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      loading={priority ? "eager" : loading}
      style={style}
      srcSet={imageUrl}
    />
  );
}
