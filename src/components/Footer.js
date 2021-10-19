import React from 'react'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {SiProtonmail} from 'react-icons/si'
import Aos from 'aos'

import "aos/dist/aos.css"

Aos.init();

function Footer() {
    return(
        <div className="py-10 border-t-1/2">
            <div className="flex justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-700 hover:bg-gray-900 rounded-full hover:text-gray-300
                    transition-colors duration-300" href="https://github.com/AJ-Ferguson123">
                        <FaGithubSquare />
                            <span className="sr-only">
                                GitHub 
                            </span>
                    </a>         
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-gray-900 rounded-full hover:text-blue-300
                    transition-colors duration-300" href="https://linkedin.com/in/aaron-j-ferguson">
                        <FaLinkedin />
                            <span className="sr-only">
                                LinkedIn 
                            </span>
                    </a>    
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-gray-900 rounded-full hover:text-pink-400
                    transition-colors duration-300" href="https://instagram.com/runawayrover02">
                        <GrInstagram />
                            <span className="sr-only">
                                InstaGram 
                            </span>
                    </a>               
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-900 rounded-full hover:text-white
                    transition-colors duration-300" href="mailto:ajferguson@protonmail.com">
                        <SiProtonmail />
                            <span className="sr-only">
                                eMail 
                            </span>
                    </a>   
            </div>
            <div className="flex justify-center mt-4">
                <p className="text-black mb-4">
                    made with 
                    <span className="mr-10" role="link" aria-label="heart">
                        <br />
                    ♡ by <a className="ml-1 text-blue-600 hover:underline hover:text-green-400" href="mailto:ajferguson@protonmail.com">
                        AJF</a>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Footer;