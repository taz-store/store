// // The site static query gets the default meta values that are set in the gatsby.config file


// import { useStaticQuery, graphql } from "gatsby";
// import PropTypes from "prop-types";
// import React from "react";
// import { Helmet } from "react-helmet";

// function SEO({ description, lang, meta, keywords, title, image, url, pathname }) {
//   const { site } = useStaticQuery(graphql`
//     query DefaultSEOQuery {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           url
//           image
//         }
//       }
//     }
//   `);

//   const defaults = data.site.siteMetadata;

//   if (defaults.baseUrl === '' && typeof window !== 'undefined') {
//     defaults.baseUrl = window.location.origin;
//   }

//   if (defaults.baseUrl === '') {
//     console.error('Please set a baseUrl in your site metadata!');
//     return null;
//   }

//   const title = post.title || defaults.title;
//   const description = post.description || defaults.description;
//   const url = new URL(post.path || '', defaults.baseUrl);
//   const image = post.image ? new URL(post.image, defaults.baseUrl) : false;

//   const metaDescription = description || site.siteMetadata.description;
//   const canonical = pathname ? `${site.siteMetadata.url}${pathname}` : null

  

//   return (
//     <Helmet>
//       <title>{title}</title>
//       <link rel="canonical" href={url} />
//       <meta name="description" content={description} />
//       {image && <meta name="image" content={image} />}

//       <meta property="og:url" content={url} />
//       <meta property="og:type" content="article" />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       {image && <meta property="og:image" content={image} />}

//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:creator" content={post.author.twitter} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       {image && <meta name="twitter:image" content={image} />}
//     </Helmet>
//   );
// };


// SEO.defaultProps = {
//   lang: `en`,
//   keywords: [],
//   meta: [],
// };

// SEO.propTypes = {
//   description: PropTypes.string,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string,
//   image: PropTypes.string,
//   pathname: PropTypes.string,
// };

// export default SEO;
