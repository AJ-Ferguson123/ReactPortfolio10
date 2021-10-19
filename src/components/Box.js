import React from 'react'
import BoxTwo from '../components/BoxTwo'
import BoxOne from './BoxOne'
import BoxThree from './BoxThree'


function Box() {

    return (
        < div className="max-w-4xl mx-auto justify-content justify-center pt-4 pb-16">
        <div id="tech" className="text-2xl font-bold my-10 p-2 flex justify-center">👷 Projects 👷</div>
            <div className="grid grid-flow-row grid-rows-3 gap-4 py-8 mt-8 md:flex sm:flex sm:flex-row sm:justify-evenly">          
                <BoxOne />
                <BoxTwo />
                <BoxThree /> 
            </div> 
         </div>
    )
}


export default Box
