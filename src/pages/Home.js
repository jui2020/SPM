import React from 'react'

import { Link ,useParams} from 'react-router-dom'
import ContactUs from './ContactUs'

const Home = () => {

  const {id } = useParams();
  return (
    <>
        <section>
            
            <div style={{textAlign:'center',fontSize:'x-large'}}><p>Home page details</p>


            <div style={{ textAlign: "center" }}>
                <Link to="/Home/1"> click to get home with id </Link><br></br>
             
                <h1>Home  :{ id }
                </h1>
                
                 
            </div>
            </div>
            <ContactUs />
        </section>
    </>
  )
}

export default Home