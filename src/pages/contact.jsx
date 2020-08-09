import React from 'react'
import Layout from "../components/layout";


const contact = () => {
    return (
        <Layout>
            <section className="relative text-gray-700 body-font">
                <div className="container flex px-5 py-24 mx-auto">
                    <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg md:ml-auto md:mt-0">
                        <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
                        <p className="mb-5 leading-relaxed text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <input className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500" placeholder="Email" type="email"/>
                        <textarea className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500" placeholder="Message"></textarea>
                        <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
                        <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default contact
