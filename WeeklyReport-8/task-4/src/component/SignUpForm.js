import React, { useState } from 'react';
import '../App.css'

const SignUp = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [gender, setGender] = useState('');
const [address, setAddress] = useState('');
const [mobileNumber, setMobileNumber] = useState('');
const [human, setHuman] = useState(false);
const [validationMessage, setValidationMessage] = useState('');



const handleSubmit = (event) => {
    
    event.preventDefault();



    if (!firstName || !lastName || !email || !gender || !address || !mobileNumber) {
        setValidationMessage( 'All fields are required');
        return;
      }
      
      // email validation
      const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailRegex)) {
        setValidationMessage('Invalid email address');
        return;
      }
      
      // mobile number validation
      const mobileRegex = /^\d{10}$/;
      if (!mobileNumber.match(mobileRegex)) {
        setValidationMessage('Invalid mobile number');
        return;
      }
      
      // check if checkbox is checked
      if (!human) {
        setValidationMessage('Please agree to the terms and conditions');
        return;
      }
      
      
      console.log({
        firstName,
        lastName,
        email,
        gender,
        address,
        mobileNumber,
        human
      });
      setValidationMessage('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setGender('');
      setAddress('');
      setMobileNumber('');
      setHuman(false);
      };
      
      
      return (
        <>
        <div className='container' >
      <form onSubmit={handleSubmit}>
      <h1 className='container'> Task 4 </h1>
     
     <div className='list-item'>
      <label>
      First Name:
      <input  className='add-button' type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <br />
      <label>
      Last Name:
      <input className='add-button' type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <br />
      <label>
      Email:
      <input  className='add-button' type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
      Gender:
      <select  className='add-button' value={gender} onChange={e => setGender(e.target.value)}>
      <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other"> other</option>
      </select>
      </label>
      <br />
      <label>
      Address:
      <textarea  className='add-button' value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
      Mobile Number:
      <input  className='add-button' type="text" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
      </label>
      <br />
      <label>
      <input  className='add-button' type="checkbox" checked={human} onChange={e => setHuman(e.target.checked)} />
      I am not a robot 
      </label>
      <br />
      <button  className='add-button signup' type="submit">Sign Up</button>
      {validationMessage && <p>{validationMessage}</p>}
      </div>
      
      </form>
      </div>
      </>
      );
      };
      
      export default SignUp;
