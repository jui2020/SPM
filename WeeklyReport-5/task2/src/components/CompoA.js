import React from 'react'
import CompoC from './CompoC'

const CompoA = (props) => {
  

console.log(props,'props')

  return (
    <div>
   { props.data && <CompoC />}        
   <button type='button' onClick={props.getData} >CompA</button>
    </div>
  )
}

export default CompoA



