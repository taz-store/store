/* eslint-disable */
import { graphql, useStaticQuery, Link  } from 'gatsby';
import React from 'react'
import Layout from "../components/layout";
import Img from 'gatsby-image';

export const pageQuery = graphql`
query CategoryQuery($slug: String) {
    gcms {
      category(where: { slug: $slug }) {
        name
        slug
        products {
          description {
            text
            html
          }
          slug
          image {
            url
            node {
              childImageSharp {
                fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          price
          name
        }
      }
    }
  }

`;


const category = ( { data: {gcms: { category }, }}) => {
    // const { data: {gcms: { category }, }} = useStaticQuery(pageQuery);
    console.log(category)
    const products = category.products
    return (
        <Layout>
          <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {products.map((product) => (
            <div className="w-full p-4 lg:w-1/4 md:w-1/2" key={product.slug}>
              <Link to={`/products/${product.slug}`} className="relative block h-48 overflow-hidden rounded">
                {/* <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={product.image.url}/> */}
                <Img className="block object-cover object-center w-full h-full" fluid={product.image.node.childImageSharp.fluid} />
              </Link>
              <div className="mt-4">
                {/* <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{product.category.name}</h3> */}
                <h2 className="text-lg font-medium text-custom-offWhite title-font">{product.name}</h2>
                <p className='mt-1 text-gray-400'>
                  {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                  }).format(product.price)}
                </p>
              </div>
            </div>
            ))}
          </div>
          </div>
        </Layout>
    )
}

export default category

