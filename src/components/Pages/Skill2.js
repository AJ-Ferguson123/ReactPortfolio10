import React from 'react'
import {SiTailwindcss} from 'react-icons/si'

function Skill2() {
    return (
        <>        
            <div className="flex flex-wrap justify-center pt-2">
                <div className="w-28 p-16 h-4 flex flex-row flex-wrap content-center overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss color="#024686" className="text-4xl" />
                    <p className="pt-2">
                        TailWindCSS
                    </p>
                </div>
            </div>        
        </>
    )
}

export default Skill2
