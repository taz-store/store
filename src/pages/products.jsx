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
          <h2 className="text-lg font-medium text-gray-900 title-font">{product.name}</h2>
          <p className='mt-1'>
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

{/* {products}.map(({ product }) => (
    <Link key={slug} to={`/products/${slug}`}>
    {product.name}
    </Link> */}

//     <section class="text-gray-700 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261">
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262">
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263">
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264">
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265">
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267">
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268">
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>