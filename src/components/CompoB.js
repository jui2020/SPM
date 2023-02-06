import React, { useState } from 'react'

import CompoC from './CompoC'




function CompoB (props) {
    const [data, setData] = useState(false)


    const getData = () => {
        setData((priviousValue)=> !priviousValue)
    }
    
    return (
        <div>
            <p>this is component B below calling component C</p>
            <CompoC getData={getData} data={data} />
            
        </div>
    )
}

export default CompoB






