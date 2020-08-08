import {  Link } from "gatsby";
// import { graphql, useStaticQuery, Link } from "gatsby";
import tazLogo from "../images/tazlogo.svg"
import React from "react";


function Header() {
  // const [isExpanded] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="bg-transparent">
      <div className="flex flex-wrap items-center justify-center max-w-4xl p-4 mx-auto md:p-4">

        <nav className='flex items-center w-auto text-xs '>
        <Link
          className="block mx-2 text-center text-white no-underline md:inline-block md:mt-0 md:mx-3"
          to='/'>
          Home
        </Link>
        <Link
          className="block mx-2 text-center text-white no-underline md:inline-block md:mt-0 md:mx-3"
          to='/products'>
          Products
        </Link>
        <Link to="/">
          
          <img
          alt="Cat and human sitting on a couch"
          className="w-16 md:w-24 "
          src={tazLogo}
        />
        </Link>
        <Link
          className="block mx-2 text-center text-white no-underline md:inline-block md:mt-0 md:mx-3"
          to='/about'>
          About
        </Link>
        <Link
          className="block mx-2 text-center text-white no-underline md:inline-block md:mt-0 md:mx-3"
          to='/contact'>
          Contact
        </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;

// {[
//   {
//     route: `/`,
//     title: `Home`,
//   },
//   {
//     route: `/products`,
//     title: `Products`,
//   },
//   {
//     route: `/music`,
//     title: `Music`,
//   },
//   {
//     route: `/about`,
//     title: `About`,
//   },
//   {
//     route: `/contact`,
//     title: `Contact`,
//   },
// ].map((link) => (
  
// ))}