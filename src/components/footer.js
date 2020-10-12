import React from 'react'

const footer = () => {
    return (
        <footer className="text-custom-offWhite body-font">
        <div className="">
          <div className="container flex flex-col-reverse px-5 py-4 mx-auto justify-evenly sm:flex-row">
            <p className="text-sm text-center text-gray-700 sm:text-left">{`</>`} by 
              <a href="https://goosebumps.co.zw" className="ml-1 text-purple-600 hover:text-purple-700" target="_blank"
                rel="noopener noreferrer">Goosebumps Collective</a>
            </p>
          </div>
        </div>
    </footer>
    )
}

export default footer
