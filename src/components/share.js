/* eslint-disable */
import React from 'react'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import {Facebook, Twitter, Linkedin} from 'react-feather'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <div className='flex flex-row items-center justify-center space-x-3 text-custom-offWhite'>
        <span className='font-bold text-custom-offWhite'>
            Share:
        </span>
          <FacebookShareButton url={url} >
                <Facebook/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <Twitter />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <Linkedin/>
          </LinkedinShareButton>


          <WhatsappShareButton url={url} title={title}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 -mr-1 font-bold" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
           </WhatsappShareButton>
        </div>
      )

}
export default ShareButtons