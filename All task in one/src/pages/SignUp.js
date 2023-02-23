import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    address: "",
    mobile: "",
    gender:"",
    agree: false,
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname:"",
    email: "",
    address: "",
    mobile: "",
    gender: "",
    agree: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormEditable, setIsFormEditable] = useState(false);

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
    setErrors({
      ...errors,
      [event.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname) {
      newErrors.firstname = "First Name is required";
    }
    
    if (!formData.lastname) {
      newErrors.lastname = "Last Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    if (!formData.gender) {
      newErrors.gender = "gender is required";
    }
    if (!formData.mobile && formData.mobile.length !== 10 ) {
      newErrors.mobile = "Mobile No is required";
    }
    if (!formData.agree) {
      newErrors.agree = "Terms & conditions must be checked";
    }
    
    return newErrors;
  };

  const onkeypressHandler = (e)=>{
        if(!/[0-9]/.test(e.key)){
          e.preventDefault()
        }
      }

  const handleBlur = (event) => {
    if (!event.target.value && event.target.type !== "checkbox") {
      setErrors({
        ...errors,
        [event.target.name]: `${event.target.name} is required`,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsFormSubmitted(true);
    console.log(formData)
  };

  const handleEdit = () => {
    setIsFormSubmitted(false);
    setIsFormEditable(true);
  };
  const handleSave = () =>{
    setIsFormEditable(false);
    setIsFormEditable(false);
    
  }

  return (
    <div>
      {!isFormSubmitted ? (

      
        <form  style={{textAlign:'center'}} onSubmit={handleSubmit}>

        <p> SIGN up Form</p>
          <div>
            <label> First Name:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstname && <p style={{ color: "red" }}>{errors.firstname}</p>}
          </div>

          <div>
            <label> Last Name:</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname && <p style={{ color: "red" }}>{errors.lastname}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
          </div>

          <div>
            <label>gender:</label>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Male:
            <input
              type="radio"
              name="gender"
              value="male"
              // checked={formData.male}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; female:
            <input
              type="radio"
              name="gender"
              value="female"
              // checked={formData.female}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; other :
            <input
              type="radio"
              name="gender"
              value="other"
              // checked={formData.other}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
          </div>

          <div>
            <label>Mobile No:</label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              maxLength={10}
              minLength={10}
              onKeyPress={onkeypressHandler}
            
              onBlur={handleBlur}
              // disabled={!isFormEditable}
            />
            {errors.mobile  &&<p style={{ color: "red" }}>{errors.mobile}</p>}
          </div>
          <div>
            <label>Terms and Conditions:</label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              onBlur={handleBlur}
              // disabled={!isFormEditable}
            />
            {errors.agree && <p style={{ color: "red" }}>{errors.agree}</p>}
          </div>

          <button onClick={handleSave} type="submit">Save</button>
          <br/>
          <button type="submit">Submit</button>
          <br/>
         
        </form>
      )  : !isFormEditable ?  (
        <div style={{textAlign:'center'}}>
          <p>
            <b> Form Saved </b>
          </p>

          <p>First Name: {formData.firstname}</p>
          <p>Last Name: {formData.lastname}</p>
          <p>Email: {formData.email}</p>
          <p>Address: {formData.address}</p>
          <p>Mobile No.:{formData.mobile}</p>
          <p>gender : {formData.gender}</p>
          <button onClick={handleEdit}> edit </button>
        </div>
      ) :  (
        <div  style={{textAlign:'center'}}>
        <p>
            <b> Form Submited </b>
          </p>

          <p> First Name: {formData.firstname}</p>
          <p> Last Name: {formData.lastname}</p>
          <p>Email: {formData.email}</p>
          <p>Address: {formData.address}</p>
          <p>Mobile No.:{formData.mobile}</p>
          <p>gender : {formData.gender}</p>
          </div>
      )
      }
    </div>
  );
};
export default SignUp;






















































// ===========================================================================================
// import React, { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     mobile: "",
//     gender: "",
//     isCheck: false,
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     address: "",
//     mobile: "",
//     gender: "",
//     isCheck: "",
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [isFormEditable, setIsFormEditable] = useState(false);

//   const handleChange = (event) => {
//     if (event.target.type === "checkbox") {
//       setFormData({
//         ...formData,
//         [event.target.name]: event.target.checked
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [event.target.name]: event.target.value
//       });
//     }
//     setErrors({
//       ...errors,
//       [event.target.name]: ""
//     });
//   };
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) {
//       newErrors.name = "Name is required";
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     }
//     if (!formData.address) {
//       newErrors.address = "Address is required";
//     }
//     if (!formData.gender) {
//       newErrors.gender = "gender is required";
//     }
//     if (!formData.mobile) {
//       newErrors.mobile = "Mobile No is required";
//     }
//     if (!formData.isCheck) {
//       newErrors.isCheck= "Agreement is required";
//     }
//     return newErrors;
//   };

//   const onKeyPressHandler = (e) => {
//     if (!/[0-9]/.test(e.key)) {
//       e.preventDefault();
//     }

//   };

//   const handleBlur = (event) => {
//     if (!event.target.value && event.target.type !== "checkbox") {
//       setErrors({
//         ...errors,
//         [event.target.name]: `${event.target.name} is required`,
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleEdit(false)
//     const newErrors = validate();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     setIsFormSubmitted(true);
//   };

//   const handleEdit = () => {
//     setIsFormSubmitted(false);
//     setIsFormEditable(true);
//   };

//   return (
//     <div>
//       {!isFormSubmitted ? (
//         <form  style={{textAlign:'center'}} onSubmit={handleSubmit}>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//           </div>
//           <div>
//             <label>Address:</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
//           </div>

//           <div>
//             <label>gender:</label>
//             <br />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Male:
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; female:
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; other :
//             <input
//               type="radio"
//               name="gender"
//               value="female"

//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
//           </div>

//           <div>
//             <label>Mobile No:</label>
//             <input
//               type="number"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               onKeypress={onKeyPressHandler}
//               onBlur={handleBlur}
//               // disabled={!isFormEditable}
//             />
//             {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
//           </div>

//           <div>
//             <input
//               type="checkbox"
//               name="checkbox"
//               checked={formData.isCheck}
//               onBlur={handleBlur}
//               onChange={handleChange}

//             />

//             <label>Terms and Condition </label>
//             {errors.isCheck && <p style={{ color: "red" }}>{errors.isCheck}</p>}
//           </div>

//           <br />

//           <button type="submit" onBlur={handleBlur}>
//             Submit
//           </button>
//         </form>
//       ) : (
//         <div style={{textAlign:'center'}}>
//           <p>
//             <b> SIGN UP FROM </b>
//           </p>

//           <p>Name: {formData.name}</p>
//           <p>Email: {formData.email}</p>
//           <p>Address: {formData.address}</p>
//           <p>Mobile No.:{formData.mobile}</p>
//           <p>gender : {formData.gender}</p>
//           <button onClick={handleEdit}> edit </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;

// =============================================================================================================================

// import React, {  useState } from "react";
// import "./SignUp.css";
// //import BasicForm from '../components/signup/BasicForm'
// // import SimpleForm from '../components/signup/SimpleForm'
// const SignUp = () => {
//   // const formInputRef =useref();
//   const [form, setform] = useState({
//     FirstName: "",
//     LastName: "",
//   });

//   const [formTouched, setformTouched] = useState(false);
//   const [formIsValid , setFormIsValid] = useState(false);

//   const dataValid = form.trim() !== "";
//   const inputInvalid = !dataValid && formTouched;

// //   useEffect(() => {
// //     if (dataValid.validFname) {
// //       console.log("form is valid");
// //     }
// //   }, [dataValid]);

//   const inputChangeHandler = (event) => {
//     setform(event.target.value);
//   };

// // onclick it will through the error if field is emply
//   const inputBlurHandler = (event) => {
//         setformTouched(true);

//   }
//   const formsubmitHandler = (event) => {
//     event.preventDefault();

//     // setformTouched(true);

//     if (!dataValid){
//         return;
//     }

//     console.log({
//       form,
//     });

//     setform({
//       FirstName: "",
//       LastName: "",
//     });
// setformTouched(false);

//   };

//   const formInputClasses = inputInvalid
//     ? "form-control invalid"
//     : "form-control ";

//   return (
//     <>

//       <form onSubmit={formsubmitHandler}>
//         <div className={formInputClasses}>
//           {/* First Name */}
//           <label htmlFor="name">First Name : </label>
//           <input
//             type="text"
//             id="name"
//             onChange={inputChangeHandler}
//             onBlur={inputBlurHandler}
//             value={form.FirstName}
//           />
//           <br />
//           {/*validation message */}

//           {inputInvalid && (
//             <p style={{ color: "red" }}>First Name cannot be empty</p>
//           )}
//           <br />
//           {/* Last Name */}
//           <label htmlFor="name">Last Name : </label>
//           <input
//             type="text"
//             id="name"
//             onChange={inputChangeHandler}
//             value={form.LastName}
//           />
//           <br />
//           {inputInvalid && (
//             <p style={{ color: "red" }}>Last Name cannot be empty</p>
//           )}
//         </div>
//         <div className="formInput">
//           <button disabled >Submit </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SignUp;

// // -------------------------------- make firstly but cannot put validation msg below each making a new form with the new concepts learned in onblur session

// import React, { useState } from "react";
// import "./SignUp.css";

// const SignUp = (props) => {
//   const [form, setform] = useState({
//         firstName: " ",
//         lastName: " ",
//         email: " ",
//         address: "",
//         mobileNumber:"",
//       });
//   const [gender, setGender] = useState("");

//   const [human, setHuman] = useState(false);
//   const [validationMessage, setValidationMessage] = useState("");

//   const onkeypressHandler = (e)=>{
//     if(!/[0-9]/.test(e.key)){
//       e.preventDefault()
//     }
//   }
//   const eventHandler = (e) => setform(e.target.value)

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const {firstName , lastName , email , address ,mobileNumber} = form;

//     if (!firstName)
//     {
//       setValidationMessage("FirstName is required");
//       return;
//     }

//       if(!lastName)
//       {
//         setValidationMessage("Lastname is required");
//         return;
//       }

//       if(!email)
//       {
//         setValidationMessage("Email is required");
//         return;
//       }

//       if(!address) {
//         setValidationMessage("Address is required");
//         return;
//       }

//       if(!mobileNumber) {
//         setValidationMessage("Mobile number is required");
//         return;
//       }

//   // check if checkbox is checked
//   if (!human) {
//     setValidationMessage("Please agree to the terms and conditions");
//     return;
//   }

//     console.log({
//       firstName,
//       lastName,
//       email,
//       gender,
//       address,
//       mobileNumber,
//       human,
//     });
//     setValidationMessage("");
//     setGender("");
//     // setHuman(false);
//   };

//   return (
//     <>
//       <div className="container">
//       {isediting ? ():}
// {
//         <form onSubmit={handleSubmit}>
//           <h1 className="container"> Task 4 </h1>

//           <div className="list-item">
//             <label>
//               First Name:
//               <input
//                 className="add-button"

//                 placeholder="First Name"
//                 type="text"
//                 value={form.firstName}

//                 onChange={eventHandler}

//               />
//             </label>
//             <br />
//             <label>
//               Last Name:
//               <input
//                 className="add-button"
//                 placeholder="Last Name"
//                 type="text"
//                 value={form.lastName}
//                 onChange={eventHandler}
//               />
//             </label>
//             <br />
//             <label>
//             Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 className="add-button"
//                 placeholder="Email-Id"
//                 type="email"
//                 value={form.email}
//                 onChange={eventHandler}
//               />
//             </label>
//             <br />
//             <label>
//               Gender:
//               <br />
//               &nbsp;&nbsp;&nbsp; Male:
//               <input required
//                 type="radio"

//                 name="gender"
//                 value="male"
//                 // onChange={onchange}
//               />
//               &nbsp;&nbsp;&nbsp; Female:
//               <input required
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 // onChange={onchange}
//               />
//               &nbsp;&nbsp;&nbsp; Other:
//               <input required
//                 type="radio"
//                 name="gender"
//                 value="other"
//                 // onChange={onchange}
//               />
//             </label>
//             <br />
//             <label>
//             <br />
//               Address:
//               <textarea
//               placeholder="Address"
//                 className="add-button"
//                 value={form.address}
//                 onChange={eventHandler}
//               />
//             </label>
//             <br />
//             <label>
//               Mobile No:
//               <input
//                 className="add-button"
//                 type="text"
//                 placeholder="Mobile No"
//                 value={form.mobileNumber}
//                 maxLength={10}
//                onKeyPress={onkeypressHandler}

//                 onChange={eventHandler}
//               />
//             </label>
//             <br />
//             <label>
//               <input
//                 className="add-button"
//                 type="checkbox"
//                 required
//                 checked={human}
//                 onChange={(e) => setHuman(e.target.checked)}
//               />
//               I am not a robot
//             </label>
//             <br />
//             <button    className="add-button signup" type="submit" onChange={handleSubmit}>
//               Submit
//             </button>

//             {/* <button   className="add-button signup" type="submit">
//               edit
//             </button> */}
//             {validationMessage && <p style={{color:'red'}}>{validationMessage}</p>}
//           </div>
//         </form>}
//       </div>
//     </>
//   );
// };

// export default SignUp;
