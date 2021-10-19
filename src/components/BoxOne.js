import React from 'react'
import clone from '../images/redditClone.jpg'
import Aos from 'aos';

import "aos/dist/aos.css";

Aos.init();

function BoxOne() {
    return (
        <div className="" data-aos="zoom-out-down" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out-cubic">
            <div className="max-w-sm mt-8 rounded overflow-hidden shadow-lg">
                <a className=" " href="https://cuttingboardacademy.org/" target="_blank">
                <img src={clone} className="w-full mt-4 rounded-t-md" ></img>
                </a>
              <div className="px-6 py-4 bg-gray-200">
                <div className="font-bold text-xl mb-2 pt-2 text-center">Reddit Clone</div>
                <p className="text-gray-700 text-base mt-4">
                    A Front End clone of Reddit using technologies like ReactJS and TailWindsCSS. This was me getting used to the worlderful world of TailWindCSS and applying some shorthand.
                </p>
              </div>
                <div className="px-6 pt-4 pb-2 bg-gray-300 flex">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #ReactJS
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #TailWindCSS
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #MongoDB
                    </span>
                </div>
                </div>           
        </div>
    )
}

export default BoxOne;
