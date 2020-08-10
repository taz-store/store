/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

const ProductPage = ({
  data: {
    gcms: { product },
  },
}) => (
  <React.Fragment>
    <h1>{product.name}</h1>
    <p>{product.description.text}</p>
    <p>
      {new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(product.price)}
    </p>
  </React.Fragment>
);

export const pageQuery = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        name
        description {
          text
        }
        price
      }
    }
  }
`;

export default ProductPage;

// import React from 'react'
// import { graphql, } from 'gatsby';
// import PropTypes from 'prop-types';
// import Layout from "../components/layout";
// import SEO from '../components/seo'
// import Img from '../components/Img'


// export default function Template({data}) {
//     const post = data.markdownRemark
//     console.log(data)
//     return(
//         <Layout>
//           <SEO 
//             title={post.frontmatter.title}
//             description={post.frontmatter.slug || post.excerpt || 'nothin’'}
//             pathname={post.frontmatter.path}
//             image={post.frontmatter.image}
//             article />
            
//           <div className='prose text-gray-400 lg:prose-xl'> 
//               <Img className='mb-10' image={post.frontmatter.image} alt={post.frontmatter.title} />
//               <h1 className=''>{post.frontmatter.title}</h1>
//               <h5>By {post.frontmatter.author}</h5>
//               <h5>On {post.frontmatter.date}</h5>
//               <div className='danger' dangerouslySetInnerHTML={{__html: post.html}}/>
//           </div>
//         </Layout>
//     )
// }

// Template.propTypes = {
//     data: PropTypes.object,
//   };

// export const postQuery = graphql`
// query BlogPostByPath($path: String!) {
//   markdownRemark(frontmatter: {path: {eq: $path}}) {
//     html
//     frontmatter {
//       path
//       title
//       author
//       date(formatString: "DD MMMM, YYYY")
//       description
//       slug
//       image {
//         childImageSharp {
//           fluid(maxWidth: 1000, quality: 80 ) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//     excerpt
//   }
// }

// `
