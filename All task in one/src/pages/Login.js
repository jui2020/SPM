import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    watch,
    // control,
    handleSubmit,
    

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ textAlign: "center" }}>
        <label>Full Name : </label>
        <input
          {...register("fullName", { required: true, minLength: 2 })}
          placeholder="Full Name "
        />
        <br />
        {errors.fullName && errors.fullName.type === "required" && (
          <p style={{ color: "red" }}> Full Name is required.</p>
        )}
        <br />
        <label>Email :</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          })}
        />
        <br />
        {errors.email && errors.email.type === "required" && (
          <p style={{ color: "red" }}>Email is required.</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p style={{ color: "red" }}>Email is not valid.</p>
        )}
        <label>Password :</label>
        <input
          type="passWord"
          name="passWord"
          placeholder="password"
          {...register("passWord", {
            required: true,
            minLength: 6,
          })}
        />
        <br />
        {errors.passWord && errors.passWord.type === "required" && (
          <p style={{ color: "red" }}>Password is required.</p>
        )}
        {errors.passWord && errors.passWord.type === "minLength" && (
          <p style={{ color: "red" }}>
            Password should be at-least 6 characters.
          </p>
        )}
        <div>
          <label>Confirm Password</label>
     
          <input
            {...register("conPsw", {
              required: true,
              validate: (value) => value === watch("passWord"),
            })}
            placeholder="Confirm Password"
            type="password"
          />
          {errors.conPsw && errors.conPsw.type === "required" && (
            <p style={{ color: "red" }}>Please enter the confirm Password</p>
          )}
          {errors.conPsw && errors.conPsw.type === "validate" && (
            <p style={{ color: "red" }}>Please Enter Same Password</p>
          )}
        </div>
        <br />
<div>
        <label>Phone Number</label><br />
                    <input
                        {...register("phnNum", { required: true, pattern: /^(?:(?:\+|0{0,2})91(\s*[    -]\s*)?|[0]?)?[789]\d{9}$/ })}
                        placeholder="Phone Number"
                        type="text"
                        maxLength={10}
                    />
                    {/* { /<p style={{ color: "red" }}>{phnNum.length > 10 ? "Max length is  10" : ""}</p> }   */}
                    {errors.phnNum && errors.phnNum.type === 'pattern' && <p style={{ color: "red" }}>Invalid mobile number</p>}
                    {errors.phnNum && errors.phnNum.type === 'required' && <p style={{ color: "red" }}>Please Enter the mobile number</p>}
        <br />




        </div>
        <label> Select the option :</label>
        <select id="fruit-select" {...register("state", { required: true })}>
          <option value="">Select state...</option>
          <option value="apple">Gujarat</option>
          <option value="banana">Maharastra</option>
          <option value="orange">Uttar Pradhesh</option>
          <option value="grape">Rajasthan</option>
        </select>
        <br />
        {errors.state && (
          <p style={{ color: "red" }}>please select the state </p>
        )}

        <br />

        <div>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              value="male"
              {...register("gender", { required: true })}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              value="female"
              {...register("gender", { required: true })}
            />
            Female
          </label>

          <label htmlFor="other">
            <input
              type="radio"
              id="other"
              value="other"
              {...register("other", { required: true })}
            />
            Other
          </label>
        </div>
        {errors.gender && (
          <p style={{ color: "red" }}>This field is required</p>
        )}
        <br />

        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            {...register("agree", { required: true })}
          />
          I agree to the terms and conditions
        </label>
        {errors.agree && (
          <p style={{ color: "red" }}>
            You must agree to the terms and conditions
          </p>
        )}

        <br />
        <input type="submit" />
      </div>
    </form>
  );
}
