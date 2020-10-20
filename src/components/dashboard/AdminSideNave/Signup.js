// import "./Footer.css"
// import logo from './lolo.svg'
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import { FaFacebook } from 'react-icons/fa';
// import Footer from "./Footer";
// import  './SignUp.css'
// import Navbar from './useSignUp';
import Navbar from "../../Navbar"



       




 export const Signup = () =>{
	const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phone: "", profession: "", password: "", password2: "", address: "", state: "", city: "", country: "", csv: "", gender: "", origin: "", })
	const[checked, setChecked] = useState(false)
	// const [errors, setErrors] = useState({ })
	// const [isSubmitting, setIsSubmitting] = useState(false)
	
const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		
		})
		setChecked(!checked)
	}
	
	

	function handleSubmit(e) {
		e.preventDefault()

		console.log(values)
		//handling errors

		//Setting input to initiial state
  }


		return (
			< >
      <div className="addmember">
			<Navbar />
				<div className="signupwrapper">
				
        
					<section className="signup-parent">
          
          <h2 className="register-member">Register a New Member</h2>
          <br />
      <br />
      
  
						<div className="loginForm">
							{/* <img src={logo} className="App-logo" alt="logo" /> */}
							<form    onSubmit={handleSubmit} className="form_parent">
							<span>
								<input type="text" name="firstName"  placeholder="FirstName" value={values.firstName} onChange={handleChange}  size="50"  />
								{/* <p className="first">First Name</p> */}
								{/* <label ><i class="fas fa-user"></i></label> */}
							</span>
								
							<span>
								<input type="text" name="lastName" placeholder="LastName" value={values.lastName} onChange={handleChange}  size="50"/>
								{/* <p>Last Name</p> */}
								{/* <label ><i className="fas fa-user"></i></label> */}
							</span>
							
								<span>
								<input type="email" name="email"  placeholder="Email" value={values.email} onChange={handleChange}  size="50"  />
									{/* <p>Email address</p> */}
									{/* <label ><i class="fas fa-envelope"></i></label> */}
								</span>
						
							<span>
								<input type="tel" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange}  size="50"  />
								{/* <p>Phone Number</p> */}
								{/* <label ><i className="fas fa-phone-volume"></i></label> */}
							</span>
							
							<span>
								<input type="profession" name="profession" placeholder="profession" value={values.profession} onChange={handleChange} size="50" />
								<p>profession</p>
								{/* <label ><i className="fas fa-user"></i></label> */}
							</span>

              <span>
								<input type="gender" name="gender" placeholder="gender" value={values.gender} onChange={handleChange} size="50" />
								<p>gender</p>
								{/* <label ><i className="fas fa-user"></i></label> */}
							</span>

              <span>
								<input type="origin" name="origin" placeholder="origin" value={values.origin} onChange={handleChange} size="50" />
								<p>origin</p>
								{/* <label ><i className="fas fa-user"></i></label> */}
							</span>
							
								<span>
								<input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}  size="50"  />
									{/* <p>Password</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>
                
								{/* {errors.password && <p className="errors">address {errors.password}</p>} */}
								<span>
									<input type="password" name="password2"  placeholder="Password2" value={values.password2} onChange={handleChange}  size="50" />
									{/* <p>Confirm Password</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>
                
                <span>
									<input type="address" name="address"  placeholder="Address" value={values.address} onChange={handleChange}  size="50" />
									{/* <p>address</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>

                <span>
									<input type="state" name="state" placeholder="State" value={values.state} onChange={handleChange}  size="50" />
									{/* <p>state</p> */}
									{/* <label ><i className="fas fa-lock"></i></label> */}
								</span>

                <span>
									<input type="city" name="city" placeholder="City" value={values.city} onChange={handleChange}  size="50" />
									{/* <p>city</p> */}
                  {/* <i class='fas fa-house-user'></i> */}
									{/* <label ><i className="fas fa-house-user"></i></label> */}
								</span>

                <span>
									<input type="country" name="country" placeholder="Country" value={values.country} onChange={handleChange}  size="20" />
								
								</span>
                
								<label>
							</label>
								<div>
									<button type="submit" className="btn10" >Sign up</button>
								</div>

								
							</form>
							
            	</div>
              <h2 className="multiple-file">Upload Multiple File</h2>
              <section className="form-head">
              
					<form onSubmit={handleSubmit} className="formparent">
							<span>
								<input type="text" name="csv"  placeholder="organisation csv" value={values.csv} onChange={handleChange}  size="20"  />
								{/* <p className="first">First Name</p> */}
								{/* <label ><i class="fas fa-user"></i></label> */}
							</span>
								
									<button type="submit" className="csv-btn" >Submit</button>
								
							</form>
              </section>
					</section>
          
					</div>
          </div>
			</>
		)
} 
export default Signup;