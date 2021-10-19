import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import Aos from 'aos'


import "aos/dist/aos.css"

Aos.init();


export default function Contact() 
{
    return(
        <div className="max-w-lg w-full text-center m-auto pt-36 pb-10" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
                <h1 className="text-4xl sm:4xl">
                    Interested, just Contact me.
                </h1>
                <a href="mailto:ajferguson@protonmail.com">
                    <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer rounded-md hover:bg-green-900 hover:text-blue-100">
                        <div className="flex flex-row items-center">
                            <span className="mr-3">to get in touch</span>
                            <FaAngleRight />
                        </div>
                    </span>
                </a>
        </div>
    )
}


