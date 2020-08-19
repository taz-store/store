/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import Img from '../components/Img'



function ProductPage({data: { gcms: { product },},}) {
console.log(product.image.node.childImageSharp.fluid)
const sizes = (product.sizes)
console.log(sizes)
  
  return(
  <Layout>
  <section className="overflow-hidden text-gray-500 shadow-xl body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap mx-auto lg:w-4/5">
      <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src={product.image.node.childImageSharp.fluid.src}/>
      {/* this Gatsby-image component one isn't working yet*/}
      <Img className='inline-block w-56' fluid={product.image.node.childImageSharp.fluid.src} /> 
      <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
        <h2 className="text-sm tracking-widest text-gray-600 title-font">{product.category.name}</h2>
        <h1 className="mb-1 text-3xl font-medium text-white title-font">{product.name}</h1>
        <p className="leading-relaxed">{product.description.text}</p>
        
        {/* <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-800">
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
        </div> */}
        <div className="flex">
          <span className="text-2xl font-medium text-white title-font">{new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </span>
        </div>
      </div>
    </div>
  <div className="flex mx-auto lg:w-4/5">
  </div>
  <form name="ProductItem" data-netlify="true" method='POST' data-netlify-honeypot="bot-field"  className="flex flex-col w-full mt-8 md:ml-auto md:py-8 md:mt-0">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="ProductItem" />
      <input type="hidden" name="product-name" value={product.name} />
      <h2 className="mb-1 text-lg font-medium text-white title-font">Place an order</h2>
      <p className="mb-5 leading-relaxed text-gray-600">Please enter your details and we&#39;ll get back to you as soon as possible.</p>
      <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Name" type="text" name="name"/>
      <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Email" type="email" name="email"/>
      <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Quantity" type="number" name="quantity"/>
      <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Address 1" type="text" name="addressOne"/>
      <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Address 2" type="text" name="addressTwo"/>
      <select className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" name="size">
          {sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
                ))}
      </select>
      <button className="mx-auto btn" type='submit'>Submizzle</button>
      <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </form>
  </div>
</section>
</Layout>
  )
}


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
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        price
        sizes
        category {
          name
        }
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
