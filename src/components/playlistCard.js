import React from 'react'
import PropTypes from 'prop-types';

const playlistCard = ({data}) => {
    console.log(data)
    return (
        <div  className="flex mb-4 px-4">
        {data.map(item => (
        <div key={item.node.id} className="card mx-4 flex rounded-lg h-full w-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
            <img src="./goose.png" alt="playlist logo"></img>
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">{item.node.frontmatter.title}</h2>
        </div>
        <div className=" flex flex-col flex-grow justify-between">
          <span className="leading-relaxed text-left" dangerouslySetInnerHTML={{__html: item.node.html}}/>
          <a href={item.node.frontmatter.external} className="mt-3 hover:text-gray-900 text-yellow-700 inline-flex items-center relative bottom-0 ">Stream
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      ))}
      </div>
    )
}

playlistCard.propTypes = {
    data: PropTypes.object,
  };

export default playlistCard