import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
// import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, keywords, title, image }) {
  // const { pathname } = useLocation()

  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          defaultImage: image
          siteUrl: url
        }
      }
    }
  `);

  
  const {siteUrl, defaultImage} = site.siteMetadata
  const metaDescription = description || site.siteMetadata.description;
  const seoImage = `${siteUrl}${image || defaultImage}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: seoImage,
        },
        {
          property: `og:image`,
          content: seoImage,
        },
        {
          name: `twitter:image`,
          content: seoImage,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
