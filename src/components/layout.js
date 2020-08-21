import PropTypes from "prop-types";
import React from "react";
import gatsbylogo from '../../static/gatsbyLogo.svg';

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-x-hidden bg-custom-mainBlue">
      <Header />

      <main className="flex items-center justify-center w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="text-gray-700 body-font">
                {/* <section className="text-gray-700 body-font">
            <div className="container px-5 mx-auto">
              <div className="flex flex-col w-full text-center">
                <h1 className="mb-4 text-2xl font-medium text-custom-offWhite sm:text-3xl title-font">Newsletter Signup</h1>
                <p className="mx-auto text-base leading-relaxed lg:w-2/3">Sign up for our newsletter to stay up to date with our products, promotions, and more. No more than one email a week, promise 😊 </p>
              </div>
              <div className="flex flex-col w-full px-8 mx-auto lg:w-4/5 sm:flex-row sm:px-0">
                <input className="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-indigo-500 sm:mb-0" placeholder="Full Name" type="text"/>
                <input className="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-indigo-500 sm:mb-0" placeholder="Email" type="email"/>
                <button className="px-5 py-3 font-semibold text-gray-100 bg-teal-500 rounded ">Sign up</button>
              </div>
            </div>
          </section> */}
        <div className="">
          <div className="container flex flex-col-reverse px-5 py-4 mx-auto justify-evenly sm:flex-row">
            <p className="text-sm text-center text-gray-700 sm:text-left">Developed by —
              <a href="https://goosebumps.co.zw" className="ml-1 text-purple-400" target="_blank"
                rel="noopener noreferrer">Goosebumps Collective</a>
            </p>
            <p className='text-sm text-center text-gray-700 sm:text-left'> Powered by:<a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer"><img className='inline-block w-16 h-4 text-sm text-center transition duration-300 ease-out transform hover:bg-custom-offWhite hover:scale-105 sm:text-left sm:w-20' src={gatsbylogo} alt="" /></a></p>
          </div>
        </div>
    </footer>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
