import React from 'react'
import decal from '../images/decalOutlaw.jpg'

function BoxTwo() {
    return (
        <div>
            <div className="max-w-sm mt-8 rounded overflow-hidden shadow-lg">
                <a className=" " href="https://decaloutlaw.com" target="_blank">
                    <img src={decal} className="w-full mt-4 rounded-t-md"></img>
                </a>
              <div className="px-6 py-4 bg-gray-200">
                <div className="font-bold text-xl mb-2 pt-2 text-center">Decal Outlaw</div>
                <p className="text-gray-700 text-base mt-4">
                    This was the very first paid project I was involved in creating, deploying, and maintaining. The webiste was produced using WordPress & available plugins.
                </p>
              </div>
                <div className="px-6 pt-4 pb-2 bg-gray-300 flex">
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

export default BoxTwo
