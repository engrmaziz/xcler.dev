import { SITE_CONFIG } from "./constants";

export const defaultSEO = {
  title: SITE_CONFIG.name,
  titleTemplate: `%s | ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
  canonical: SITE_CONFIG.url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Digital Agency`,
      },
    ],
  },
  twitter: {
    handle: "@xclerdev",
    site: "@xclerdev",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: SITE_CONFIG.keywords.join(", "),
    },
    {
      name: "author",
      content: SITE_CONFIG.founder,
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
};

export function buildPageSEO(
  title: string,
  description?: string,
  path?: string
) {
  return {
    title,
    description: description ?? SITE_CONFIG.description,
    canonical: path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url,
  };
}
