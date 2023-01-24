import React, { useState } from 'react'
import CompoA from './CompoA'


function CompoB(props) {
    const [data, setData] = useState(false)


    const getData = () => {
        setData((priviousValue)=> !priviousValue)
    }
    
    return (
        <div>

            <CompoA getData={getData} data={data} />
        </div>
    )
}

export default CompoB








// import React from 'react'
// import CompoB from './CompoB'


// const CompoA = (props) => {

//     
//         alert('CompoB is called  ')
//     }
//   return (
//     <div><p>CompoA </p>

//     {/* in nested function a component calling b through button */}
    

//     <CompoB data={getData} />
//     </div>
//   )
// }

// export default CompoA;