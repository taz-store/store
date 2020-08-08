import React from 'react'
import PropTypes from 'prop-types';

const mixCard = ({data}) => {
    return (
        <div className="flex px-4 mb-4 ">
            {data.map(item => (
                <div key={item.node.id} className="flex flex-col w-full h-full p-8 mx-6 bg-gray-100 rounded-lg card">
                <div className="flex items-center h-24 mb-3">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-white bg-yellow-400 rounded-full">
                    <img src="/goose.png" alt=""/>
                  </div>
                  <div className="flex justify-between w-full">
                    <h2 className="text-lg font-medium text-left text-gray-900 title-font">{item.node.frontmatter.title}</h2>
                    <h3 className="text-sm text-right text-gray-700">Mixed by <br/>{item.node.frontmatter.DJ} </h3>
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="text-base leading-relaxed">
                    <em>{item.node.frontmatter.description}</em>
                    <br/><br/>
                  </p>
                  <div> 
                     <ol>
                       <span className='text-left' dangerouslySetInnerHTML={{__html: item.node.html}}></span>
                     </ol>
                  </div>
                  <a href={item.node.frontmatter.external} target="_blank" rel="noreferrer" className="inline-flex items-center w-auto mt-3 text-yellow-700 hover:text-gray-900">Stream Mix
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </div>
    )
}

mixCard.propTypes = {
    data: PropTypes.object,
  };

export default mixCard
