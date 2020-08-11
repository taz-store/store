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
          category {
            name
          }
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
            // <div className='relative px-6 py-10 mx-auto mt-16 cardContainer md:max-w-3xl' key={product.slug}>
            //   <h1>{product.slug}</h1>
            //   <Link to={`/products/${product.slug}`}>
            //     {product.name}
            //   </Link>
            // </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2" key={product.slug}>
        <Link to={product.slug} className="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={product.image.url}/>
        </Link>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{product.category.name}</h3>
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
        </Layout>
    )
}

export default products

