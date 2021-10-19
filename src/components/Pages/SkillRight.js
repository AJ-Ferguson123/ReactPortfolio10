import React from 'react'
import {FaReact, FaNodeJs, FaHtml5} from 'react-icons/fa'
import {SiTailwindcss, SiJavascript, SiNpm} from 'react-icons/si'

import AOS from 'aos';
import 'aos/dist/aos.css';


function SkillRight() {
    AOS.init({
        useClassNames: true,
      });

    return (
        <>
        <div className="max-w-4xl mx-auto justify-content justify-center pt-4 pb-16" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="200">
            <p className="text-2xl text-black text-center sm:text-4xl py-16 font-bold">
                Tech Stack
            </p>            
        <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 justify-center">           
                <div className="techStack">
                    <a href="https://reactjs.org/" alt="reactJS site" traget="_blank">
                        <FaReact color="#00d8ff" className="mt-4" />
                            <p className="pt-2">
                                React
                            </p>
                    </a>
                </div>
                <div className="techStack">
                    <a href="https://nodejs.org/en/" alt="nodeJS site" traget="_blank">
                        <FaNodeJs color="" className="mt-4 text-green-600 hover:-rotate-180" />
                            <p className="pt-2">
                                NodeJS
                            </p>
                    </a>
                </div>
                <div className="techStack">
                    <a href="https://html.com/html5/" alt="HTML5 site" target="_blank">
                        <FaHtml5 color="#ef6026" className="mt-4" />
                            <p className="pt-2">
                                HTML5
                            </p>
                    </a>
                </div>                  
                <div className=" techStack">
                    <a href="https://tailwindcss.com/" alt="TailWindCSS site" target="_blank">
                        <SiTailwindcss color="#11acea" className="mt-4" />
                            <p className="pt-2">
                                TailWindCSS
                            </p>
                    </a>
                </div>
                <div className="techStack">
                    <a href="https://www.javascript.com/" alt="JavaScript site" target="_blank">
                        <SiJavascript color="#f3cf01" className="mt-4" />
                            <p className="pt-2">
                                JavScript
                            </p>
                    </a>
                </div>
                <div className="techStack">
                    <a href="https://www.npmjs.com/" alt="NPM website" target="_blank">
                        <SiNpm color="#c20001" className="mt-4" />
                            <p className="pt-2">
                                NPM
                            </p>
                    </a>
                </div>
        </div>
        </div>
        </>
    )
}

export default SkillRight
