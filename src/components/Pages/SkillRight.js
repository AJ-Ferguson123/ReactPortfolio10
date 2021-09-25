import React from 'react'
import {FaReact, FaNodeJs, FaHtml5} from 'react-icons/fa'
import {SiTailwindcss, SiJavascript, SiNpm} from 'react-icons/si'

function SkillRight() {
    return (
        <>
        <div className="max-w-4xl mx-auto justify-content justify-center py-12" id="tech">
            <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Tech Stack
            </p>
            </div>
        <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 justify-items-stretch">           
                <div className="techStack">
                    <FaReact color="#00d8ff" className="mt-4" />
                    <p className="pt-2">
                        React
                    </p>
                </div>
                <div className=" techStack">
                    <FaNodeJs color="" className="mt-4 text-green-600" />
                    <p className="pt-2">
                        NodeJS
                    </p>
                </div>
                <div className="techStack">
                    <FaHtml5 color="#ef6026" className="mt-4" />
                    <p className="pt-2">
                        HTML5
                    </p>
                </div>
                  
                <div className=" techStack">
                    <SiTailwindcss color="#11acea" className="mt-4" />
                    <p className="pt-2">
                        TailWindCSS
                    </p>
                </div>
                <div className="techStack">
                    <SiJavascript color="#f3cf01" className="mt-4" />
                    <p className="pt-2">
                        JavScript
                    </p>
                </div>
                <div className="techStack">
                    <SiNpm color="#c20001" className="mt-4" />
                    <p className="pt-2">
                        NPM
                    </p>
                </div>            
        </div>
        </>
    )
}

export default SkillRight
