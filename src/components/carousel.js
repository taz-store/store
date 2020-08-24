/* eslint-disable */ 

import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const carousel = () => {
    const { gcms: { slideshow: {slide} } } = useStaticQuery(pageQuery);

  const [seconds, setSeconds] = useState(0);
  
  let i 
  
  useEffect(() => {
      const interval = setInterval(() => {
          i < (slide.length - 1)  ? i++ : i = 0
          setSeconds(seconds => i)
        console.log(i)
        console.log(slide.length)
        console.log(slide[i].url)
    }, 3000);
    return () => clearInterval(interval);
}, []);

//   const bgImage = {
//     // backgroundImage: `url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')`
//     backgroundImage: `url(${slide[seconds].url})`
//     }
//     console.log('seconds equals' +seconds)

  return (
    <div className="flex items-center justify-center lg:h-full">
        <img className='inline-block object-cover w-full h-64 rounded-lg' src={slide[seconds].node.childImageSharp.fluid.src} alt=""/>
    </div>
  );
};













// Image List

// Change Image
//  console.log(slide[i].url)
// Run function when page loads


export default carousel

const pageQuery = graphql`
{
    gcms {
      slideshow(where: {id: "cke8jvnv4323l0173bpsozlio"}) {
        id
        slide {
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