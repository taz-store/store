import { graphql, useStaticQuery, Link  } from 'gatsby';
import React from 'react'
import Layout from "../components/layout";

const pageQuery = graphql`
  {
    gcms {
        products {
          description {
            text
            html
          }
          slug
          image {
            url
          }
          price
          name
        }
      }
  }
`;


const products = () => {
    const { gcms: { products }, } = useStaticQuery(pageQuery);
    // console.log(products)
    return (
        <Layout>
            {products.map((product) => (
            <div className='relative px-6 py-10 mx-auto mt-16 cardContainer md:max-w-3xl' key={product.slug}>
              <h1>{product.slug}</h1>
              <Link to={`/products/${product.slug}`}>
                {product.name}
              </Link>
            </div>
          ))}
        </Layout>
    )
}

export default products

{/* {products}.map(({ product }) => (
    <Link key={slug} to={`/products/${slug}`}>
    {product.name}
    </Link> */}