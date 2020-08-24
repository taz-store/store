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
        setSeconds(i)
    }, 3000);
    return () => clearInterval(interval);
    }, []);


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