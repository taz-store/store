import PropTypes from "prop-types";
import React from "react";
import gatsbylogo from '../../static/gatsbyLogo.svg';

import Header from "./header";

function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-5 overflow-x-hidden text-gray-900 bg-custom-mainBlue font-circular-black">
      <Header />

      <main className="flex-1 w-full max-w-full py-8 mx-auto md:py-16">
        {children}
      </main>

  <footer className="text-gray-700 body-font">
    <div className="">
      <div className="container flex flex-col-reverse px-5 py-4 mx-auto justify-evenly sm:flex-row">
        <p className="text-sm text-center text-gray-700 sm:text-left">Developed by —
          <a href="https://goosebumps.co.zw" className="ml-1 text-purple-400" target="_blank"
            rel="noopener noreferrer">Goosebumps Collective</a>
        </p>
        <p className='text-sm text-center text-gray-700 sm:text-left'> Powered by:<a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer"><img className='inline-block w-16 h-4 text-sm text-center text-gray-700 transition duration-300 ease-out transform  hover:bg-custom-offWhite hover:scale-105 sm:text-left sm:w-20' src={gatsbylogo} alt="" /></a></p>
      </div>
      
    </div>
  </footer>

    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
