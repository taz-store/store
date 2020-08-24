import PropTypes from "prop-types";
import React from "react";
import Footer from './footer'
import Header from "./header";

function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-5 overflow-x-hidden text-gray-900 bg-custom-mainBlue font-circular-black">
      <Header />

      <main className="flex-1 w-full max-w-full py-8 mx-auto md:px-12 md:py-16">
        {children}
      </main>

    <Footer/>

    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
