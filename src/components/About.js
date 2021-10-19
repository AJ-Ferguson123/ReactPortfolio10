import React from 'react'
import ScrollIntoView from 'react-scroll-into-view';
import {FiChevronDown} from 'react-icons/fi'
 
function About() {
    return(
        <div className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black md:text-4xl font-bold text-center">
                Hey, hey 👋                
            </p>
            <p className="text-base sm:text-xl text-center font-bold text-gray-800 leading-relaxed mt-4">
                I am a passionate full stack software developer. My main focus is on the front end UI/UX design to make websites easy to navigate and use for every skill level. 
            </p>
        <ScrollIntoView selector={'#tech'}>
            <div className="mx-auto pt-20">
                <FiChevronDown className="animate-bounce mx-auto text-3xl text-blue-100 border-b-2" />
            </div>
        </ScrollIntoView>
        </div>
    )
}

export default About;