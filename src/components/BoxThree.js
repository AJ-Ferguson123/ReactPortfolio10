import React from 'react'
import board from '../images/cuttingBoard.jpg'

function BoxThree() {
    return (
        <div>
            <div className="max-w-sm mt-8 rounded overflow-hidden shadow-lg">
              <img src={board} className="w-full mt-4 rounded-t-md"></img>
              <div className="px-6 py-4 bg-gray-200">
                <div className="font-bold text-xl mb-2 pt-2 text-center">The Cutting Board</div>
                <p className="text-gray-700 text-base mt-4">
                     Created during 'GiveFest' which is annual event for local Ohio non-profit businesses. I worked on the media, content, and wireframe of the website. Using WordPress, this project was complted over the course of 3 days.
                </p>
              </div>
                <div className="px-6 pt-4 pb-2 bg-gray-300">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #WordPress
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #jQuery
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #CSS
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #MySQL
                    </span>
                </div>
              
          </div>  
        </div>
    )
}

export default BoxThree
