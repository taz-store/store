import React from 'react'
import Layout from "../components/layout";


const contact = () => {
    return (
        <Layout>
            <section className="relative text-gray-700 body-font">
                <div className="container flex px-5 py-24 mx-auto">
                    <form name="contact" data-netlify="true" method='POST' data-netlify-honeypot="bot-field" className= "relative z-10 flex flex-col w-full p-8 mt-10 rounded-lg bg-custom-offWhite md:ml-auto md:mt-0">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
                        <p className="mb-5 leading-relaxed text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <input className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500" placeholder="Name" type="text" name='name'/>
                        <input className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500" placeholder="Email" type="email" name='email'/>
                        <textarea className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500" placeholder="Message" name='message'></textarea>
                        <button className="mx-auto bg-blue-900 btn text-custom-offWhite hover:bg-blue-800" type='submit'>Button</button>
                        <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default contact
