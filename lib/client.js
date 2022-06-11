import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "05ikz0rh",
  dataset: "production",
  apiVersion: "2022-06-03",
  useCdn: true,
  token: process.env.accessToken,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
