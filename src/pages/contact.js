import React from 'react'
import Layout from "../components/layout";
import SEO from '../components/seo';


const contact = () => {
    return (
        <Layout>
            <SEO/>
            <section className="relative text-gray-700 body-font">
                <div className="container flex px-5 py-24 mx-auto">
                    <form name="contact" data-netlify="true" method='POST' data-netlify-honeypot="bot-field" className= "relative z-10 flex flex-col w-full p-8 mt-10 rounded-lg md:ml-auto md:mt-0">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <h2 className="mb-4 text-xl font-medium text-center text-white title-font">Say Hello</h2>
                        <p className="mb-5 leading-relaxed text-custom-offWhite">We&apos;re here to discuss any questions you may have, how can we help?</p>
                        <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Name" type="text" name='name'/>
                        <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Email" type="email" name='email'/>
                        <textarea className="h-32 px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Message" name='message'></textarea>
                        <button className="mx-auto btn text-custom-offWhite" type='submit'>Submit</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default contact
