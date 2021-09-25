import React from 'react'
import profile from '../images/watch.jpg'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {SiProtonmail} from 'react-icons/si'

 function Card() {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                <div className="">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
                       src={profile} alt="watch">
                    </img>
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-gray-900">
                        Aaron J Ferguson
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Full Stack || FrontEnd Developer
                    </p>
                    <div className="flex self-auto justify-center mt-4">

                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-700 hover:bg-gray-900 rounded-full hover:text-gray-300
                    transition-colors duration-300" href="https://github.com/AJ-Ferguson123">
                        <FaGithubSquare />
                            <span className="sr-only">
                                GitHub 
                            </span>
                    </a>         
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-gray-900 rounded-full hover:text-blue-300
                    transition-colors duration-300" href="https://github.com/AJ-Ferguson123">
                        <FaLinkedin />
                            <span className="sr-only">
                                LinkedIn 
                            </span>
                    </a>    
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-gray-900 rounded-full hover:text-pink-400
                    transition-colors duration-300" href="https://github.com/AJ-Ferguson123">
                        <GrInstagram />
                            <span className="sr-only">
                                InstaGram 
                            </span>
                    </a>               
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-900 rounded-full hover:text-white
                    transition-colors duration-300" href="https://github.com/AJ-Ferguson123">
                        <SiProtonmail />
                            <span className="sr-only">
                                eMail 
                            </span>
                    </a>   
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Card;