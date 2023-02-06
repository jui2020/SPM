import React from 'react'
import CompoC from '../components/CompoC'
import CompoB from '../components/CompoB'
import Todo from '../components/Todo'
import '../components/Todo.css'
import ContactUs from './ContactUs'

const AboutUs = (props) => {
  console.log(props,'props')
  
  return (
    <>
   { props.data && <CompoC />}        
   
   <CompoB/>
<Todo />
<ContactUs />
  
</>

  
  )
}

export default AboutUs