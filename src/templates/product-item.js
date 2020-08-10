/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";


const ProductPage = ({
  data: {
    gcms: { product },
  },
}) => (
  <Layout>
  <section className="overflow-hidden text-gray-500 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap mx-auto lg:w-4/5">
      <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src={product.image.url}/>
      <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
        <h2 className="text-sm tracking-widest text-gray-600 title-font">{product.category}</h2>
        <h1 className="mb-1 text-3xl font-medium text-white title-font">{product.name}</h1>
        <p className="leading-relaxed">{product.description.text}</p>
        <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-800">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="w-6 h-6 border-2 border-gray-800 rounded-full focus:outline-none"></button>
            <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-800 rounded-full focus:outline-none"></button>
            <button className="w-6 h-6 ml-1 bg-indigo-500 border-2 border-gray-800 rounded-full focus:outline-none"></button>
          </div>
          <div className="flex items-center ml-6">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="py-2 pl-3 pr-10 text-white bg-gray-800 border border-gray-700 rounded appearance-none focus:outline-none focus:border-indigo-500">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="text-2xl font-medium text-white title-font">{new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </span>
          <button className="w-32 mx-auto btn">Button</button>
          
        </div>
      </div>
    </div>
  </div>
</section>
</Layout>
);

export const pageQuery = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        name
        description {
          text
        }
        
        image {
          url
        }
        price
        sizes
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
            
//           <div classNameName='prose text-gray-400 lg:prose-xl'> 
//               <Img classNameName='mb-10' image={post.frontmatter.image} alt={post.frontmatter.title} />
//               <h1 classNameName=''>{post.frontmatter.title}</h1>
//               <h5>By {post.frontmatter.author}</h5>
//               <h5>On {post.frontmatter.date}</h5>
//               <div classNameName='danger' dangerouslySetInnerHTML={{__html: post.html}}/>
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
