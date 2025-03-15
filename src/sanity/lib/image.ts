import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "sanity:client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(
  source: SanityImageSource,
  width: number = 600,
  height: number = 400
) {
  return builder.image(source).width(width).height(height).url();
}
