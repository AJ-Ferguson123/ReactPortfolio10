import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import Aos from 'aos'


import "aos/dist/aos.css"
import Footer from './Footer';


function Contact() {
    Aos.init();

    return(
        <div className="max-w-lg w-full text-center m-auto pt-36 pb-10 mt-16" data-aos="fade-up"
        data-aos-anchor-placement="center-center" data-aos-duration="200">
                <h1 className="text-4xl sm:4xl">
                    Interested, just Contact me.
                </h1>
                <a href="mailto:ajferguson@protonmail.com" target="_blank">
                    <span className="mt-10 inline-block w-auto bg-black text-white text-base md:text-xl py-4 px-7 cursor-pointer rounded-md hover:bg-green-900 hover:text-red-900">
                        <div className="flex flex-row items-center transform rotate-45 md:rotate-45 sm:rotate-45">
                            <span className="mr-3 hover:text-blue-400">to get in touch</span>
                            <FaAngleRight />
                        </div>
                    </span>
                </a>
                <Footer />
        </div>
    )
}


export default Contact;