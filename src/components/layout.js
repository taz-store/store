import PropTypes from "prop-types";
import React from "react";
import Footer from './footer'
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-x-hidden bg-custom-mainBlue">
      <Header />

      <main className="flex items-center justify-center w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <Footer/>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
