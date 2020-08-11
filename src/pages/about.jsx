import React from 'react'
import Layout from "../components/layout";


const about = () => {
    return (
        <Layout>
            <section className="text-gray-700 body-font">
  <div className="container flex flex-col px-5 py-24 mx-auto">
    <div className="mx-auto">
      <div className="h-64 overflow-hidden rounded-lg">
        <img alt="content" className="object-cover object-center w-full h-full" src="https://source.unsplash.com/random"/>
      </div>
      <div className="flex flex-col mt-10 sm:flex-row">
        <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
          <div className="inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="mt-4 text-lg font-medium text-gray-200 title-font ">Phoebe Caulfield</h2>
            <div className="w-12 h-1 mt-2 mb-4 rounded bg-custom-accentBlue"></div>
            <p className="text-base text-gray-600">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div className="pt-4 mt-4 text-center border-t border-gray-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
          <p className="mb-4 text-lg leading-relaxed">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </Layout>
    )
}

export default about
