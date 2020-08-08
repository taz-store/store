import React from "react";
import {  Link } from 'gatsby'
import PropTypes from 'prop-types'
import HomeLayout from "../components/HomeLayout";
import SEO from "../components/seo";
import Hero from "../images/heroVector.svg";
import seoImage from '../../static/img/orange.jpg'


function IndexPage({data}) {
  
  console.log(data)

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
      
      <SEO
        keywords={[`freelance`,`music`,`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        image={seoImage}
        url='https://goosebumps.co.zw/'
        pathname=""
      />

      <section className="min-h-screen text-center md:flex md:flex-row md:justify-center text-custom-offWhite">
        <div 
          id="heroText" 
          className="flex flex-col p-3 text-left md:w-1/3" 
          >
            <h2 
              className="mb-4 font-bold leading-none "
              style={heroHeading}
            >
              Taz<br/>
              store
            </h2><br/>
            <p className="pr-4 mb-4 text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis eum dolor est alias, nostrum eos amet odio inventore expedita.
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

      <section id="about" className='px-6 md:px-20 text-custom-offWhite'>
        <div className='flex flex-col px-6 py-10 bg-gray-700 md:flex-row rounded-2xl'>
          <img className='inline w-64 max-w-sm p-4 mx-auto md:w-1/3 lg:w-1/2 md:max-w-lg' src={Hero} alt=""/>
          <div id="text" className='inline-block m-auto md:flex md:flex-col md:px-16'>
            <h2 style={heading}>Who we are</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed voluptates alias officiis nobis veritatis, libero rem. Mollitia, voluptas, quia pariatur unde repudiandae magnam amet labore dignissimos ex eveniet architecto laudantium?
            </p>
            <Link to='/about' className="px-6 mx-auto mt-12 mb-6 md:mx-0 btn">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section id="products" className='mt-20 text-custom-offWhite'>
      <h2 className='pb-20 text-center' style={heading}>OUR PRODUCTS</h2>
      {[
            {
              heading: `Clothing`,
              description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum, nam dolor repellat quis cumque quo est recusandae veritatis sequi!`,
              route: `Music`,
            },
            {
              heading: `Art`,
              description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum, nam dolor repellat quis cumque quo est recusandae veritatis sequi!`,
              route: `Web Development`,
            },
            {
              heading: `Hair`,
              description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum, nam dolor repellat quis cumque quo est recusandae veritatis sequi!`,
              route: `About`,
            },
          ].map((card) => (
            <div className='relative px-6 py-10 mt-16 cardContainer' key={card.route}>
              <div style={productimg} className='absolute top-0 inline'>
                <img className='flex w-48 h-48 mx-auto -mt-16 rounded-2xl' src="https://source.unsplash.com/random" alt="" />
                </div>
              <div id='cardText' className='flex flex-col justify-between px-10 pt-32 pb-10 bg-gray-600 rounded-2xl min-h-lg'>
                <span className='block'>
                  <h2 style={heading} className=''>{card.heading}</h2>
                  <p className='mb-5 text-lg'>{card.description}</p>
                </span>
                <Link className='w-5' to={card.route}>
                    <svg className='inline w-8' fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          ))}
      </section>

      <section id="Contact" className="flex flex-row justify-center pt-10 mb-24 text-custom-offWhite ">
      <div className="inline-block px-12 mx-auto text-center rounded-lg">
        <h1 style={heading} className="mb-2 text-2xl font-bold text-center md:text-3xl">
          Contact Us
        </h1>
        <p className="font-bold text-center text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus culpa facilis! Dolorum magnam dignissimos obcaecati corrupti rerum delectus recusandae.</p>
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