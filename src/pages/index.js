import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types'
import HomeLayout from "../components/HomeLayout";
// import SEO from "../components/seo";
import Hero from "../images/heroVector.svg";
// import seoImage from '../../static/img/orange.jpg'
import Carousel from '../components/carousel'

const pageQuery = graphql`
  {
    gcms {
      about: sectionHeading(where: {id: "cke1thbps05gw0174wnu2v49l"}) {
        title
        description
      }
      hero: sectionHeading(where: {id: "cke1v7glk06ac01176idyrkwc"}) {
        description
        heading
      }
      categories {
        name
        slug
        description {
          text
        }
        id
        image {
          url
          node {
            childImageSharp {
              fluid(maxWidth: 560) {
                src
              }
            }
          }
        }
      }
      productCardIndices {
        description
        title
        image {
          url
          node {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

function IndexPage() {
  const { gcms: { about, categories, hero } } = useStaticQuery(pageQuery);

  const heroHeading = {
    fontSize: '6rem',
  }
  const heading = {
    fontSize: '2.5rem',
    fontFamily: 'Circular-Bold',
    color: '#EFEFEF'
  }
  const productimg = {
    width: 'calc(100% - 2.75rem)',
  }

  
  
  return (
    <HomeLayout className='overflow-x-hidden'>
      
      {/* <SEO
        keywords={[`freelance`,`music`,`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        image={seoImage}
        url='https://goosebumps.co.zw/'
        pathname=""
      /> */}

      <section className="min-h-screen mb-12 text-center md:flex md:flex-row md:justify-center text-custom-offWhite">
        <div 
          id="heroText" 
          className="flex flex-col p-3 text-left md:w-1/3" 
          >
            <h2 
              className="mb-4 font-bold leading-none "
              style={heroHeading}
            >
              {hero.heading}
            </h2><br/>
            <p className="pr-4 mb-4 text-xl font-bold">
              {hero.description}
            </p>
            <Link to='/products' className="hidden w-56 px-6 mt-4 md:flex btn">
              View Products
            </Link>
        </div>

          <div className="relative flex flex-row max-h-screen">
          {/* this is the mobile button */}
            <Link to='/products' className="absolute ml-20 md:hidden btn"> 
              View Products 
            </Link>
            <img
              alt="Cat and human sitting on a couch"
              className="w-64 mb-8 ml-40 md:w-2/3"
              src={Hero}
            />
          </div>
      </section>

      <section id="about">
      {/* <!-- component --> */}
        <div>
            <div className=" lg:py-12 lg:flex lg:justify-center">
                <div className="bg-gray-400 rounded-lg lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg">
                    <div className="p-4 lg:w-1/2">
                        <Carousel />
                    </div>
                    <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                        <h2 style={heading} className="text-custom-mainBlue"><span className='text-teal-600'>Who we</span> <span className="text-custom-mainBlue">are</span></h2>
                        <p className="mt-4 text-gray-800">{about.description}</p>
                        <div className="mt-8">
                            <Link to='/about' className="px-5 py-3 font-semibold text-gray-100 bg-teal-500 rounded ">About us</Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      </section>

      <section id="products" className='mt-20 text-custom-offWhite'>
      <h2 className='pb-20 text-center' style={heading}>OUR PRODUCTS</h2>
      <div id="productCardContainer" className='flex flex-col productCardContainer '>
          {
          categories.map((card) => (
            <div className='relative px-6 py-10 mx-auto mt-16 cardContainer md:max-w-3xl md:min-w-2xl' key={card.name}>
              <div id='imageWrapper' style={productimg} className='absolute top-0 inline md:flex md:flex-col md:justify-center md:top-auto md:min-h-sm'>
                <img id='cardImage' className='flex w-48 h-48 mx-auto -mt-16 shadow-xl md:m-0 md:w-56 md:h-56 md:-ml-16 rounded-2xl md:mx-0' src={card.image.node.childImageSharp.fluid.src} alt="" />
              </div>
              <div id='cardText' className='flex flex-col justify-between px-10 pt-32 pb-10 bg-gray-400 rounded-xl min-h-lg md:min-h-sm md:justify-center md:pt-12 md:pl-56'>
                <span className='block'>
                  <h2 style={heading}><span className='text-teal-600'>{card.name}</span></h2>
                  <p className='mb-5 text-lg text-gray-800'>{card.description.text}</p>
                </span>
                <Link className='z-20 w-8' to={`/products/categories/${card.slug}`}>
                    <svg className='inline w-8 text-custom-mainBlue' fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="Contact" className="flex flex-row justify-center pt-10 mb-24 text-custom-offWhite ">
      <div className="inline-block px-12 mx-auto text-center rounded-lg">
        <h1 style={heading} className="mb-2 text-2xl font-bold text-center md:text-3xl">
          Contact Us
        </h1>
        <p className="inline-block mx-auto font-bold text-center text-gray-200 lg:w-1/3">We&apos;re here to discuss any questions you may have, how can we help?</p>
        <Link to='/contact' className="px-6 mx-auto mt-12 btn">
              Say Hello
            </Link>
      </div>
    </section>
    </HomeLayout>
  );

}

IndexPage.propTypes = {
  data: PropTypes.object,
  key: PropTypes.object,
};



export default IndexPage;

// export const Query = graphql`

// `
{/* <Feature bigHead="Featured Web Projects" smallHead="Portfolio">
    <PortfolioCard data={data.portfolio.edges}/> 
</Feature>
<Feature bigHead="Featured Playlists" smallHead="Curated tunes">
    <PlaylistCard data={data.playlists.edges}/> 
</Feature>
<Feature bigHead="Featured Mixes" smallHead="Curated tunes">
    <MixCard data={data.mixes.edges}/> 
</Feature> */}